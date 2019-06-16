import axios from 'axios';

export default {
  initializeList: (store, payload) => {
    store.commit('initializeList', payload);
  },
  editItem: (store, payload) => {
    store.commit('editItem', payload);
  },

  //   deleteItem(item) {
  // const index = this.desserts.indexOf(item);
  // confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1);
  //   },

  editIndexfunc: (store, payload) => {
    store.commit('editIndexfunc', payload);
  },
  changeDialog: (store, payload) => {
    store.commit('changeDialog', payload);
  },
  deleteList: (store, payload) => {
    store.commit('deleteList', payload);
  },
  saveData: (store, payload) => {
    store.commit('saveData', payload);
  },

  // 테스트 소스용
  getIfDataList: (store, payload) => {
    axios.get('/getIfDataList', {
      params: { ifId: payload.ifId },
    })
      .then((response) => {
        store.commit('getIfDataList', { resultData: response.data.resultData });
      })
      .catch();
  },
};
