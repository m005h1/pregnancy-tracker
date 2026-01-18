// Determine API URL based on environment
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

// Development: localhost
// Production: same domain (if frontend+backend on same Vercel project) or your backend URL
export const API_BASE_URL = isDevelopment 
  ? 'http://localhost:5000/api'  // Your local backend
  : isProduction
  ? '/api'  // Relative path when deployed on same domain
  : 'http://localhost:5000/api';

// OR use environment variables (better):
export const API_URL = process.env.REACT_APP_API_URL || 
  (process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5000/api');