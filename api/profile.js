export const useProfileAPI = () => {
  const config = useRuntimeConfig();
  const apiURL = config.public.apiURL;

  const getAuthHeaders = () => {
    const token = localStorage.getItem('accessToken');
    return { Authorization: `Bearer ${token}` };
  };

  return {
    updateProfileAPI: async (formData) => {
      return await $fetch(`${apiURL}/profile`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: formData,
      });
    },
  };
};
