export const useAuthAPI = () => {
  const config = useRuntimeConfig();
  const apiURL = config.public.apiURL;

  return {
    loginAPI: async (email, password) => {
      return await $fetch(`${apiURL}/auth/login`, {
        method: 'POST',
        body: { email, password },
      });
    },
    registerAPI: async (name, email, password, passwordConfirm) => {
      return await $fetch(`${apiURL}/auth/register`, {
        method: 'POST',
        body: {
          fullName: name,
          email,
          password,
          passwordConfirmation: passwordConfirm,
        },
      });
    },
    googleAuthAPI: async (googleToken) => {
      return await $fetch(`${apiURL}/auth/google/token`, {
        method: 'POST',
        body:{
          access_token: googleToken,
        }
      });
    },
  };
};
