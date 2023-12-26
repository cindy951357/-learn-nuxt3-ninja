<template>
    <div class="dashboard-container">
        <header>
            <Header/>
            <div class="hamburger"><el-icon><more /></el-icon></div>
        </header>
        <aside class="side" width="200px"><Sidebar/></aside>
        <div class="maincontent">
            <div class="border-rounded">
                <slot></slot>
            </div>
        </div>
        <div class="footer">Footer</div>
    </div>
</template>

<script lang="ts" setup>
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
import { More, } from '@element-plus/icons-vue';

</script>

<style lang="scss">
html, body, .dashboard-container {
    height: 100vh;
    min-width: 300px;
}

header {
  grid-area: header;
  display: flex;
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
}

.footer, header, .maincontent {
    background-color: #5c5c5c;
}


@media (max-width: 350px) {
    .side {
        display: none;
    }

    .dashboard-container {
        display: grid;
        grid-template-rows: 52px 4fr 52px;
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

@media (min-width: 400px) {
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
    grid-template-rows: 52px 4fr 52px;
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

</style>