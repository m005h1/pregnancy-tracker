// components/DiabetesForm.js
import React, { useState } from 'react';
import axios from 'axios';

const DiabetesForm = ({ onNewRecord }) => {
  const [formData, setFormData] = useState({
    age: '',
    pregnancyNo: '',
    weight: '',
    height: '',
    bmi: '',
    heredity: '', // 1 for yes, 0 for no
    notes: ''
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare features array for TabNet model
      const features = [
        parseFloat(formData.age),
        parseFloat(formData.pregnancyNo),
        parseFloat(formData.weight),
        parseFloat(formData.height),
        parseFloat(formData.bmi),
        parseInt(formData.heredity)
      ];

      // 1. Get prediction from Flask API
      const predRes = await axios.post('http://localhost:5001/predict', {
        features: [/* float values */]
      });

      // 2. Save to MongoDB if needed
      const record = {
        ...formData,
        prediction: predRes.data.prediction,
        probability: predRes.data.probability
      };

      const saveRes = await axios.post('/api/readings', record, {
        headers: { 'auth-token': localStorage.getItem('token') }
      });

      // 3. Update UI
      setPrediction(predRes.data);
      onNewRecord(saveRes.data);
      setFormData({
        age: '', pregnancyNo: '', weight: '', height: '',
        bmi: '', heredity: '', notes: ''
      });

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="diabetes-form-container">
      <h3>Health Data Form</h3>
      <form onSubmit={handleSubmit}>
        {['age', 'pregnancyNo', 'weight', 'height', 'bmi'].map((field) => (
          <div className="form-group" key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type="number"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <div className="form-group">
          <label>Heredity (Family History of Diabetes)</label>
          <select
            name="heredity"
            value={formData.heredity}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>Notes (Optional)</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Get Risk Prediction
        </button>
      </form>

      {prediction && (
        <div className="prediction-result">
          <div className={`risk-level ${prediction.prediction === 1 ? 'high' : 'low'}`}>
            {prediction.prediction === 1 ? 'High Risk' : 'Low Risk'}
          </div>
          <div className="probability">
            Confidence: {(prediction.probability * 100).toFixed(1)}%
          </div>
        </div>
      )}
    </div>
  );
};

export default DiabetesForm;
