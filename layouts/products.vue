<template>
    <div>
        <header>
            <NuxtLink to="/products">Nuxt Dojo Merch</NuxtLink>
        </header>
    </div>
    <div>
        <slot></slot>
    </div>
    <footer>
        <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Products</NuxtLink>
                </li>
            </ul>
    </footer>
</template>
<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>