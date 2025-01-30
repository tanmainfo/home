<template>
    <a v-show="isVisible" href="#" class="back-to-top-control" @click.prevent="scrollToTop">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1"
            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-4.98 3.66l-.163 .01l-.086 .016l-.142 .045l-.113 .054l-.07 .043l-.095 .071l-.058 .054l-4 4l-.083 .094a1 1 0 0 0 1.497 1.32l2.293 -2.293v5.586l.007 .117a1 1 0 0 0 1.993 -.117v-5.585l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -1.497l-4 -4l-.082 -.073l-.089 -.064l-.113 -.062l-.081 -.034l-.113 -.034l-.112 -.02l-.098 -.006z"
                stroke-width="0" fill="currentColor" />
        </svg>
    </a>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const isVisible = ref(false); // Tracks the button's visibility

// Function to check scroll position and toggle visibility
const handleScroll = () => {
    isVisible.value = window.scrollY > 200; // Show when scrolled > 200px
};

// Smoothly scroll to the top of the page
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Add and remove scroll event listeners
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
<style lang="scss" scoped>
// @import "@/assets/styles/imports/_breakpoint";
@import "@/assets/styles/imports/_variables";

.back-to-top-control {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    width: 60px;
    height: 60px;
    color: white; //black;
    background-color: $primary; //white;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    opacity: 0.8;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 1;
    }

    >svg {
        width: 32px;
        height: 32px;
    }
}
</style>