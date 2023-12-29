<script lang="ts" setup>

</script>

<template>
    <el-card class="box-card absolute">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
      <template #footer>Footer content</template>
    </el-card>
  </template>
  
  <style lang="scss">
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .text {
    font-size: 12px;
  }
  
  .item {
    margin-bottom: 12px;
  }
  
  .box-card {
    width: 400px;
  }
  </style>
