<template>
    <div class="header">
        <el-row>
            <el-col :span="18">
                <NuxtLink to="/">
                    <el-text class="mx-1 brand-name" size="large">Fetch</el-text>
                </NuxtLink>
            </el-col>
            <el-col :span="1">
                <el-badge is-dot class="item">
                    <el-icon><share /></el-icon>
                </el-badge>
            </el-col>
            <el-col :span="1">
                <el-icon><icon-share /></el-icon>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup >
import { defineComponent } from 'vue'
import { Share } from '@element-plus/icons-vue';

</script>

<style lang="scss" scoped>
.header {
    padding: 10px;
}
.brand-name {
    color: white;
}
</style>