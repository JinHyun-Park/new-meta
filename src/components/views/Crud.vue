<template>
  <div id="app">
    <v-app id="inspire">
      <div id="app">
        <v-app id="inspire">
          <div>
            <v-toolbar
              flat
              color="white"
            >
              <v-toolbar-title>IF TEST</v-toolbar-title>
              <v-divider
                class="mx-2"
                inset
                vertical
              />
              <v-spacer />
              <v-dialog
                v-model="dialog"
                max-width="500px"
                persistent
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    @click="toggleOn"
                  >
                    <!-- v-on="on" -->
                    New Item
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex
                          xs12
                          sm6
                          md4
                        >
                          <v-text-field
                            v-model="editedItem.name"
                            label="Dessert name"
                          />
                        </v-flex>
                        <v-flex
                          xs12
                          sm6
                          md4
                        >
                          <v-text-field
                            v-model="editedItem.calories"
                            label="Calories"
                          />
                        </v-flex>
                        <v-flex
                          xs12
                          sm6
                          md4
                        >
                          <v-text-field
                            v-model="editedItem.fat"
                            label="Fat (g)"
                          />
                        </v-flex>
                        <v-flex
                          xs12
                          sm6
                          md4
                        >
                          <v-text-field
                            v-model="editedItem.carbs"
                            label="Carbs (g)"
                          />
                        </v-flex>
                        <v-flex
                          xs12
                          sm6
                          md4
                        >
                          <v-text-field
                            v-model="editedItem.protein"
                            label="Protein (gg)"
                          />
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      color="blue darken-1"
                      flat
                      @click="close"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      flat
                      @click="save"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
            <v-data-table
              :headers="headers"
              :items="desserts"
              class="elevation-1"
            >
              <template v-slot:items="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">
                  {{ props.item.calories }}
                </td>
                <td class="text-xs-right">
                  {{ props.item.fat }}
                </td>
                <td class="text-xs-right">
                  {{ props.item.carbs }}
                </td>
                <td class="text-xs-right">
                  {{ props.item.protein }}
                </td>
                <td class="justify-center layout px-0">
                  <v-icon
                    small
                    class="mr-2"
                    @click="editItem(props.item)"
                  >
                    edit
                  </v-icon>
                  <v-icon
                    small
                    @click="deleteItem(props.item)"
                  >
                    delete
                  </v-icon>
                </td>
              </template>
              <template v-slot:no-data>
                <v-btn
                  color="primary"
                  @click="initialize"
                >
                  Reset
                </v-btn>
              </template>
            </v-data-table>
          </div>
        </v-app>
      </div>
    </v-app>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      // dialog: false,
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Actions', value: 'name', sortable: false },
      ],
      // desserts: [],
      // editedIndex: -1,
      editedItem: {
        name: '.',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '.',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    };
  },
  computed: {
    ...mapState('crud', ['editedIndex', 'dialog', 'desserts']),
    formTitle() {
      return this.editedIndex === -1 ? '신규' : '수정';
    },
  },
  /* eslint-disable */
  watch: {
    dialog(val) {
      this.changeDialog({dialog: val}) || this.close();
    },
  },

  created() {
    this.initializeList();
  },

  methods: {
    ...mapActions('crud', 
      [
        'initializeList', 'editIndexfunc', 'changeDialog',
        'deleteList', 'saveData',
      ]),

    editItem(item) {

      // this.editedIndex = this.desserts.indexOf(item);
      this.editIndexfunc({editIndex: this.desserts.indexOf(item)});
      // this.$store.dispatch('crud/editIndexfunc', {editIndex: this.desserts.indexOf(item)});
      this.editedItem = Object.assign({}, item);
      this.changeDialog({dialog: true});
      // this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm('Are you sure you want to delete this item?') 
        // && this.desserts.splice(index, 1);
        && this.deleteList({index: index});
    },
    toggleOn() {
      this.changeDialog({dialog: true});
    },

    close() {
      // this.dialog = false;
      this.changeDialog({dialog: false});
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editIndexfunc({editIndex: -1});
        // this.editedIndex = -1;
      }, 300);
    },

    save() {
      // if (this.editedIndex > -1) {
      //   Object.assign(this.desserts[this.editedIndex], this.editedItem);
      // } else {
      //   this.desserts.push(this.editedItem);
      // }
      this.saveData({editedItem: this.editedItem});
      this.close();
    },
  },
};
</script>
