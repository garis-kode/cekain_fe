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
  };
};
