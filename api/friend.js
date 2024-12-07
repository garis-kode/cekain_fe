export const useFriendAPI = () => {
  const config = useRuntimeConfig();
  const apiURL = config.public.apiURL;

  const getAuthHeaders = () => {
    const token = localStorage.getItem('accessToken');
    return { Authorization: `Bearer ${token}` };
  };

  return {
    fetchFriendsAPI: async (query = '', page = 1, self = false) => {
      const url = query
        ? `${apiURL}/friend?search=${query}&page=${page}&include_self=${self}`
        : `${apiURL}/friend?page=${page}&include_self=${self}`;
      return await $fetch(url, { headers: getAuthHeaders() });
    },
    fetchFriendDetailsAPI: async (id) => {
      const url = `${apiURL}/friend/${id}`;
      return await $fetch(url, { headers: getAuthHeaders() });
    },
    saveFriendAPI: async (data, isEdit = false) => {
      const url = isEdit
        ? `${apiURL}/friend/${data.id}`
        : `${apiURL}/friend`;
      const method = isEdit ? 'PUT' : 'POST';
      return await $fetch(url, {
        method,
        headers: getAuthHeaders(),
        body: {
          name: data.name,
          email: data.email,
          phoneNumber: data.phoneNumber,
        },
      });
    },
    deleteFriendAPI: async (id) => {
      const url = `${apiURL}/friend/${id}`;
      return await $fetch(url, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
    },
  };
};
