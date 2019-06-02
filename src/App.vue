<template>
  <v-app>
    <v-toolbar
      app
      dense
    >
      <v-toolbar-title class="headline text-uppercase">
        <span>META PORTAL</span>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          @click="moveToHome()"
        >
          Home
          <!-- <router-link to="/">
            Home
          </router-link> -->
        </v-btn>
        <v-btn
          flat
          @click="moveToAbout()"
        >
          About
          <!-- <router-link to="/about">
            About
          </router-link> -->
        </v-btn>
        <v-btn
          flat
          @click="moveToRegist()"
        >
          I/F Regist
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      //
    };
  },
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
  },
};
</script>
