<script lang="ts" setup>
import P01 from "@/assets/image/p01.jpg";
import P02 from "@/assets/image/p02.jpg";
import P03 from "@/assets/image/p03.jpg";
import P04 from "@/assets/image/p04.jpg";
import P05 from "@/assets/image/p05.jpg";

const imgArr: Array<String> = [P01, P02, P03, P04, P05];

</script>

<template>
    <div class="carousel">
        <div class="block text-center">
            <el-carousel height="150px">
            <el-carousel-item v-for="imgItem, index in imgArr" :key="index">
               <el-image style="width: 100px; height: 100px" :src="imgItem" fit="cover" />
            </el-carousel-item>
            </el-carousel>
        </div>
        <div class="block text-center" m="t-4">
            <el-carousel trigger="click" height="150px">
            <el-carousel-item v-for="item in imgArr.length" :key="item">
                <h3 class="small justify-center" text="2xl">{{ item }}</h3>
            </el-carousel-item>
            </el-carousel>
        </div>
    </div>
    <div class="progress-group">
      <div class="progress-item"><el-progress type="circle" :percentage="0" /></div>
      <div class="progress-item"><el-progress type="circle" :percentage="25" /></div>
      <div class="progress-item"><el-progress type="circle" :percentage="100" status="success" /></div>
      <div class="progress-item"><el-progress type="circle" :percentage="70" status="warning" /></div>
      <div class="progress-item"><el-progress type="circle" :percentage="50" status="exception" /></div>
      <div class="progress-item"><el-progress type="circle" :percentage="30" status="success" /></div>
    </div>
</template>

<style lang="scss" scoped>
h2 {
    margin-bottom: 20x;
    font-size: 36px;
}
p {
    margin: 20px 0;
}
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-img {
  padding-top: 20px;
}

.progress-group {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  .progress-item {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 670px) {
  .progress-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
}
</style>
