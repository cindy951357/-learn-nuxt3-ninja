<template>
  <div class="sidebar" id="my_sidebar" ref="sidebarRef">
    <button class="toggle-sidebar-btn" @click="toggleSidebar">
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
      :collapse="!sidebarStore.isExpanded"
      @open="handleOpen"
      @close="handleClose"
      @click="handleMenuClick"
    >
        <el-menu-item index="1">
            <el-icon><house /></el-icon>
            <template #title><NuxtLink to="/">Home</NuxtLink></template>
        </el-menu-item>

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
      </el-menu-item>
    </el-menu>
  </div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted, ref } from 'vue';
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

  onMounted(() => {
    sidebarStore.sidebarRef = sidebarRef;
});

  </script>
  
  <style lang="scss">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100vh;
    background-color: gray;
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
  </style>