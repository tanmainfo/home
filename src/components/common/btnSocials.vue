<template>
    <ul class="social-widget d-flex" :class="[horizontal ? horizontal : 'justify-content-start']">
        <li>
            <a href="https://www.facebook.com/MarsTRX" role="button" target="_blank">
                <img src="../../assets/images/icon-social/facebook.jpg" :width="size ? size : 64" :alt="enCompany">
            </a>
        </li>
        <li>
            <a href="https://www.youtube.com/channel/UCrCIlpQzH6YhGaAKWQ3OlsA" role="button" target="_blank">
                <img src="../../assets/images/icon-social/youtube.jpg" :width="size ? size : 64" :alt="enCompany">
            </a>
        </li>
        <li>
            <a href="https://www.flickr.com/photos/130903585@N06/albums" role="button" target="_blank">
                <img src="../../assets/images/icon-social/flickr.jpg" :width="size ? size : 64" :alt="enCompany">
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/mars.fitness.tw/" role="button" target="_blank">
                <img src="../../assets/images/icon-social/instagram.jpg" :width="size ? size : 64" :alt="enCompany">
            </a>
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue'

const enCompany = 'MarsFitness';
const props = defineProps(['horizontal', 'size']);
</script>

<style lang="scss" scoped>
ul.social-widget>li {
    &:hover {
        transform: scale(1.1);
    }
}

ul.social-widget>li+li {
    margin-left: 1rem;
}
</style>