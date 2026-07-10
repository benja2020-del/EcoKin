const API_BASE_URL = window.API_BASE_URL || 'https://eco-kinshasa-api.onrender.com';
const AUTH_TOKEN_KEY = 'ecoKinAuthToken';
const AUTH_USER_KEY = 'ecoKinUserData';

const getAuthToken = () => localStorage.getItem(AUTH_TOKEN_KEY);
const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  } else {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  }
};

const getStoredUser = () => {
  const raw = localStorage.getItem(AUTH_USER_KEY);
  try {
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const setStoredUser = (user) => {
  if (user) {
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(AUTH_USER_KEY);
  }
};

const apiRequest = async (path, options = {}) => {
  const url = `${API_BASE_URL}${path}`;
  const token = getAuthToken();
  const headers = {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  if (!(options.body instanceof FormData) && options.body !== undefined && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  const response = await fetch(url, { ...options, headers });
  const text = await response.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!response.ok) {
    const error = new Error(data?.detail || response.statusText || 'API error');
    error.status = response.status;
    error.response = data;
    throw error;
  }

  return data;
};

window.api = {
  setAuthToken,
  getAuthToken,
  clearAuthToken: () => {
    setAuthToken(null);
    setStoredUser(null);
  },
  getCurrentUser: () => getStoredUser(),
  register: async (payload) => {
    const body = {
      role: 'citizen',
      ...payload,
    };
    const data = await apiRequest('/api/auth/register', { method: 'POST', body: JSON.stringify(body) });
    const token = data?.token || data?.access_token || data?.accessToken;
    if (token) setAuthToken(token);
    const user = {
      username: payload.username || payload.email,
      name: payload.username || null,
      email: payload.email,
      role: body.role,
      user_id: data?.user_id,
    };
    setStoredUser(user);
    return data;
  },
  login: async (payload) => {
    const data = await apiRequest('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
    });

    const token = data?.access_token || data?.token || data?.accessToken;
    if (token) setAuthToken(token);
    const user = {
      username: data?.username || payload.email,
      name: data?.name || data?.username || payload.email,
      email: data?.email || payload.email,
      role: data?.role || 'citizen',
    };
    setStoredUser(user);
    return data;
  },
  me: async () => {
    try {
      const data = await apiRequest('/api/auth/me');
      setStoredUser(data);
      return data;
    } catch (error) {
      if (error.status === 404) {
        return getStoredUser();
      }
      throw error;
    }
  },
  getIncidents: async () => apiRequest('/api/incidents/'),
  createIncident: async (payload) => {
    if (payload instanceof FormData) {
      return apiRequest('/api/incidents/', { method: 'POST', body: payload });
    }
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value);
      }
    });
    return apiRequest('/api/incidents/', { method: 'POST', body: formData });
  },
  addWastePoint: async (payload) => apiRequest('/api/waste/points', { method: 'POST', body: JSON.stringify(payload) }),
  getNearbyWastePoints: async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiRequest(`/api/waste/points/nearby${query ? `?${query}` : ''}`);
  },
  planWasteRoute: async (payload) => apiRequest('/api/waste/routes', { method: 'POST', body: JSON.stringify(payload) }),
  listEducationCourses: async () => apiRequest('/api/education/courses'),
  addEducationCourse: async (payload) => apiRequest('/api/education/courses', { method: 'POST', body: JSON.stringify(payload) }),
  startQuiz: async () => apiRequest('/api/education/quiz'),
  submitQuiz: async (payload) => apiRequest('/api/education/quiz/submit', { method: 'POST', body: JSON.stringify(payload) }),
  listProjects: async () => apiRequest('/api/collaboration/projects'),
  addProject: async (payload) => apiRequest('/api/collaboration/projects', { method: 'POST', body: JSON.stringify(payload) }),
};
