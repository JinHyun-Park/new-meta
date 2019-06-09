<template>
  <v-form v-model="valid">
    <v-expansion-panel
      v-model="panel"
      expand
    >
      <v-expansion-panel-content>
        <template v-slot:header>
          <v-layout>
            <v-flex>
              <div>신청폼</div>
            </v-flex>
          </v-layout>
        </template>
        <v-container>
          <v-layout>
            <v-flex class="text-xs-right">
              <v-btn
                :disabled="!valid"
                small
                round
                color="blue lighten-2 white--text"
              >
                인터페이스 추가
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex
              xs12
              md3
            >
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="인터페이스명(한글)"
                required
              />
            </v-flex>

            <v-flex
              xs6
              md3
            >
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="인터페이스명(영문)"
                required
              />
            </v-flex>

            <v-flex
              xs6
              md2
            >
              <v-select
                :items="mf"
                label="MQ/FILE"
              />
            </v-flex>

            <v-flex
              xs6
              md2
            >
              <v-select
                :items="direction"
                label="방향"
              />
            </v-flex>

            <v-flex
              xs6
              md2
            >
              <v-select
                :items="async"
                label="동기/비동기"
              />
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex
              xs6
              md3
            >
              <v-combobox
                v-model="select"
                :items="msgPrc"
                label="수신 전문 처리"
                multiple
                chips
              />
            </v-flex>

            <v-flex
              xs6
              md3
            >
              <v-text-field

                :rules="nameRules"
                label="수신프로그램"
                required
              />
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex
              xs6
              md2
            >
              <v-select
                :items="ftt"
                label="파일 전송 유형"
              />
            </v-flex>
            <v-flex
              xs12
              md5
            >
              <v-text-field
                v-model="firstname"
                label="송신 디렉토리"
              />
            </v-flex>
            <v-flex
              xs12
              md5
            >
              <v-text-field
                v-model="firstname"
                label="수신 디렉토리"
              />
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex
              xs12
              md12
            >
              <v-text-field
                v-model="firstname"
                label="장애 시 영향도(상세)"
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-expansion-panel-content>
    </v-expansion-panel>
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
        // v => v.length <= 10 || 'Name must be less than 10 characters',
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
      panel: [true],
      select: '',
    };
  },
  computed: {
  },
};

</script>
