<template>
  <v-navigation-drawer
    v-model="drawer"
    width="320"
    :hide-overlay="true"
    fixed
    app
    mobile-break-point="600"
    stateless
    manual-scroll
    right
  >
    <v-app-bar
      class="primary"
      dark
      flat
    >
      <router-link to="/" />
    </v-app-bar>

    <v-list subheader>
      <v-subheader>{{ d.chats || 'Chats' }}</v-subheader>
      <v-list-item
        v-for="(user, i) in users"
        :key="i"
      >
        <v-list-item-avatar>
          <v-img :src="`static/${user.image}`" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="`${user.lastname} ${user.firstname}`" />
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon
            :color="user.active ? 'primary' : 'grey'"
          >
            chat_bubble
          </v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",

  components: {
  },

  data() {
    return {
      drawer: true,
      active: null
    };
  },

  computed: {
    users() {
      return this.$store.getters["user/getAll"];
    },
    count() {
      return this.$store.getters["user/getCount"];
    }
  },
  
  async created() {
    const data = {
      query: {
        filter: {
          offset: this.$route.query.offset || 0,
          limit: this.$route.query.limit || this.limit,
          include: ["role"],
          order: [["createdAt", "DESC"]]
        }
      }
    };
    await this.$store.dispatch("user/findAll", data);
    await this.$store.dispatch("user/count", {});
  }
};
</script>
