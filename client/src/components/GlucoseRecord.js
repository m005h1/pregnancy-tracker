// components/GlucoseRecord.js
import React from 'react';
import './GlucoseRecord.css';
import { determineStatus } from '../utils/statusChecker';

const GlucoseRecord = ({ record, onDelete }) => {
  const formatType = (type) => {
    const typeMap = {
      fasting: 'Fasting',
      postBreakfast1hr: '1-hr Post Breakfast',
      postBreakfast2hr: '2-hr Post Breakfast',
      postLunch1hr: '1-hr Post Lunch',
      postLunch2hr: '2-hr Post Lunch',
      postDinner1hr: '1-hr Post Dinner',
      postDinner2hr: '2-hr Post Dinner',
      bedtime: 'Bedtime'
      // ... other types
    };
    return typeMap[type] || type;
  };

  const status = determineStatus(record.value, record.readingType);
  
  const getStatusColor = () => {
    switch(status) {
      case 'high': return '#ff6b6b';
      case 'low': return '#4dabf7';
      default: return '#51cf66';
    }
  };
  console.log("determineStatus:", determineStatus);

  return (
    <div className="glucose-record" style={{ borderLeft: `4px solid ${getStatusColor()}` }}>
      <div className="record-header">
        <span className="record-value">{record.value} mg/dL</span>
        <span className="record-type">{formatType(record.readingType)}</span>
        <span className="record-date">
          {new Date(record.dateTime).toLocaleString([], {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </span>
        <button 
          onClick={() => onDelete(record._id)} 
          className="delete-btn"
          aria-label="Delete record"
        >
          ×
        </button>
      </div>
      {record.notes && (
        <div className="record-notes">
          <p>{record.notes}</p>
        </div>
      )}
    </div>
  );
};

export default GlucoseRecord;