<script setup>
import { defineProps } from 'vue'
const { data } = defineProps(['data']);
</script>

<template>
    <div class="bg-transparent border-maccent card rounded-0" style="max-width: 400px;">
        <div class="card-body p-0">
            <div class="card-title bg-light p-5 position-relative">
                <!-- quote -->
                <div class="reviews-quote bg-maccent d-inline-block position-absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="56" height="56" class="p-2">
                        <path
                            d="M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72z" />
                    </svg>
                </div>
                <!-- quote -->
                <p class="fw-bold fs-5">{{ data.username }}</p>
                <p class="text-warning"><i class="bi bi-star-fill me-1"></i><i class="bi bi-star-fill me-1"></i><i
                        class="bi bi-star-fill me-1"></i><i class="bi bi-star-fill me-1"></i><i
                        class="bi bi-star-fill  me-1"></i>
                </p>
            </div>
            <div class="card-text text-white p-5">
                <p class="mb-5">
                    {{ data.content }}
                </p>
                <a :href="data.url" role="button" target="_blank"
                    class="btn btn-sm rounded-0 btn-outline-maccent d-block">查看內容</a>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.reviews-quote {
    top: -25px;
    right: 30px;
}
</style>