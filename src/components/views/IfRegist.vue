<template>
  <v-app>
    <v-container grid-list-md>
      <v-layout>
        <v-flex>
          <div>
            신청목록
          </div>
        </v-flex>
      </v-layout>
      <!-- <v-divider /> -->

      <ButtonToggle />    <!-- EIGW, EAI, MCG 버튼그룹 -->
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
                <RegistList />
                <!-- <AddListInRegist /> -->
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
  </v-app>
</template>

<script>
// import AddListInRegist from '@/components/regist/AddListInRegist.vue';
import RightSideCard from '@/components/regist/RightSideCard.vue';
import RegistList from '@/components/regist/RegistList.vue';
import ButtonToggle from '@/components/regist/ButtonToggle.vue';

export default {
  components: {
    RightSideCard, RegistList, ButtonToggle, // AddListInRegist,
  },
};
</script>

<style>

</style>
