<template>
  <v-container grid-list-md>
    <v-layout>
      <v-flex>
        <div>
          신청목록
        </div>
      </v-flex>
    </v-layout>
    <v-divider />

    <v-btn-toggle v-model="text">
      <v-btn
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
    <v-layout
      row
      wrap
    >
      <v-flex
        d-flex
        xs9
        md9
      >
        <v-layout
          column
        >
          <v-flex
            d-flex
            xs12
            sm6
            md6
          >
            <v-card>
              <AddListInRegist />
              <v-card-text>444</v-card-text>
              <v-card-text>444</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex
        d-flex
        xs3
        md3
        color="grey lighten-3"
        align-self-center
      >
        <RightSideCard />
      </v-flex>
    </v-layout>

    <v-divider />
    <v-layout>
      <v-flex>
        <v-sheet>
          메타 포탈
        </v-sheet>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AddListInRegist from '@/components/regist/AddListInRegist.vue';
import RightSideCard from '@/components/regist/RightSideCard.vue';

export default {
  components: {
    AddListInRegist, RightSideCard,
  },
};
</script>

<style>

</style>
