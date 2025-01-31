<template>
    <div id="Portfolio" class="portfolio">
        <div class="container bg-white py-10">
            <div class="row px-3">
                <div class="col-12">
                    <h2 class="title position-relative pb-2 mb-4 fw-bold">網站版型</h2>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-12 text-center mb-2">
                            <ul class="my-4 d-flex justify-content-center flex-wrap">
                                <li class="portfolio-btn">
                                    <button class="btn btn-outline-primary active" data-type="all"
                                        @click.prevent="filterDatas('all')">
                                        <i class="fa fa-star me-2"></i>全部
                                    </button>
                                </li>
                                <li class="portfolio-btn">
                                    <button class="btn btn-outline-primary" data-type="bussiness"
                                        @click.prevent="filterDatas('bussiness')">
                                        <i class="fa fa-laptop-code me-2"></i>形象網站
                                    </button>
                                </li>
                                <li class="portfolio-btn">
                                    <button class="btn btn-outline-primary" data-type="shop"
                                        @click.prevent="filterDatas('shop')">
                                        <i class="fa fa-mobile-alt me-2"></i>購物網站
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div v-for="data in tempDatas" :key="data.id" class="col-md-6 mb-4">
                            <!-- portfolio-item start -->
                            <div class="portfolio-item border rounded-2 shadow-sm">
                                <img :src="data.imageUrl" alt="">
                                <div class="goto">
                                    <div class="bg-cover text-center py-5">
                                        <a class="btn btn-outline-light" :href="data.href" target="_blank">前往範例網站</a>
                                    </div>
                                </div>
                            </div>
                            <!-- portfolio-item end -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from "vue";
import dbcen from "@/assets/images/dbcen.png";
import mars from "@/assets/images/mars.jpg";
import dpthe from "@/assets/images/dpthe.jpg";
import dptra from "@/assets/images/dptra.jpg";
const datas = [
    {
        id: 1,
        imageUrl: dbcen,
        href: 'https://dbcen.tanmainfo.com',
        category: 'bussiness'
    },
    {
        id: 2,
        imageUrl: mars,
        href: 'https://mars.tanmainfo.com',
        category: 'bussiness'
    },
    {
        id: 3,
        imageUrl: dpthe,
        href: 'https://dpthe.tanmainfo.com/',
        category: 'bussiness'
    },
    {
        id: 4,
        imageUrl: dptra,
        href: 'https://dptra.tanmainfo.com',
        category: 'bussiness'
    }
]
const tempDatas = ref(datas);
function filterDatas(key) {
    if (key === 'all') {
        tempDatas.value = datas;
    } else {
        tempDatas.value = datas.filter((item) => {
            return item.category == key;
        });
    }
    const btns = document.querySelectorAll('.portfolio-btn>button');
    btns.forEach((item) => {
        const _type = item.dataset.type;
        item.classList.remove('active');
        if (key === _type) {
            item.classList.add('active');
        }
    });
}

</script>

<style lang="scss" scoped>
.portfolio ul>li {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
}

.portfolio .portfolio-item {
    position: relative;
    overflow: hidden;
}

.portfolio .portfolio-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: 0.5s;

    &:hover {
        transform: scale(1.1);
    }
}

.portfolio .portfolio-item .goto {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -50px;
    opacity: 0;
    transition: 0.5s;
}

.portfolio .portfolio-item:hover .goto {
    bottom: 0;
    opacity: 1;
}

.bg-cover {
    background-color: rgba(2, 116, 190, .8);
}
</style>