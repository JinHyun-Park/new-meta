<template>
  <v-btn-toggle v-model="text1">
    <v-btn
      id="btn1"
      flat
      value="left"
      @click="conlog2"
    >
      EIGW {{ conlog }}
    </v-btn>
    <v-btn
      flat
      value="center"
    >
      EAI
    </v-btn>
    <v-btn
      flat
      value="right"
    >
      MCG
    </v-btn>
  </v-btn-toggle>
</template>

<script>
import { mapState } from 'vuex';
// import { createNamespacedHelpers } from 'vuex';
// const { mapState } = createNamespacedHelpers('reg');

export default {
  data() {
    return {
      // text: 'left',
      // text1: '12',
      // text: 'left',
    };
  },
  computed: {
    // ...mapState('reg', ['text1', 'text2']),
    ...mapState(['text3', 'text4']),
    ...mapState('regModule', ['text1', 'text2', 'text7', 'text8']),
    ...mapState('reg2', ['text6']),
    // ...mapState({ text: 'text2', text3: 'text3' }),
    // ...mapState(['text1', 'reg/text2', 'text3']),
    conlog() {
      console.log(`reg: ${this.$store.state.reg2.text6}`);
      // console.log(`app : ${this.image}`);
      return this.text2;
    },
  },
  methods: {
    conlog2() {
      console.log(this.text2);
      // return this.reg;
    },
  },
};
</script>
