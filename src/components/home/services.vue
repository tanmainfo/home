<template>
    <div id="Services" class="services">
        <div class="container bg-white py-10">
            <div class="row px-3">
                <div class="col-12">
                    <h2 class="title position-relative pb-2 mb-4 fw-bold">服務項目</h2>
                </div>
                <div class="col-md-6 service-item text-center mb-8">
                    <i class="fas fa-2x fa-code mx-auto mb-4"></i>
                    <h6 class="mb-2 fw-bold">網頁切版</h6>
                    <p>提供設計稿完成網頁切版</p>
                </div>
                <div class="col-md-6 service-item text-center mb-8">
                    <i class="fa fa-2x fa-laptop-code mx-auto mb-4"></i>
                    <h6 class="mb-2 fw-bold">網頁開發</h6>
                    <p>選擇版型風格</p>
                    <p>提供文字和圖片素材完成網站建置</p>
                </div>
                <div class="col-md-6 service-item text-center mb-8 mb-md-0">
                    <i class="fab fa-2x fa-wordpress-simple mx-auto mb-4"></i>
                    <h6 class="mb-2 fw-bold">WordPress</h6>
                    <p>WordPress網站建置與代為管理</p>
                </div>
                <div class="col-md-6 service-item text-center">
                    <i class="far fa-2x fa-question-circle mx-auto mb-4"></i>
                    <h6 class="mb-2 fw-bold">網站諮詢</h6>
                    <p>網站的疑難雜症</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "@/assets/styles/imports/_variables";

.service-item i {
    width: 75px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid $primary;
    border-radius: 75px;
    background: #FFFFFF;
    color: $primary;
    transition: .5s;
}

.service-item:hover i {
    background: $primary;
    color: #FFFFFF;
}
</style>