// components/GlucoseInputCard.js
import React, { useState } from 'react';
import axios from 'axios';
import './GlucoseInputCard.css';

const GlucoseInputCard = ({ onNewReading }) => {
  const [formData, setFormData] = useState({
    value: '',
    readingType: 'fasting',
    notes: '',
    dateTime: new Date().toISOString().slice(0, 16) // Default to now
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Determine status (simple version - enhance with your medical logic)
      let status = 'normal';
      if (formData.readingType === 'fasting' && formData.value > 95) status = 'high';
      else if (formData.value > 140) status = 'high';
      else if (formData.value < 70) status = 'low';

      const reading = {
        ...formData,
        status,
        value: Number(formData.value)
      };

      // Save to MongoDB
      const res = await axios.post('http://localhost:5000/api/readings', reading, {
        headers: { 'auth-token': localStorage.getItem('token') }
      });

      // Update UI
      onNewReading(res.data);
      setFormData({
        value: '',
        readingType: 'fasting',
        notes: '',
        dateTime: new Date().toISOString().slice(0, 16)
      });

    } catch (err) {
      console.error('Failed to save reading:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glucose-input-card">
      <h3>New Glucose Reading</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Value (mg/dL)</label>
          <input
            type="number"
            name="value"
            value={formData.value}
            onChange={handleChange}
            required
            min="30"
            max="500"
          />
        </div>

        <div className="form-group">
          <label>Type</label>
          <select
            name="readingType"
            value={formData.readingType}
            onChange={handleChange}
            required
          >
            <option value="fasting">Fasting</option>
            <option value="postBreakfast1hr">1-hr Post Breakfast</option>
            <option value="postBreakfast2hr">2-hr Post Breakfast</option>
            <option value="postLunch1hr">1-hr Post Lunch</option>
            <option value="postLunch2hr">2-hr Post Lunch</option>
            <option value="postDinner1hr">1-hr Post Dinner</option>
            <option value="postDinner2hr">2-hr Post Dinner</option>
            <option value="bedtime">Bedtime</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date & Time</label>
          <input
            type="datetime-local"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Notes (Optional)</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="2"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Save Reading'}
        </button>
      </form>
    </div>
  );
};

export default GlucoseInputCard;