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
    changePasswordAPI: async (formData) => {
      const url = `${apiURL}/profile/change-password/`;
      return await $fetch(url, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: formData,
      });
    },
  };
};
