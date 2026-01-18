import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import Navbar from '../components/Navbar';  
import GlucoseChart from '../components/GlucoseChart';
import GlucoseInputCard from '../components/GlucoseInputCard';
import GlucoseRecord from '../components/GlucoseRecord';
import GDMForm from '../components/GDMForm';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();
  const [readings, setReadings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReadings = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/readings', {
          headers: { 'auth-token': localStorage.getItem('token') }
        });
        console.log('Fetched readings:', res.data);
        setReadings(res.data);
      } catch (err) {
        console.error('Failed to fetch readings:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReadings();
  }, []);

  const handleNewReading = (newReading) => {
    setReadings((prevReadings) => [newReading, ...prevReadings]); // Use functional update
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/readings/${id}`, {
        headers: { 'auth-token': localStorage.getItem('token') }
      });
      setReadings(readings.filter(r => r._id !== id));
    } catch (err) {
      console.error('Failed to delete reading:', err);
    }
  };

  if (loading) return <div className="loading-spinner">Loading...</div>;

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-grid">
        {/* Left Column */}
        <div className="left-column">
          <div className="welcome-card">
            <h2>Welcome back</h2>
            <h1>{user.name}</h1>
            <div className="patient-details">
              <p><strong>On:</strong> {readings[0]?.dateTime || '--'}</p>
              <p><strong>Last Reading:</strong> {readings[0]?.value || '--'} mg/dL</p>
            </div>
          </div>

          <div className="input-card">
            <GlucoseInputCard onNewReading={handleNewReading} />
          </div>
        </div>

        {/* Middle Column */}
        <div className="middle-column">
          <div className="chart-container">
            <GlucoseChart 
              readings={readings}
              preferredUnit="mg/dL" 
              width={350}
              height={220}
            />
          </div>

          <div className="records-container">
            <h3>Recent Glucose Readings</h3>
            {readings.length > 0 ? (
              readings.map(record => (
                <GlucoseRecord 
                  key={record._id} 
                  record={record} 
                  onDelete={handleDelete} 
                />
              ))
            ) : (
              <p>No readings yet. Add your first reading!</p>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          {/*  ~ use data types from this form and styling from GlucoseInputCard */}
          <GDMForm />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;