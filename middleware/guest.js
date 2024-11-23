export default defineNuxtRouteMiddleware(() => {
  if (!process.client) return;

  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    const router = useRouter();
    router.replace('/');
  }
});
