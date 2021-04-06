import api from './api';

export const DashboardService = {
  resumeFrom: async (country) => {
    const response = await api.get(country);
    // const { data } = response.data;
    return response.data;
  },
};
