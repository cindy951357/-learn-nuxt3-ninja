<template>
    <div class="header">
        <div className="brand-link">
            <NuxtLink to="/">
                <el-text class="mx-1 brand-name" size="large">Fetch</el-text>
            </NuxtLink>
        </div>
        <div class="icon-group">
            <el-icon class="icon-share"><share /></el-icon>
            <div class="popup-icon relative">
                <el-icon class="icon-user" id="icon_user" @click="toggleUserPopup"><user /></el-icon>
                <div v-if="isUserPopupOpen" class="popup-wrapper absolute"><UserPopup/></div>
            </div>            
            <el-icon class="icon-service"><service /></el-icon>
        </div>        
    </div>
    
</template>

<script lang="ts" setup >
import UserPopup from "@/components/popups/UserPopup.vue";
import { Share, User, Service } from '@element-plus/icons-vue';
import { ref } from 'vue';

const isUserPopupOpen = ref(false);
const toggleUserPopup = () => {
    isUserPopupOpen.value = !isUserPopupOpen.value;
}

</script>

<style lang="scss" scoped>
.header {
    padding: 10px;
    width: 100%;
    display: flex;
    position: relative;

    @media (min-width: 470px) {
        justify-content: space-between;
    }    
}
.brand-name {
    color: white;
}
.icon-group {
    color: white;
    display: flex;
    .el-icon:hover {
        cursor: pointer;
    }
    .el-icon svg{
        width: 30px;
        height: 30px;
    }
}

.popup-wrapper {
    z-index: 1000;
    left: calc(-400px + 30px);
}
</style>