import React, { useState } from 'react';
import './GDMForm.css';

function GDMForm() {
  const [formData, setFormData] = useState({
    age: '',
    pregnancyNo: '',
    weight: '',
    height: '',
    bmi: '',
    heredity: ''
  });

  const [result, setResult] = useState(null);

  const labelMap = {
    age: 'Age',
    pregnancyNo: 'Number of Pregnancies',
    weight: 'Weight (kg)',
    height: 'Height (cm)',
    bmi: 'BMI (Body Mass Index)',
    heredity: 'Family History of Diabetes'
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const features = [
      parseFloat(formData.age),
      parseFloat(formData.pregnancyNo),
      parseFloat(formData.weight),
      parseFloat(formData.height),
      parseFloat(formData.bmi),
      parseInt(formData.heredity)
    ];

    try {
      const response = await fetch('http://localhost:5001/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ features })
      });

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error('Error fetching prediction:', err);
    }
  };

  return (
    <div>
      <h2>GDM Prediction</h2>
      <div className="diabetes-form-container">
        <form onSubmit={handleSubmit}>
          {['age', 'pregnancyNo', 'weight', 'height', 'bmi'].map((field) => (
            <div className="form-group" key={field}>
              <label>{labelMap[field]}</label>
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
            <label>{labelMap.heredity}</label>
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

          <button type="submit" className="submit-btn">
            Get Risk Prediction
          </button>
        </form>

        {result && (
          <div className="prediction-result">
            <div className={`risk-level ${result.prediction === 1 ? 'high' : 'low'}`}>
              {result.prediction === 1 ? 'High Risk' : 'Low Risk'}
            </div>
            <div className="probability">
              Confidence: {
                result.prediction === 1
                  ? (result.probability * 100).toFixed(1) + '%'
                  : ((1 - result.probability) * 100).toFixed(1) + '%'
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GDMForm;
