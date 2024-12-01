<template>
  <div id="app" class="web-camera-container">
    <navigation :title="'Quick Scan'" />
    <ErrorToast v-if="error" :message="error" @close="error = null" />
    <SuccessToast v-if="success" :message="success" @close="success = null" />

    <!-- Loading Spinner -->
    <div v-show="isCameraOpen && isLoading" class="mt-20 camera-loading flex justify-center">
      <div role="status">
        <svg
          aria-hidden="true"
          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <!-- Camera Stream -->
    <div v-if="isCameraOpen" v-show="!isUploaded && !isLoading" :class="{ 'flash' : isShotPhoto }">
      <div class="camera-shutter" :class="{'flash' : isShotPhoto}"></div>
      <div class="relative">
        <video v-show="!isPhotoTaken" ref="camera" class="rounded-lg" autoplay></video>
        <Icon v-show="!isPhotoTaken" name="material-symbols:document-scanner-outline-rounded" size="120px" class="text-white absolute inset-0 m-auto"/>
      </div>
      <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" class="w-full rounded-lg" :width="450" :height="600"></canvas>
    </div>

    <div v-if="isUploaded" class="text-center">
      <div class="flex justify-center">
        <img src="/assets/img/loading.gif" class="h-40 text-center" alt="">
      </div>
      <span class="text-gray-600">
        Please wait...
      </span>
    </div>

    <!-- Buttons -->
    <div v-if="!isPhotoTaken && !isUploaded && !isLoading" class="camera-shoot text-center mt-5 flex justify-center items-center gap-x-6">
      <button
        type="button"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 text-center inline-flex items-center dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 relative"
      >
        <input
          type="file"
          accept="image/*"
          class="absolute inset-0 opacity-0 cursor-pointer"
          @change="uploadPhoto"
        />
        <Icon name="material-symbols:image-outline" size="24px" color="black" />
      </button>
      <button
        @click="takePhoto"
        type="button"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full p-1 text-center inline-flex items-center dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        <span class="p-7 bg-blue-900 rounded-full"></span>
      </button>
    </div>
  </div>
</template>
<script>
definePageMeta({
  middleware: 'auth',
});
import { useBillAPI } from '@/api/bill';
import { useHead } from '@vueuse/head';

useHead({
  title: 'Cekain - Quick Scan'
});

export default {
  data() {
    return {
      isUploaded: false,
      isCameraOpen: true,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: true,
      error: null,
      success: null,
      FLASH_TIMEOUT: 200,
      cameraStream: null,
    };
  },
  mounted() {
    this.createCameraElement();
  },
  methods: {
    createCameraElement() {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      const constraints = {
        audio: false,
        video: isMobile ? { facingMode: { exact: "environment" } } : true,
      };

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          this.isLoading = false;
          this.cameraStream = stream;
          this.$refs.camera.srcObject = stream;
        })
        .catch(() => {
          this.isLoading = true;
          this.error = "Browser doesn't support camera or there are other issues.";
        });
    },

    async takePhoto() {
      if (!this.$refs.camera) {
        this.error = 'Camera not properly initialized.';
        return;
      }

      this.isUploaded = true;

      const video = this.$refs.camera;
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(async (blob) => {
        if (blob) {
          try {
            const formData = new FormData();
            formData.append('image', blob, 'photo.jpg');

            const { uploadBillPhotoAPI } = useBillAPI();
            const response = await uploadBillPhotoAPI(formData);
            localStorage.setItem('billData', JSON.stringify(response.data));
            this.success = 'Photo uploaded successfully!';
            localStorage.removeItem('billData');
            const currentDate = `Bill ${new Date().toLocaleString()}`;
            const dataWithDate = {
              name: currentDate,
              ...response.data
            };
            localStorage.setItem('billData', JSON.stringify(dataWithDate));
            this.cameraStream.getTracks().forEach(track => track.stop());
            this.isCameraOpen = false;
            this.$router.push('/split/add');
          } catch (error) {
            this.error = error.data?.message || 'An error occurred.';
          } finally {
            this.isUploaded = false;
          }
        } else {
          this.error = 'Failed to capture photo.';
          this.isUploaded = false;
        }
      }, 'image/jpeg');
    },

    async uploadPhoto(event) {
      const file = event.target.files[0];

      if (!file) {
        this.error = 'No file selected.';
        return;
      }

      this.isUploaded = true;

      const formData = new FormData();
      formData.append('image', file);

      try {
        const { uploadBillPhotoAPI } = useBillAPI();
        const response = await uploadBillPhotoAPI(formData);
        this.success = 'Photo uploaded successfully!';
        localStorage.removeItem('billData');
        localStorage.setItem('billData', JSON.stringify(response.data));

        this.$router.push('/split/add');
      } catch (error) {
        this.error = error.data?.message || 'An error occurred.';
      } finally {
        this.isUploaded = false;
      }
    } 
  },
};
</script>
