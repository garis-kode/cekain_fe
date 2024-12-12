<template>
  <div
    class="flex items-center justify-center font-semibold"
    :class="customClass"
    :style="{ 
      backgroundColor: backgroundColor, 
      color: textColor, 
      width: size, 
      height: size, 
      borderRadius: radius 
    }"
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

function stringToModerateBrightColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const r = Math.floor(((hash >> 16) & 0xFF) * 0.5 + 150); 
  const g = Math.floor(((hash >> 8) & 0xFF) * 0.5 + 150);
  const b = Math.floor((hash & 0xFF) * 0.5 + 150);
  
  const moderateBrightColor = `#${Math.min(Math.max(r, 150), 200).toString(16).padStart(2, '0')}${Math.min(Math.max(g, 150), 200).toString(16).padStart(2, '0')}${Math.min(Math.max(b, 150), 200).toString(16).padStart(2, '0')}`;
  
  return moderateBrightColor;
}

function getTextColor(backgroundColor) {
  const r = parseInt(backgroundColor.slice(1, 3), 16);
  const g = parseInt(backgroundColor.slice(3, 5), 16);
  const b = parseInt(backgroundColor.slice(5, 7), 16);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 128 ? '#000000' : '#FFFFFF'; 
}

const initials = computed(() => {
  const names = props.friendName.split(" ");
  return (names[0][0] + (names[1] ? names[1][0] : '')).toUpperCase();
});

const backgroundColor = computed(() => stringToModerateBrightColor(props.friendName));

const textColor = computed(() => getTextColor("#fff"));
</script>
