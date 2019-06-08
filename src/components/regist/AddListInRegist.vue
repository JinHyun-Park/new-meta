<template>
  <div>
    <v-card>
      <v-card-text>
        <v-expansion-panel
          v-model="panel"
          expand
        >
          <v-expansion-panel-content
            v-for="(item, i) in 4"
            :key="i"
          >
            <template v-slot:header>
              <div>Item</div>
            </template>
            <v-card>
              <v-card-text class="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      panel: [false, false, false],
    };
  },
};
</script>
