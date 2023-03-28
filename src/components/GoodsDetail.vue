<template>
  <!--- Grid    --->
  <div class="md:grid  gap-10 md:grid-cols-3 lg:grid-cols-4 ">
    <div class="md:col-span-2 lg:col-span-3 ">
      <img class="h-full w-full  object-cover" :src="goods.image" alt=""/>
    </div>
    <div class="md:col-span-1 lg:col-span-1 	md:sticky md:top-0 lg:self-start	">
      <div class="flex flex-row justify-between mb-7 ">
        <div class="space-y-2">
          <h2 class="font-bold text-xl md:text-2xl	">{{ goods.name }}</h2>
          <span class="text-sm lg:text-base	"
          >{{ goods.desc }}, {{ goods.color }}白色
          </span>
          <!--          <div class="flex flex-row space-x-2 items-center ">-->
          <!--            <img-->
          <!--                class="self-center"-->
          <!--                src="https://ikea-imgsrv.loyaltypoint.pl/behtar/pip-badge/ikeafamily.png"-->
          <!--                alt=""-->
          <!--            />-->
          <!--            <span class="text-xs tracking-tight	"></span>-->
          <!--          </div>-->
          <div class="flex flex-row space-x-4 items-center">
            <img
                class="w-12 h-8 self-center"
                src="https://ikea-imgsrv.loyaltypoint.pl/behtar/installments/na-raty.png"
                alt=""
            />
            <span class="text-xs underline font-bold text-left tracking-tighter"
            ></span
            >
          </div>
          <div class="flex flex-row space-x-4 items-center">
            <span class="flex">
<!--              <BaseIcon-->
              <!--                  v-for="i in 5"-->
              <!--                  :class="-->
              <!--                  i <= goods.rating ? 'text-gray-900' : 'text-gray-300'-->
              <!--                "-->
              <!--                  class="fill-current w-4 h-4"-->
              <!--                  :key="i"-->
              <!--                  imageUrl="star"-->
              <!--              />-->
               <el-rate
                   v-model="goods.rate"
                   disabled
                   show-score
                   text-color="#ff9900"
                   score-template="{value} points"
               />
            </span>

          </div>
        </div>
        <div class="flex">
          <span class="font-bold text-xl md:text-2xl"
          >￥{{ goods.price }}.00元</span
          >
        </div>
      </div>
      <div class="mb-7 flex space-x-2 ">
        <span><BaseIcon class="w-4 h-4" imageUrl="info"/></span>
        <span class="text-xs text-gray-700">
          有助于整理衣柜内部的室内配件单独出售。旋钮和手柄单独出售
        </span>
      </div>

      <div class="mb-7 border-t">
        <button class="flex w-full flex-row items-center justify-between mt-5">
          <span class="flex flex-col items-start">
            <span class="font-bold">数量</span>
            <span class="text-sm">
             <el-input-number v-model="num" :min="1" :max="10" size="large" @change="handleChange"/>
            </span>
          </span>
        </button>
      </div>
      <div class="mb-7 border-t">
        <button class="flex w-full flex-row items-center justify-between mt-5">
          <span class="flex flex-col items-start">
            <span class="font-bold">颜色</span>
            <span class="text-sm"> 白色</span>
          </span>
        </button>
      </div>

      <div class="mb-7 flex gap-2 justify-between items-center">
        <!--加入购物车-->
        <button
            @click=""
            class="flex-grow bg-blue-600 hover:bg-blue-700 rounded-full  "
        >
          <span class="inline-flex items-center px-8 h-12">
            <span v-if="!isClicked" class="text-white font-bold text-sm "
            >加入购物车</span
            >
            <div v-else class=" inline-flex  items-center">
              <span class="text-white font-bold text-sm ">提交</span>
              <BaseIcon
                  imageUrl="check"
                  class="w-4 h-4 ml-2 pointer-events-none"
              />
            </div>
          </span>
        </button>
        <!--立即购买-->
        <button
            @click=""
            class="flex-grow bg-blue-600 hover:bg-blue-700 rounded-full  "
        >
          <span class="inline-flex items-center px-8 h-12">
            <span v-if="!isClicked" class="text-white font-bold text-sm ">立即购买</span>
          </span>
        </button>
        <button
            class="bg-white hover:bg-gray-200 border border-gray-200 rounded-full font-bold text-sm px-3.5 py-3.5"
        >
          <!--收藏-->
          <span> <BaseIcon imageUrl="heart"/> </span>
        </button>
      </div>

      <div
          class="mb-7 flex p-5 shadow-lg	space-x-2  border border-gray-200 border-opacity-50"
      >
        <BaseIcon imageUrl="info" class="w-12 h-12 pb-3 text-blue-600"/>
        <div>
          <p class="font-bold">远程规划</p>
          <span>
            您是否梦想着新衣橱并需要灵感？在 45 分钟的在线会议中与宜家一起计划，无需离开家！预约
          </span>
        </div>
      </div>
      <div>
        <div class="flex py-5 space-x-2 items-center">
          <BaseIcon imageUrl="truck"/>
          <span>产品可订购</span>
          <span class="bg-green-600  rounded-full w-2 h-2"></span>
        </div>
      </div>
    </div>
    <div class="md:col-span-2 lg:col-span-3">
      <div class="flex flex-col space-y-1 py-12">
        <span class=" text-xs">产品编号</span>
        <span class=" bg-black font-bold text-xs text-white w-20 h-6 px-2 py-1"
        >{{ goods.goodsNo }}
        </span>
      </div>
      <div>
        <div class="py-5 border-t">
          <button
              class="flex w-full flex-row items-center justify-between py-5"
          >
            <span class="font-bold">产品详情</span>
            <BaseIcon imageUrl="chevron-right" class=" w-5 h-5"/>
          </button>
        </div>

        <div class="py-5 border-t">
          <button
              class="flex w-full flex-row items-center justify-between py-5"
          >
            <span class="flex flex-col items-start">
              <span class="font-bold">评价意见</span>
              <div class="flex flex-row space-x-4 items-center">
                <span class="flex">
                  <BaseIcon
                      v-for="i in 5"
                      :class="
                      i <= goods.rate ? 'text-gray-900' : 'text-gray-300'
                    "
                      class="fill-current w-4 h-4"
                      :key="i"
                      imageUrl="star"
                  />
                </span>
                <span class="text-sm"> ({{ goods.rate }})</span>
              </div>
            </span>

            <BaseIcon imageUrl="chevron-right" class=" w-5 h-5"/>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--- Grid --->
</template>

<script>
import BaseIcon from './BaseIcon.vue';
import goods from "@/api/goods";

export default {
  components: {
    BaseIcon,
  },
  data() {
    return {
      ratings: [],
      isClicked: false,
      id: '',
      goods: {},
      num: 1,
    };
  },
  created() {
    this.id = this.$route.query.id
    this.handleGoodsInfo()
  },
  methods: {
    handleGoodsInfo() {
      goods.getGoodsInfo(this.id).then(res => {
        this.goods = res.data.goods
      })

    },
    handleChange() {

    }
  },
  computed: {},

};
</script>

<style></style>
