export const useBillAPI = () => {
  const config = useRuntimeConfig();
  const apiURL = config.public.apiURL;

  const getAuthHeaders = () => {
    const token = localStorage.getItem('accessToken');
    return { Authorization: `Bearer ${token}` };
  };

  return {
    uploadBillPhotoAPI: async (formData) => {
      return await $fetch(`${apiURL}/bill/upload`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: formData,
      });
    },
    fetchBillsAPI: async (query = '', page = 1, limit = '') => {
      const url = query
        ? `${apiURL}/bill/history?search=${query}&page=${page}&limit=${limit}`
        : `${apiURL}/bill/history?page=${page}&limit=${limit}`;
      return await $fetch(url, { headers: getAuthHeaders() });
    },
    createBillsAPI: async (data) => {
      const url = `${apiURL}/bill/`;
      return await $fetch(url, { 
        method: 'POST',
        headers: getAuthHeaders(),
        body: data,
        
      });
    },
    fetchBillShowAPI: async (id) => {
      const url = `${apiURL}/bill/${id}`;
      return await $fetch(url, { headers: getAuthHeaders() });
    },
    fetchBillDetailsAPI: async (id) => {
      const url = `${apiURL}/bill/${id}/detail`;
      return await $fetch(url, { headers: getAuthHeaders() });
    },
    confirmBillsAPI: async (id) => {
      return await $fetch(`${apiURL}/bill/${id}/confirm`, {
        method: 'PUT',
        headers: getAuthHeaders(),
      });
    },
    markAsPaidAPI: async (billId, formData) => {
      return await $fetch(`${apiURL}/bill/${billId}/mark-paid`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: formData,
      });
    },
    shareBillAPI: async (id) => {
      const url = `${apiURL}/bill/shareable/${id}`;
      return await $fetch(url);
    },
  };
};
