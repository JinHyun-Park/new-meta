<template>
  <v-toolbar
    app
    dense
  >
    <v-toolbar-title
      class="headline text-uppercase"
      @click="gotoHome()"
    >
      <span id="l_title">META PORTAL</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        flat
        @click="moveToHome()"
      >
        Home
      </v-btn>
      <v-btn
        flat
        @click="moveToAbout()"
      >
        About
      </v-btn>
      <v-btn
        flat
        @click="moveToRegist()"
      >
        I/F Regist
      </v-btn>
    </v-toolbar-items>
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        flat
        @click="moveToRegist()"
      >
        Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    moveToHome() {
      this.$router.push({ name: 'home' });
    },
    moveToAbout() {
      this.$router.push({ name: 'about' });
    },
    moveToRegist() {
      this.$router.push({ name: 'ifReg' });
    },
    gotoHome() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style scoped>
 #l_title {cursor: pointer;}
</style>
