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

      <v-btn
        flat
        class="text-xs-center"
      >
        <v-menu
          open-on-hover
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-btn
              flat
              v-on="on"
            >
              IF신청
            </v-btn>
          </template>

          <v-list>
            <v-list-tile
              v-for="(item, index) in items"
              :key="index"
              @click="al(item.path)"
            >
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
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
  data() {
    return {
      items: [
        { title: 'HOME', path: 'home' },
        { title: 'CRUD Table', path: 'crud' },
        { title: 'ifReg', path: 'ifReg' },
        { title: 'ifReg', path: 'ifReg' },
      ],
    };
  },
  methods: {
    al(path) {
      this.$router.push({ name: path });
    },
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
