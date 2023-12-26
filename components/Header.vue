<template>
    <div class="header">
        <div className="brand-link">
            <NuxtLink to="/">
                <el-text class="mx-1 brand-name" size="large">Fetch</el-text>
            </NuxtLink>
        </div>
        <div class="icon-group">
            <el-icon class="icon-share"><share /></el-icon>
            <el-icon class="icon-user"><user /></el-icon>
            <el-icon class="icon-service"><service /></el-icon>
        </div>
    </div>
</template>

<script lang="ts" setup >
import { defineComponent } from 'vue'
import { Share, User, Service } from '@element-plus/icons-vue';

</script>

<style lang="scss" scoped>
.header {
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.brand-name {
    color: white;
}
.icon-group {
    color: white;
}
</style>