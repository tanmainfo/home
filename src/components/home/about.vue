<template>
    <div id="About" class="about">
        <div class="container bg-white py-10">
            <div class="row px-3">
                <div class="col-12">
                    <h2 class="title position-relative pb-2 mb-4 fw-bold">關於我們</h2>
                </div>
                <div class="col-12">
                    <p>許多企業與品牌想架設網站，卻因不熟悉而遲遲未啟動。</p>
                    <p class="mb-2">我們深知您的需求與顧慮，並提供最簡單、高效的解決方案。</p>
                    <p>在數位時代，網站是企業的門面，更是成功的起點。</p>
                    <p class="mb-4">我們可以助您快速建置專業網站，搭配完善維護，助您輕鬆經營網路事業！</p>
                    <h5 class="d-inline text-primary">Email:</h5> {{ _WEBNAME_EMAIL }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const _WEBNAME_EMAIL = import.meta.env.VITE_WEBNAME_EMAIL;
</script>

<style lang="scss" scoped></style>