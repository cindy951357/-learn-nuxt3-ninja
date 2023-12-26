<template>
    <div class="container">
        <header><Header/></header>
        <aside class="side" width="200px"><Sidebar/></aside>
        <div class="content">
        <el-main><div class="border-rounded"><slot></slot></div></el-main>
        <div class="footer">Footer</div>
        </div>
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

<style lang="scss">

header {
  grid-area: header;
}
.content {
  grid-area: content;

}
.side {
  grid-area: sidebar;
  &, .el-menu {
    background-color: #433d57;
  }
}

.footer {
    grid-area: footer;
}

.footer, header, .content {
    background-color: #5c5c5c;
}

.container {
  display: grid;
  gap: 20px;
  grid-template-areas:
    "header"
    "sidebar"
    "content"    
    "footer";
   
}

.border-rounded {
    border-radius: 10px;
    background: white;
    height: 100%;
    padding: 10px;
}

@media (min-width: 500px) {
  .container {
    grid-template-columns: 200px auto;
    grid-template-areas:
      "header  header"
      "sidebar content"
      "footer  footer";
  }
  .container, .side {
        height: 80vh;
    }
    .side {
        width: 200px;
    }
}

@media (min-width: 700px) {
  .container {
    grid-template-columns: 200px 5fr;
    grid-template-areas:
      "header   header "
      "sidebar  content"
      "sidebar  content"
      "footer   footer ";
  }
}

</style>