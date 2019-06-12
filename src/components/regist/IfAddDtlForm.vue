<template>
  <v-form v-model="valid">
    <v-container fluid>
      <v-layout wrap>
        <v-flex
          md2
          class="text-xs-left"
        >
          <v-select
            v-model="addDtlForm.prodDev"
            :items="opDev"
            label="운영/개발"
            small
            solo
          />
        </v-flex>
        <v-flex class="text-xs-right">
          <v-btn
            small
            round
            color="blue lighten-2 white--text"
          >
            추가
          </v-btn>
          <v-btn
            small
            round
            color="blue lighten-2 white--text"
          >
            삭제
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex
          xs2
          md2
          lg1
        >
          <v-chip
            color="red"
            text-color="white"
          >
            송신
          </v-chip>
        </v-flex>

        <v-flex
          xs2
          md2
          lg1
        >
          <v-select
            v-model="sendData.company"
            :items="direction"
            label="회사"
          />
        </v-flex>

        <v-flex
          xs4
          md4
          lg2
        >
          <v-text-field
            v-model="sendData.sysNmKor"
            label="시스템명(한글)"
          />
        </v-flex>

        <v-flex
          xs4
          md4
          lg2
        >
          <v-text-field
            v-model="sendData.sysNmEng"
            label="시스템명(영문약자)"
          />
        </v-flex>

        <v-flex
          xs12
          md12
          lg6
        >
          <v-btn
            outline
          >
            <span>
              {{ sendData.mid }}
            </span>
            <v-icon right>
              mdi-magnify
            </v-icon>
          </v-btn>

          <v-btn
            outline
          >
            <span>
              {{ sendData.operator }}
            </span>
            <v-icon right>
              mdi-magnify
            </v-icon>
          </v-btn>

          <v-btn
            outline
          >
            <span>
              {{ sendData.manager }}
            </span>
            <v-icon right>
              mdi-magnify
            </v-icon>
          </v-btn>
        </v-flex>
      </v-layout>

      <!-- 교체버튼 -->
      <v-layout wrap>
        <v-flex
          md1
          lg1
        >
          <v-btn
            depressed
            fab
            small
            @click="changeData({ recvData, sendData })"
          >
            <!-- @click="changeData()" -->
            <v-icon>mdi-cached</v-icon>
          </v-btn>
        </v-flex>

        <v-flex
          sm6
          md4
          lg2
        >
          <v-text-field
            v-model="sendData.hostNm"
            label="호스트명"
          />
        </v-flex>

        <v-flex
          sm6
          md4
          lg2
        >
          <v-text-field
            v-model="sendData.ipVip"
            label="IP(VIP)"
          />
        </v-flex>

        <v-flex
          sm6
          md4
          lg2
        >
          <v-text-field
            v-model="sendData.ipNat"
            label="IP(NAT)"
          />
        </v-flex>

        <v-flex
          sm6
          md4
          lg2
        >
          <v-select
            v-model="sendData.os"
            :items="direction"
            label="OS"
          />
        </v-flex>
      </v-layout>

      <v-layout wrap>
        <v-flex
          xs2
          md2
          lg1
        >
          <v-chip
            color="blue"
            text-color="white"
          >
            수신
          </v-chip>
        </v-flex>

        <v-flex
          xs2
          md2
          lg1
        >
          <v-select
            v-model="recvData.company"
            :items="direction"
            label="회사"
          />
        </v-flex>

        <v-flex
          xs4
          md4
          lg2
        >
          <v-text-field
            v-model="recvData.sysNmKor"
            label="시스템명(한글)"
          />
        </v-flex>

        <v-flex
          xs4
          md4
          lg2
        >
          <v-text-field
            v-model="recvData.sysNmEng"
            label="시스템명(영문약자)"
          />
        </v-flex>

        <v-flex
          xs12
          md12
          lg6
        >
          <v-btn
            outline
          >
            <span>
              {{ recvData.mid }}
            </span>
            <v-icon right>
              mdi-magnify
            </v-icon>
          </v-btn>

          <v-btn
            outline
          >
            <span>
              {{ recvData.operator }}
            </span>
            <v-icon right>
              mdi-magnify
            </v-icon>
          </v-btn>

          <v-btn
            outline
          >
            <span>
              {{ recvData.manager }}
            </span>
            <v-icon right>
              mdi-magnify
            </v-icon>
          </v-btn>
        </v-flex>
      </v-layout>

      <v-layout wrap>
        <v-flex md1 />

        <v-flex
          sm6
          md4
          lg2
        >
          <v-text-field
            v-model="recvData.hostNm"
            label="호스트명"
          />
        </v-flex>

        <v-flex
          sm6
          md4
          lg2
        >
          <v-text-field
            v-model="recvData.ipVip"
            label="IP(VIP)"
          />
        </v-flex>

        <v-flex
          sm6
          md4
          lg2
        >
          <v-text-field
            v-model="recvData.ipNat"
            label="IP(NAT)"
          />
        </v-flex>

        <v-flex
          sm6
          md4
          lg2
        >
          <v-select
            v-model="recvData.os"
            :items="direction"
            label="OS"
          />
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex class="text-xs-right">
          <v-btn
            small
            round
            color="red accent-3 white--text"
          >
            임시저장
          </v-btn>
          <v-btn
            small
            round
            color="red accent-3 white--text"
          >
            신청
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Constant from '@/constant/regConstant';

export default {
  data() {
    return {
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      mf: [
        'MQ', 'FILE',
      ],
      direction: [
        '단방향', '양방향',
      ],
      async: [
        '동기', '비동기',
      ],
      msgPrc: [
        '실시간', '배치',
      ],
      ftt: [
        'File_put', 'Get',
      ],
      opDev: [
        '운영', '개발',
      ],
      mid: 'MID',
      opdirector: '운영담당',
      manager: '담당매니저',
    };
  },
  computed: {
    ...mapState('regModule', ['sendData', 'recvData', 'addDtlForm']),
  },
  mounted() {
    this.initiateDtlForm();
  },
  methods: {
    ...mapActions('regModule',
      {
        changeData: Constant.CHANGE_CONTENTS,
        initiateDtlForm: Constant.INITIATE_DTLFORM,
      }),
    // changeData() {
    //   this.$store.dispatch(`regModule/${Constant.CHANGE_CONTENTS}`,
    //     { recvData: this.recvData, sendData: this.sendData });
    // },
    // ...mapActions('regModule', { }),
  },
};

</script>
