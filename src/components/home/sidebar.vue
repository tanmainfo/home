<template>
    <div class="sidebar">
        <div class="sidebar-text d-flex flex-column h-100 justify-content-center text-center">
            <h1>
                <img class="w-100 img-fluid" src="../../assets/images/profile.jpg" :alt="_WEBRNAME_SHORT">
            </h1>
            <ul id="list-example" class="list-group">
                <RouterLink class="list-group-item list-group-item-action" :to="{ name: 'home', hash: '#About' }">關於我們
                </RouterLink>
                <RouterLink class="list-group-item list-group-item-action" :to="{ name: 'home', hash: '#Services' }">
                    服務項目
                </RouterLink>
                <RouterLink class="list-group-item list-group-item-action" :to="{ name: 'home', hash: '#ApplyForm' }">
                    填寫需求
                </RouterLink>
                <RouterLink class="list-group-item list-group-item-action" :to="{ name: 'home', hash: '#Portfolio' }">
                    網站版型
                </RouterLink>
                <RouterLink class="list-group-item list-group-item-action" :to="{ name: 'home', hash: '#Skills' }">使用技術
                </RouterLink>
            </ul>
            <div class="mt-auto">
                <a href="https://line.me/R/ti/p/@667kdjtb?ts=01300004&oat_content=url" target="_blank" role="button">
                    <img src="https://qr-official.line.me/gs/M_667kdjtb_GW.png?oat_content=qr" width="150"
                        class="mb-2 mx-auto">
                    <div class="btn btn-line px-5">加入LINE立即諮詢</div>
                </a>

            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const _WEBRNAME_SHORT = import.meta.env.VITE_WEBNAME_SHORT;
const _WEBRNAME_FULL = import.meta.env.VITE_WEBNAME_FULL;
</script>

<style lang="scss" scoped>
//@import "@/assets/styles/imports/_breakpoint";
@import "@/assets/styles/imports/_variables";

.list-group-item {
    border: none;
    font-weight: bold;
    color: $accent;

    &:focus,
    &:active,
    &:hover {
        color: $accent;
        background-color: $primary-light;
    }
}
</style>