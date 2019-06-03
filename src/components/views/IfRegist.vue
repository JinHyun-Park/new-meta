<template>
  <v-container grid-list-md>
    <v-layout>
      <v-flex>
        <div>
          신청목록
        </div>
      </v-flex>
    </v-layout>

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

    <v-layout>
      <v-flex>
        <v-sheet>
          나는 박진현이다.
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
