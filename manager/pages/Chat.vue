<template>
  <div>Hello</div>
</template>

<script>
import io from 'socket.io-client';

export default {
  created() {
    const socket = io(process.env.VUE_APP_API_BASE_URL);
  }
};
</script>
