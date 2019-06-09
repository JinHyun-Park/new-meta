<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout>
        <v-flex
          md2
          class="text-xs-left"
        >
          <v-select
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
      <v-layout>
        <v-flex
          xs3
          md1
        >
          <v-chip
            color="red"
            text-color="white"
          >
            송신
          </v-chip>
        </v-flex>

        <v-flex
          xs6
          md1
        >
          <v-select
            :items="direction"
            label="회사"
          />
        </v-flex>

        <v-flex
          xs6
          md2
        >
          <v-text-field
            v-model="lastname"
            label="시스템명(한글)"
          />
        </v-flex>

        <v-flex
          xs6
          md2
        >
          <v-text-field
            v-model="lastname"
            label="시스템명(영문약자)"
          />
        </v-flex>

        <v-flex
          xs6
          md6
        >
          <v-btn
            outline
          >
            <span>
              {{ mid }}
            </span>
            <v-icon right>
              mdi-magnify
            </v-icon>
          </v-btn>

          <v-btn
            outline
          >
            <span>
              {{ opdirector }}
            </span>
            <v-icon right>
              mdi-magnify
            </v-icon>
          </v-btn>

          <v-btn
            outline
          >
            <span>
              {{ manager }}
            </span>
            <v-icon right>
              mdi-magnify
            </v-icon>
          </v-btn>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex md1>
          <v-btn
            depressed
            fab
            small
          >
            <v-icon>mdi-cached</v-icon>
          </v-btn>
        </v-flex>

        <v-flex
          xs6
          md1
        >
          <v-text-field
            v-model="lastname"
            label="호스트명"
          />
        </v-flex>

        <v-flex
          xs6
          md1
        >
          <v-text-field
            v-model="lastname"
            label="IP(VIP)"
          />
        </v-flex>

        <v-flex
          xs6
          md1
        >
          <v-text-field
            v-model="lastname"
            label="IP(NAT)"
          />
        </v-flex>

        <v-flex
          xs6
          md1
        >
          <v-select
            :items="direction"
            label="OS"
          />
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex
          xs3
          md1
        >
          <v-chip
            color="blue"
            text-color="white"
          >
            수신
          </v-chip>
        </v-flex>

        <v-flex
          xs6
          md1
        >
          <v-select
            :items="direction"
            label="회사"
          />
        </v-flex>

        <v-flex
          xs6
          md2
        >
          <v-text-field
            v-model="lastname"
            label="시스템명(한글)"
          />
        </v-flex>

        <v-flex
          xs6
          md2
        >
          <v-text-field
            v-model="lastname"
            label="시스템명(영문약자)"
          />
        </v-flex>

        <v-flex
          xs6
          md6
        >
          <v-btn
            outline
          >
            <span>
              {{ mid }}
            </span>
            <v-icon right>
              mdi-magnify
            </v-icon>
          </v-btn>

          <v-btn
            outline
          >
            <span>
              {{ opdirector }}
            </span>
            <v-icon right>
              mdi-magnify
            </v-icon>
          </v-btn>

          <v-btn
            outline
          >
            <span>
              {{ manager }}
            </span>
            <v-icon right>
              mdi-magnify
            </v-icon>
          </v-btn>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex md1 />

        <v-flex
          xs6
          md1
        >
          <v-text-field
            v-model="lastname"
            label="호스트명"
          />
        </v-flex>

        <v-flex
          xs6
          md1
        >
          <v-text-field
            v-model="lastname"
            label="IP(VIP)"
          />
        </v-flex>

        <v-flex
          xs6
          md1
        >
          <v-text-field
            v-model="lastname"
            label="IP(NAT)"
          />
        </v-flex>

        <v-flex
          xs6
          md1
        >
          <v-select
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
};

</script>
