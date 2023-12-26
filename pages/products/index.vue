<script lang="ts" setup>
    // fetch the products
    const { data: products } = await useFetch('https://fakestoreapi.com/products');

</script>

<template>
    <div>Products</div>
    <div class="grid grid-cols-4 gap-5">
        <div :key="p.id" v-for="p in products">
            <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
        </div>
    </div>
</template>

<style lang="css" scoped>
    
</style>
