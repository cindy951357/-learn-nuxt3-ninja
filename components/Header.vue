<template>
    <div class="header">
        <el-row>
            <el-col :span="22"><div class="grid-content ep-bg-purple-dark" />
                <NuxtLink to="/">
                    <el-text class="mx-1 brand-name" size="large">Fetch</el-text>
                </NuxtLink>
            </el-col>
            <el-col :span="1">
                <el-badge is-dot class="item">
                    <el-button class="userfilled-button" :icon="ElIconUserFilled" type="primary" />
                </el-badge>
            </el-col>
            <el-col :span="1">
                <el-button class="promotion-button" :icon="ElIconPromotion" type="primary"></el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Share, ElIconUserFilled,  ElIconPromotion} from '@element-plus/icons-vue';

export default defineComponent({
    setup () {
        

        return {}
    },
    components: [ElIconUserFilled, ElIconPromotion,], 
})
</script>

<style lang="scss" scoped>
.header {
    padding: 10px;
}
.brand-name {
    color: white;
}
</style>