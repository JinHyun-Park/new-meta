<template>
  <v-btn-toggle v-model="text">
    <v-btn
      id="btn1"
      text
      value="left"
    >
      EIGW
    </v-btn>
    <v-btn
      text
      value="center"
    >
      EAI
    </v-btn>
    <v-btn
      text
      value="right"
    >
      MCG
    </v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  data() {
    return {
      text: 'left',
    };
  },
  computed() {
  },
};
</script>
