<template>
  <v-app>
    <Toolbar />
    <v-content xs10>
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Toolbar from '@/components/views/Toolbar.vue';
import Footer from '@/components/views/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer, Toolbar,
  },
  data() {
    return {
      //
    };
  },
};
</script>
