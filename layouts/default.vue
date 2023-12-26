<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"><Sidebar/></el-aside>
      <el-container>
        <el-header><Header/></el-header>
        <el-main><slot></slot></el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';



export default {
    components: { 
        Header,
        Sidebar,
     },
}
</script>

<style lang="scss" scoped>
.el-container, .el-menu {
    height: 100vh;
}
.main-head {
  grid-area: header;
}
.content {
  grid-area: content;
}
.side {
  grid-area: sidebar;
}

.wrapper {
  display: grid;
  gap: 20px;
  grid-template-areas:
    "header"
    "content"
    "sidebar"
    "footer";
}

@media (min-width: 500px) {
  .wrapper {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header  header"
      "sidebar content"
      "footer  footer";
  }
}

@media (min-width: 700px) {
  .wrapper {
    grid-template-columns: 1fr 5fr;
    grid-template-areas:
      "header   header "
      "sidebar  content"
      "sidebar  content"
      "footer   footer ";
  }
}
</style>