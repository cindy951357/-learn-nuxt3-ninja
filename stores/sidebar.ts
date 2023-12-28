import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('Sidebar', {
    state: () => ({ 
        isExpanded: true,
     }),
    getters: {
    
    },
    actions: {
      expandSidebar() {
        document.getElementById("my_sidebar").style.width = "200px";
        document.getElementsByClassName('el-menu--vertical')[0].style.width = "200px";
        document.getElementsByClassName('toggle-sidebar-btn')[0].style.left = "185px";
        this.isExpanded = true;
      },
      collapseSidebar(){
        document.getElementById("my_sidebar").style.width = "63.2px";
        document.getElementsByClassName('el-menu--vertical')[0].style.width = "63.2px";
        // 63.2 - 15 = 48.2
        document.getElementsByClassName('toggle-sidebar-btn')[0].style.left = "48.2px";
        this.isExpanded = false;
      }
    },
})