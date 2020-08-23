<template>
  <v-layout>
    <v-card
      flat
      min-width="100%"
      min-height="80vh"
    >
      <v-app-bar
        flat
        dark
        color="primary"
      >
        <v-toolbar-title>{{ d.chat || 'Chat' }}: </v-toolbar-title>
      </v-app-bar>

      <v-card-text class="chat-area">
        chat
      </v-card-text>

      <v-card-actions>
        <v-text-field
          hide-details
          :placeholder="`${d.message || 'Message'}`"
        />
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
import io from 'socket.io-client';

export default {
  data: () => ({
    socket: null,
  }),

  metaInfo() {
    return {
      title: `${this.d.chat || 'Chat'}`
    };
  },

  computed: {
    chat() {
      return this.$store.getters['chat/get'];
    }
  },

  created() {
    this.socket = io(process.env.VUE_APP_API_BASE_URL);
  },

  destroyed() {
    this.socket.close();
  }
};
</script>

<style lang="sass">
.chat-area
  height: 80%
</style>
