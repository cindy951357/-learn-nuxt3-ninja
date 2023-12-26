<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"><Sidebar/></el-aside>
      <el-container>
        <el-header><Header/></el-header>
        <el-main><div class="border-rounded"><slot></slot></div></el-main>
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
.main-head, .el-header {
  grid-area: header;
}
.content, .el-main {
  grid-area: content;

}
.side, .el-aside {
  grid-area: sidebar;
}

.el-footer, .el-header, .el-main {
    background-color: #5c5c5c;
}

.el-footer {
    grid-area: footer;
}

.wrapper {
  display: grid;
  gap: 20px;
  grid-template-areas:
    "header"
    "content"
    "sidebar"
    "footer";

    .el-menu {
        height: unset;
    }
}
.border-rounded {
    border-radius: 10px;
    background: white;
    height: 100%;
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