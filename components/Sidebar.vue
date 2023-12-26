<template>
    <el-menu
      class="el-menu-vertical-demo"
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
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    House,
  } from '@element-plus/icons-vue'
  import { useModalStore } from '@/stores/modal'

const modalStore = useModalStore();

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
  </style>