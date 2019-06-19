import Constant from '@/constant/regConstant';

export default {
  [Constant.CHANGE_CONTENTS]: (store, payload) => {
    store.commit(Constant.CHANGE_CONTENTS, payload);
  },
  [Constant.INITIATE_DTLFORM]: (store) => {
    store.commit(Constant.INITIATE_DTLFORM);
  },
  ifFormAddAction: (store, payload) => {
    store.commit('ifFormAddAction', payload);
  },
  initiateRegList: (store) => {
    store.commit('initiateRegList');
  },
  deleteItem: (store, payload) => {
    store.commit('deleteItem', payload);
  },
  initiateForm: (store) => {
    store.commit('initiateForm');
  },
};
