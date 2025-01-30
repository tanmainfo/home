<script setup>
const _WEBRNAME_SHORT = import.meta.env.VITE_WEBNAME_SHORT;
const _WEBRNAME_FULL = import.meta.env.VITE_WEBNAME_FULL;

</script>

<template>
    <div class="footer">
        <div class="container-fluid bg-white pt-5 px-0">
            <div class="container bg-dark text-light text-center py-5">
                <p class="small">&copy; All Rights Reserved. Designed by TANMAINFO | {{ _WEBRNAME_FULL }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
//@import "@/assets/styles/imports/_breakpoint";
//@import "@/assets/styles/imports/_variables";

.footer-links-area ul>li:not(:last-child) {
    margin-bottom: 0.5rem;
}

.footer-links-area ul>li>a {
    color: #fff;
}
</style>