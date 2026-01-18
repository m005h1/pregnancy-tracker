// components/RecordCard.js
import React from 'react';

const RecordCard = ({ record, onDelete }) => {
  const getStatusColor = () => {
    switch(record.status) {
      case 'high': return '#ff6b6b';
      case 'low': return '#4dabf7';
      default: return '#51cf66';
    }
  };

  return (
    <div className="record-card" style={{ borderLeft: `4px solid ${getStatusColor()}` }}>
      <div className="record-header">
        <span className="record-value">{record.value} mg/dL</span>
        <span className="record-type">{record.readingType}</span>
        <button onClick={() => onDelete(record._id)} className="delete-btn">
          ×
        </button>
      </div>
      <div className="record-details">
        <span className="record-date">
          {new Date(record.dateTime).toLocaleString()}
        </span>
        {record.notes && (
          <p className="record-notes">{record.notes}</p>
        )}
        {record.riskScore && (
          <div className="risk-indicator">
            <div 
              className="risk-bar" 
              style={{ width: `${record.riskScore * 100}%` }}
            ></div>
            <span>Risk: {(record.riskScore * 100).toFixed(0)}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecordCard;