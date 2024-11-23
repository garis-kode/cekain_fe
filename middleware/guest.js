export default defineNuxtRouteMiddleware(() => {
  if (!process.client) return;

  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    window.location.href = '/';
  }
});
