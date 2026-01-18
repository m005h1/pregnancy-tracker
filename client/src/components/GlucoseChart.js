import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './GlucoseChart.css';
import { determineStatus } from '../utils/statusChecker';


// Utility: Format reading type
const formatReadingType = (type) => {
  const typeMap = {
    fasting: 'Fasting',
    postBreakfast1hr: '1-hr Post-Breakfast',
    postBreakfast2hr: '2-hr Post-Breakfast',
    postLunch1hr: '1-hr Post-Lunch',
    postLunch2hr: '2-hr Post-Lunch',
    postDinner1hr: '1-hr Post-Dinner',
    postDinner2hr: '2-hr Post-Dinner',
    bedtime: 'Bedtime',
    other: 'Other'
  };
  return typeMap[type] || type;
};

// Utility: Get color by status
const getColorByStatus = (status, type = 'background') => {
  const colors = {
    low: {
      background: 'rgba(54, 162, 235, 0.6)',
      border: 'rgba(54, 162, 235, 1)'
    },
    high: {
      background: 'rgba(255, 99, 132, 0.6)',
      border: 'rgba(255, 99, 132, 1)'
    },
    normal: {
      background: 'rgba(75, 192, 192, 0.6)',
      border: 'rgba(75, 192, 192, 1)'
    }
  };

  return colors[status]?.[type] || colors.normal[type];
};


const GlucoseChart = ({ readings, preferredUnit, width = 400, height = 250 }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!readings.length || !chartRef.current) return;

    // Cleanup previous chart
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Prepare chart data
    const labels = readings.map(reading =>
      new Date(reading.dateTime).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    );

    const values = readings.map(r => r.value);
    const backgroundColors = readings.map(reading =>
      getColorByStatus(determineStatus(reading.value, reading.readingType), 'background')
    );
    const borderColors = readings.map(reading =>
      getColorByStatus(determineStatus(reading.value, reading.readingType), 'border')
    );
    
    const ctx = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: `Blood Glucose (${preferredUnit})`,
          data: values,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 7,
          tension: 0.2,
          fill: false
        }]
      },
      options: {
        responsive: true,
        animation: {
          duration: 1000,
          easing: 'easeOutQuart'
          
        },
        scales: {
          y: {
            beginAtZero: false
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                const reading = readings[context.dataIndex];
                const status = determineStatus(reading.value, reading.readingType);
                return `Glucose: ${reading.value} ${preferredUnit} | Status: ${status.charAt(0).toUpperCase() + status.slice(1)}`;
              },
            }
          },
          legend: {
            display: false
          }
        }
      }
    });

    // Cleanup
    return () => {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, [readings, preferredUnit]);

  return (
    <div className="glucose-chart" style={{ width: `${width}px`, height: `${height}px` }}>
      <canvas ref={chartRef} width={width} height={height}></canvas>
    </div>
  );
};

export default GlucoseChart;
