<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xl10
        lg12
        md12
        xs12
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
            md12
            lg6
          >
            <v-layout
              wrap
            >
              <v-flex d-flex>
                <v-card>
                  <v-card-text><RegistList /></v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex
            d-flex
            md12
            lg6
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
            <v-layout
              wrap
              row
            >
              <v-flex
                lg12
                d-flex
              >
                <IfAddForm />
              </v-flex>
            </v-layout>

            <!-- <v-card
              color="white"
            >
              <v-card-text
                class="black--text"
              >
                111
                <RightSideCard />
              </v-card-text>
            </v-card> -->
          </v-flex>
        </v-layout>
        <v-layout wrap>
          <v-flex
            v-if="addDtlForm.show"
            lg12
            d-flex
          >
            <v-card>
              <v-card-text><IfAddDtlForm /></v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

        <v-divider />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import AddListInRegist from '@/components/regist/AddListInRegist.vue';
// import RightSideCard from '@/components/regist/RightSideCard.vue';
import RegistList from '@/components/regist/RegistList.vue';
import ButtonToggle from '@/components/regist/ButtonToggle.vue';
import IfAddForm from '@/components/regist/IfAddForm.vue';
import IfAddDtlForm from '@/components/regist/IfAddDtlForm.vue';
import { mapState } from 'vuex';

export default {
  components: {
    // RightSideCard,
    RegistList,
    ButtonToggle,
    IfAddForm,
    IfAddDtlForm,
  },
  computed: {
    ...mapState('regModule', ['addDtlForm']),
  },
};
</script>

<style>

</style>
