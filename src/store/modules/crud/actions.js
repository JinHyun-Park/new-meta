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

  close() {
    this.dialog = false;
    setTimeout(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    }, 300);
  },

  save() {
    if (this.editedIndex > -1) {
      Object.assign(this.desserts[this.editedIndex], this.editedItem);
    } else {
      this.desserts.push(this.editedItem);
    }
    this.close();
  },
};
