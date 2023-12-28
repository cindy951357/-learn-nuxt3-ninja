<template>
    <div class="dashboard-container">
        <header class=".htmlheader">
            <div class="full-width">
                <div id="icon_hamburger"><el-icon @click="openModal"><more /></el-icon></div> 
            </div>
            <div class="full-width">  
                <Header/>    
            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        </header>
        <aside class="side"><Sidebar/></aside>
        <div class="maincontent">
            <div class="border-rounded">
                <slot></slot>
            </div>
        </div>
        <div class="footer">Footer Footer Footer Footer</div>
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
import { useModalStore } from '@/stores/modal';


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
  background: linear-gradient(90deg, rgba(208,188,179,1) 0%, rgba(212,175,223,1) 50%, rgba(180,228,211,1) 100%);
}

.htmlheader {
    display: flex;
    justify-content: center;
    align-items: center;
}


.maincontent {
  grid-area: maincontent;
  overflow-y: scroll;
}

.footer {
    grid-area: footer;
    padding: 10px;
    color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer, .maincontent {
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
    .htmlheader {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .full-width {
        position: absolute;
        width: 100%;
        display: flex;

        .header {
            justify-self: center;
            justify-content: center;
            z-index: 0;
            position: relative;

            .icon-group {
                position: absolute;
                top: 10px;
                right: 5px;
            }
        }
    }

    #icon_hamburger {
        position: absolute;
        width: 20px;
        height: 20px;
        left: 10px;
        top: 10px;
        color: white;
        z-index: 2;
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
    grid-template-columns: auto 5fr;
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
  justify-content: flex-start;
  background-color: #00000085;

  & .modal {
    overflow-y: scroll;
  }
}

</style>