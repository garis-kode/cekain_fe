export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!process.client) return;

  const config = useRuntimeConfig();
  const apiURL = config.public.apiURL;

  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    const router = useRouter();
    router.push('/auth/sign-in');
  }

  try {
    const response = await $fetch(`${apiURL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.success && response.statusCode === 200) {
      const user = response.data;
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      throw new Error('Failed to fetch user data');
    }
  } catch (error) {
    console.error('Error fetching user data:', error);

    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');

    const router = useRouter();
    router.push('/auth/sign-in');  }
});
