export default defineNuxtRouteMiddleware(async (to, from) => {
  // Pastikan kode hanya berjalan di sisi klien
  if (!process.client) return;

  const config = useRuntimeConfig();
  const apiURL = config.public.apiURL;

  // Ambil token dari localStorage
  const accessToken = localStorage.getItem('accessToken');

  // Jika tidak ada token, redirect ke halaman login
  if (!accessToken) {
    return navigateTo('/auth');
  }

  try {
    // Fetch data user dari API
    const response = await $fetch(`${apiURL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Jika respons berhasil, simpan data user ke localStorage
    if (response.success && response.statusCode === 200) {
      const user = response.data;
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      throw new Error('Failed to fetch user data');
    }
  } catch (error) {
    console.error('Error fetching user data:', error);

    // Hapus token dan data user jika gagal fetch
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');

    // Redirect ke halaman login
    return navigateTo('/auth');
  }
});
