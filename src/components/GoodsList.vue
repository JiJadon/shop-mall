<template>
  <div>
    <div>
      <section class="space-y-2">
        <h1 class="text-2xl font-bold">{{ category2.name }}</h1>
        <p>
            {{category2.desc}}
        </p>
        <p class="underline text-gray-700 text-sm	">
          <a href=""><strong>了解更多 >></strong> </a>
        </p>
      </section>
    </div>

    <div class="relative">
      <!-- Carousel buttons -->
      <div class="py-5 relative  border-b-2 border-gray-100">
        <!--        <button-->
        <!--            @click="scrollHorizontallyTo('right')"-->
        <!--            :class="{ hidden: isHidden }"-->
        <!--            class="absolute lg:hidden top-auto right-2 shadow bg-gray-50 hover:bg-gray-300  rounded-full  px-2 py-2"-->
        <!--        >-->
        <!--          <BaseIcon imageUrl="chevron-right" class="w-4 h-4"/>-->
        <!--        </button>-->

        <!--        <button-->
        <!--            @click="scrollHorizontallyTo('left')"-->
        <!--            :class="{ hidden: !isHidden }"-->
        <!--            class="absolute lg:hidden top-auto left-2 shadow bg-gray-50 hover:bg-gray-300  rounded-full  px-2 py-2"-->
        <!--        >-->
        <!--          <BaseIcon imageUrl="chevron-left" class="w-4 h-4"/>-->
        <!--        </button>-->
        <div
            @scroll="handleScroll"
            ref="scrollbar"
            class="flex  no-scrollbar overflow-x-scroll space-x-3 lg:justify-start"
        >
          <button
              @click=""
              aria-label="显示价格排序"
              class="  bg-gray-100 hover:bg-gray-200  rounded-full font-bold text-xs px-5 py-2.5"
          >
            <span>价格排序</span>
          </button>

          <button
              @click=""
              aria-label="激活产品比较选择"
              class="   bg-gray-100 hover:bg-gray-200  rounded-full font-bold text-xs px-5 py-2.5"
          >
            <span>销量排序</span>
          </button>
          <button
              @click=""
              aria-label="激活产品比较选择"
              class="  bg-gray-100 hover:bg-gray-200  rounded-full font-bold text-xs px-5 py-2.5"
          >
            <span>评论排序</span>
          </button>
          <button
              @click=""
              aria-label="激活产品比较选择"
              class=" bg-gray-100 hover:bg-gray-200  rounded-full font-bold text-xs px-5 py-2.5"
          >
            <span>更多筛选</span>
          </button>
        </div>
      </div>
    </div>
    <!--显示商品列表-->
    <ProductsList v-bind:id="id"/>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon';
import ProductsList from './ProductsList';
import goods from "@/api/goods";

export default {
  data() {
    return {
      products: [],
      isHidden: false,
      isModalVisible: false,
      id: '',
      category2:{}
    };
  },
  created() {
    this.id = this.$route.query.id
    this.handleCategory2Info()
  },
  components: {
    BaseIcon,
    ProductsList,
  },

  methods: {
    handleScroll(e) {
      const isScrollbarVisible = e.target.scrollWidth > e.target.clientWidth;
      if (!isScrollbarVisible) {
        this.isHidden = false;
      }
    },
    handleCategory2Info() {
      goods.getCategory2Info(this.id).then(res => {
        this.category2 = res.data.category2
      })
    },
    // scrollHorizontallyTo(direction) {
    //   const maxScrollLeft =
    //       this.$refs.scrollbar.scrollWidth - this.$refs.scrollbar.clientWidth;
    //   if (direction === 'right') {
    //     this.$refs.scrollbar.scrollLeft += maxScrollLeft;
    //     this.isHidden = !this.isHidden;
    //   }
    //   if (direction === 'left') {
    //     this.$refs.scrollbar.scrollLeft -= maxScrollLeft;
    //     this.isHidden = !this.isHidden;
    //   }
    // },
  },
};
</script>

<style>
input[type='radio']:checked + div {
  background-color: black;
  box-shadow: 0px 0px 0px 3px white inset;
}

input[type='radio']:checked + div {
  color: black;
}

input[type='radio']:hover + div {
  opacity: 0.7;
  background-color: black;
  box-shadow: 0px 0px 0px 3px white inset;
  color: black;
}
</style>
