<template>
  <div>Hello</div>
</template>

<script>
import io from 'socket.io-client';

export default {
  created() {
    const socket = io('http://localhost:3000');
  }
};
</script>
