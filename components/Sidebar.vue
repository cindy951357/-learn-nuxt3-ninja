<template>
  <div class="sidebar" id="my_sidebar" ref="sidebarRef">
    <button v-if="!modalStore.isOpen" class="toggle-sidebar-btn" @click="toggleSidebar">
      <span v-if="sidebarStore.isExpanded">
        <el-icon><back/>
      </el-icon>
      </span>
      <span v-else>
        <el-icon><right />
      </el-icon>
      </span>
      
    </button>
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="!modalStore.isOpen && !sidebarStore.isExpanded"
      @open="handleOpen"
      @close="handleClose"
      
    >
        <el-menu-item index="0" @click="handleMenuClick">
            <el-icon><house /></el-icon>
            <template #title><NuxtLink to="/">Home</NuxtLink></template>
        </el-menu-item>
        <template v-for="(item, i) in MainMenuConfig" :key="i">
          <div v-if="!item.pages && item.heading" class="first-item">
            <el-menu-item  :index="`${i}`" @click="handleMenuClick">
                <template #title>{{ item.heading }}</template>
            </el-menu-item>            
          </div>
          <el-sub-menu v-if="item.pages" :index="`${i}`">
            <template #title>{{ item.heading }}</template>
            <template v-for="(secondItem, j) in item.pages" :key="j">
              <template v-if="secondItem.heading">
                <el-menu-item :index="`${i}-${j}`" @click="handleMenuClick"><NuxtLink to="/products">{{ secondItem.heading }}</NuxtLink></el-menu-item>
              </template>
              <template v-if="secondItem.sectionTitle && secondItem.route && !secondItem.sub">
                <span class="second-item-section-title">{{ secondItem.sectionTitle }}</span>
              </template>

               <el-sub-menu v-if="secondItem.sub" :index="`${i}-${j}`">
                <template #title>{{ secondItem.sectionTitle }}</template>
                <template v-for="(thirdItem, k) in secondItem.sub" :key="k">
                   <el-menu-item-group>
                    <template v-if="thirdItem.heading">
                      <el-menu-item :index="`${i}-${j}-${k}`">
                        <NuxtLink to="/products" @click="handleMenuClick">{{ thirdItem.heading }}</NuxtLink>
                      </el-menu-item>
                    </template>
                  </el-menu-item-group>
                </template>
              </el-sub-menu> 
            </template>
          </el-sub-menu>
        </template>

<!--         

        <el-sub-menu index="1">
            <template #title>
                <el-icon><location /></el-icon>
                <span>One</span>
            </template>

            <el-menu-item-group>
                <template #title><span>Group One</span></template>
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group title="Group Two">
                <el-menu-item index="2-3">item three</el-menu-item>
            </el-menu-item-group>

            <el-sub-menu index="2-4">
                <template #title><span>item four</span></template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
            </el-sub-menu>

        </el-sub-menu>
      <el-menu-item index="3">
        <el-icon><icon-menu /></el-icon>
        <template #title><NuxtLink to="/about">About</NuxtLink></template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><document /></el-icon>
        <template #title>Contact</template>
      </el-menu-item>
      <el-menu-item index="5">
        <el-icon><setting /></el-icon>
        <template #title><NuxtLink to="/products">Series 1</NuxtLink></template>
      </el-menu-item> -->
    </el-menu>
  </div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import MainMenuConfig from "@/data/MenuData";
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    House,
    Right,
    Back
  } from '@element-plus/icons-vue';
  import { useModalStore } from '@/stores/modal';
  import { useSidebarStore } from '@/stores/sidebar';

const modalStore = useModalStore();
const sidebarStore = useSidebarStore();
const sidebarRef = ref<any>(null);

  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }

  const handleMenuClick = () => {
    if (modalStore.isOpen) {
        modalStore.close();
    }
  }

  const toggleSidebar = () => {
    if (sidebarStore.isExpanded){
      sidebarStore.collapseSidebar();
    } else {
      sidebarStore.expandSidebar();
    }
  }


  </script>
  
  <style lang="scss">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100vh;
    background-color: gray;
    overflow-y: scroll;
  }

  .el-menu {
    .el-menu-item {
        background-color: #433d57;
    }
    
    .el-menu-item, .el-sub-menu, .el-sub-menu__title {
        color: white;

        &:hover {
            color: black;
        }
    }    
  }

  .sidebar {
    position: relative;
    height: 100vh;
  }
  .el-menu--vertical, .sidebar, .toggle-sidebar-btn {
    transition: width left 2s;
  }

  .toggle-sidebar-btn {
    position: absolute;
    width: 30px;
    height: 30px;
    left: 185px;
    top: 40px;
    background-color: white;
    z-index: 1;
  }

  .second-item-section-title {
    color: white;
  }
  </style>