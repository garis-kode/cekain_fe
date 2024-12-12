<template>
  <div
    class="flex items-center justify-center font-semibold text-blue-700"
    :class="customClass"
    :style="{ backgroundColor: backgroundColor, width: size, height: size, borderRadius: radius }"
  >
    {{ initials }}
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  friendName: {
    type: String,
    required: true,
  },
  customClass: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '5rem',
  },
  radius: {
    type: String,
    default: '50%',
  },
});

const initials = computed(() => {
  const names = props.friendName.split(" ");
  return (names[0][0] + (names[1] ? names[1][0] : '')).toUpperCase();
});

const backgroundColor = computed(() => '#e4eff9');
</script>

