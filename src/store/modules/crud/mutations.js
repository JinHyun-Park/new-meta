export default {
  initializeList: (state) => {
    state.desserts = [{
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
    },
    {
      name: 'Eclair',
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
    },
    {
      name: 'Cupcake',
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
    },
    {
      name: 'Gingerbread',
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
    },
    {
      name: 'Jelly bean',
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
    },
    {
      name: 'Lollipop',
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0,
    },
    {
      name: 'Honeycomb',
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
    },
    {
      name: 'Donut',
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
    },
    {
      name: 'KitKat',
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7,
    },
    ];
  },
  editItem: (state, payload) => {
    state.editedIndex = payload.desserts.indexOf(payload.item);
    state.editedItem = Object.assign({}, payload.item);
    state.dialog = true;
  },
  editIndexfunc: (state, payload) => {
    state.editedIndex = payload.editIndex;
  },
  changeDialog: (state, payload) => {
    state.dialog = payload.dialog;
  },
  deleteList: (state, payload) => {
    state.desserts.splice(payload.index, 1);
  },
  saveData: (state, payload) => {
    if (state.editedIndex > -1) {
      Object.assign(state.desserts[state.editedIndex], payload.editedItem);
    } else {
      state.desserts.push(payload.editedItem);
    }
  },

  // 테스트 소스용
  getIfDataList: (state, payload) => {
    state.resultData = payload.resultData;
  },
};
