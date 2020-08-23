<template>
  <v-app light>
    <transition name="fade">
      <notification
        v-if="notification.isActive"
        :type="notification.type"
        :message="notification.message"
      />
    </transition>

    <toolbar
      :profile-id="String(profile.id)"
      :firstname="profile.firstname"
      :lastname="profile.lastname"
      :image="profile.image"
      @openLoginDialog="isLoginDialog = true"
    />

    <sidebar-left v-if="isAuth" />

    <v-content>
      <v-container>
        <slot />
      </v-container>
    </v-content>

    <sidebar-right v-if="isAuth" />

    <bottom-bar />

    <v-dialog
      v-model="isLoginDialog"
      max-width="500px"
      min-width="320px"
    >
      <login @closeLoginDialog="isLoginDialog = false" />
    </v-dialog>

    <v-overlay
      :opacity="0.5"
      :value="preloader"
      :z-index="9998"
    />
  </v-app>
</template>

<script>
import SidebarLeft from '../components/SidebarLeft';
import SidebarRight from '../components/SidebarRight';

export default {
  name: 'DefaultLayout',

  components: {
    SidebarLeft,
    SidebarRight
  },

  data: () => ({
    isLoginDialog: false,
    content: ''
  }),

  computed: {
    profile() {
      return this.$store.getters['profile/get'];
    },
    notification() {
      return this.$store.getters['notification/get'];
    },
    preloader() {
      return this.$store.getters['preloader/get'];
    }
  },

  async beforeCreate() {

  }
};
</script>
