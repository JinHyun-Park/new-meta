<template>
  <v-app>
    <v-container
      grid-list-md
    >
      <v-layout>
        <v-flex>
          <div>
            신청목록
          </div>
        </v-flex>
      </v-layout>
      <!-- <v-divider /> -->

      <ButtonToggle />    <!-- EIGW, EAI, MCG 버튼그룹 -->
      <v-divider />
      <v-layout
        row
        wrap
      >
        <v-flex
          d-flex
          xs9
          sm9
          md9
        >
          <v-layout
            row
            wrap
          >
            <v-flex d-flex>
              <v-card>
                <v-card-text><RegistList /></v-card-text>
              </v-card>
            </v-flex>

            <v-flex
              lg12
              d-flex
            >
              <v-card>
                <v-card-text><IfAddForm /></v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex
          d-flex
          xs3
          md3
          class="text-xs-center"
        >
          <!-- <v-layout class="blue">
            <v-flex align-self-center>
              <v-card>
                <v-card-text>
                  3333333
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout> -->

          <v-card
            color="white"
          >
            <v-card-text
              class="white--text"
            >
              11
              <RightSideCard />
            </v-card-text>
          </v-card>
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
import IfAddForm from '@/components/regist/IfAddForm.vue';

export default {
  components: {
    RightSideCard,
    RegistList,
    ButtonToggle,
    IfAddForm,
  },
};
</script>

<style>

</style>
