<template>
  <div>
    <v-toolbar
      flat
      color="white"
    >
      <v-toolbar-title>신청 목록</v-toolbar-title>
      <v-spacer />
      <v-btn
        color="blue lighten-2"
        round
        small
        dark
        @click="expand = !expand"
      >
        {{ expand ? 'Close' : 'Keep' }}
      </v-btn>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="regList"
      :expand="expand"
      item-key="id"
      hide-actions
    >
      <template v-slot:items="props">
        <tr @click="props.expanded = !props.expanded">
          <td class="text-xs-center">
            {{ props.item.name }}
          </td>
          <td class="text-xs-center">
            {{ props.item.ifNmEng }}
          </td>
          <td class="text-xs-center">
            {{ props.item.ifNmKor }}
          </td>
          <td class="text-xs-center">
            {{ props.item.direction }}
          </td>
          <td class="text-xs-center">
            {{ props.item.async }}
          </td>
          <td class="text-xs-center">
            <v-btn
              :value="props.item.id"
              small
              @click.stop="alertSome(props.item.id)"
            >
              DEL
            </v-btn>
          </td>
        </tr>
      </template>
      <template v-slot:expand="props">
        <v-card
          flat
          color="grey"
        >
          <v-card-text>{{ props.item.regDtl }}</v-card-text>
        </v-card>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      expand: false,
      headers: [
        {
          text: '방식',
          align: 'center',
          sortable: false,
          value: 'id',
        },
        {
          text: '인터페이스명(영)', value: 'ifNmEng', align: 'center', sortable: false,
        },
        {
          text: '인터페이스명(한)', value: 'ifNmKor', align: 'center', sortable: false,
        },
        {
          text: '방향', value: 'direction', align: 'center', sortable: false,
        },
        {
          text: '비동기', value: 'async', align: 'center', sortable: false,
        },
        {
          text: '#', value: 'delete', align: 'center', sortable: false,
        },
      ],
    };
  },
  computed: {
    ...mapState('regModule', ['regList']),
  },
  created() {
    this.initiateRegList();
  },
  methods: {
    ...mapActions('regModule', ['initiateRegList']),
    alertSome(id) {
      console.log(id);
      // eslint-disable-next-line no-alert
      alert(id);
    },
  },
};
</script>
