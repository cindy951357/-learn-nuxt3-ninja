<template>
    <div class="dashboard-container">
        <header>
            <Header/>
            <div class="hamburger"><el-icon @click="openModal"><more /></el-icon></div>
        </header>
        <aside class="side" width="200px"><Sidebar/></aside>
        <div class="maincontent">
            <div class="border-rounded">
                <slot></slot>
            </div>
        </div>
        <div class="footer">Footer</div>
    </div>
    <div class="modal-overlay" v-show="modalStore.isOpen">
        <div class="modal">
            <el-icon class="icon-close" @click="modalStore.close()"><close /></el-icon>
            <Sidebar/>
        </div>
        
    </div>
</template>

<script lang="ts" setup>
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
import { More, Close } from '@element-plus/icons-vue';
import { useModalStore } from '@/stores/modal'

const modalStore = useModalStore();

const openModal = () => {
    modalStore.openModal();
}
</script>

<style lang="scss">
html, body, .dashboard-container {
    height: 100vh;
    min-width: 300px;
}

header {
  grid-area: header;
  display: flex;
  height: 52px;
  justify-content: space-between;
}


.hamburger {
    display: flex;
    padding: 10px;
    color: white;
}

.maincontent {
  grid-area: maincontent;
  overflow-y: scroll;
}

.footer {
    grid-area: footer;
    padding: 10px;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer, header, .maincontent {
    background-color: #5c5c5c;
}


@media (max-width: 470px) {
    .side {
        display: none;
    }

    .dashboard-container {
        display: grid;
        grid-template-rows: 52px 8fr 52px;
        grid-template-areas:
            "header"
            "maincontent"    
            "footer";   
    }
}


.border-rounded {
    border-radius: 10px;
    background: white;
    height: 100%;
    padding: 10px;
    overflow-y: scroll;
}

@media (min-width: 470px) {
    .hamburger {
        display: none;
    }
    .side {
         display: unset;
         grid-area: sidebar;
            &, .el-menu {
                background-color: #433d57;
            }
    }
  .dashboard-container { 
    display: grid;
    grid-template-columns: 200px 5fr;
    grid-template-rows: 52px 8fr 52px;
    grid-template-areas:
      "sidebar  header"
      "sidebar maincontent"
      "sidebar maincontent"
      "sidebar maincontent"
      "sidebar maincontent"
      "sidebar maincontent"
      "sidebar  footer";
  }
}

.el-icon {
    width: 20px;
    height: 20px;
}

.icon-close {
    position: absolute;
    width: 40px;
    height: 40px;
    right: 10px;
    top: 10px;
    color: white;
}

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #00000085;

  & .modal {
    overflow-y: scroll;
  }
}

</style>