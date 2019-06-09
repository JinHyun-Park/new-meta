<template>
  <v-btn-toggle v-model="toggle.text">
    <v-btn
      id="btn1"
      flat
      value="left"
      @click="setToggle({toggle})"
    >
      EIGW
    </v-btn>
    <v-btn
      flat
      value="center"
      @click="setToggle({toggle})"
    >
      EAI
    </v-btn>
    <v-btn
      flat
      value="right"
      @click="setToggle({toggle})"
    >
      MCG
    </v-btn>
  </v-btn-toggle>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState('regModule', ['toggle']),
  },
  methods: {
    ...mapMutations('regModule', { setToggle: 'setToggle' }),
  },
};
</script>
