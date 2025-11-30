import axios from 'axios';

/**
 * API client for the Project Open to Intern backend.
 * Handles all HTTP requests to the backend API.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message || 'An error occurred';
    return Promise.reject(new Error(message));
  }
);

/**
 * College API endpoints
 */
export const collegeApi = {
  /**
   * Create a new college
   * @param {Object} collegeData - { name, fullName, logoLink }
   * @returns {Promise} - Created college data
   */
  create: async (collegeData) => {
    const response = await apiClient.post('/functionup/colleges', collegeData);
    return response.data;
  },

  /**
   * Get college details with all interns
   * @param {string} collegeName - Abbreviated college name (e.g., 'iith')
   * @returns {Promise} - College details with interns list
   */
  getDetails: async (collegeName) => {
    const response = await apiClient.get('/functionup/collegeDetails', {
      params: { collegeName },
    });
    return response.data;
  },
};

/**
 * Intern API endpoints
 */
export const internApi = {
  /**
   * Create a new intern
   * @param {Object} internData - { name, email, mobile, collegeName }
   * @returns {Promise} - Created intern data
   */
  create: async (internData) => {
    const response = await apiClient.post('/functionup/interns', internData);
    return response.data;
  },
};

export default apiClient;
