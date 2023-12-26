import { defineStore } from 'pinia';

export const useModalStore = defineStore('Modal', {
    state: () => ({ open: false }),
    getters: {
      isOpen: (state) => state.open,
    },
    actions: {
      openModal() {
        this.open = true;
      },
      close(){
         this.open = false;
      }
    },
})