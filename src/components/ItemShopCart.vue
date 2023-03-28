<template>
  <!-- Empty Cart -->
  <div v-if="cartLength == 0" class="space-y-10">
    <div class="flex justify-between items-center">
      <h1 class="font-bold text-2xl">您的购物车为空，请先添加商品到购物车</h1>
      <button class="hover:bg-gray-200 rounded-full p-4">
        <BaseIcon imageUrl="dots" class=" w-5 h-5"/>
      </button>
    </div>

    <div class="p-7 border rounded">
      <div class="flex justify-between items-center">
        <div>
          <h2 class="block font-bold text-lg">拥有账户?</h2>
          <h3 class="text-sm mr-2">
            <a class="underline" href="#">登录</a>
            快速有效地进行购买并访问您的订单记录
          </h3>
        </div>
        <div>
          <BaseIcon class="h-8 w-8 " imageUrl="profile"/>
        </div>
      </div>
    </div>
  </div>
  <!-- Cart -->
  <div v-else class="md:grid gap-5 md:grid-cols-3  place-content-start">
    <div class="col-span-2 ">
      <!--Header  -->
      <div class=" space-y-5">
        <div class="flex justify-between items-center">
          <h1 class="font-bold text-2xl">购物车</h1>
          <button class="hover:bg-gray-200 rounded-full p-4">
            <BaseIcon imageUrl="dots" class=" w-5 h-5"/>
          </button>
        </div>
      </div>
      <!--Header  -->
      <!-- Item -->
      <div
          v-for="cartItem in carts"
          :key="cartItem.id"
          class=" flex items-center py-10"
      >
        <div class="self-start w-16 md:w-24 mr-3">
          <img :src="cartItem.image" :alt="`衣柜 ${cartItem.name}`"/>
        </div>
        <div class="flex-grow space-y-3">
          <div class="flex md:text-lg">
            <ul>
              <li class="font-bold">
                <span>{{ cartItem.name }}</span>
              </li>
              <li>
                <!-- TODO ：商品颜色-->
                <span>{{ cartItem.desc }}, {{ cartItem.color }}</span>
              </li>
            </ul>
            <div class="ml-auto md:text-2xl">
              <span class="font-bold">￥{{ cartItem.price }} 元</span>
            </div>
          </div>
          <div class="flex flex-row items-center space-x-5">
            <div
                class="flex  w-24 items-center border hover:border-gray-700  rounded-full py-1.5 px-4 relative"
            >
              <select
                  class="w-full appearance-none outline-none "
                  @change="updateNumber(cartItem, parseInt($event.target.value))"
                  :key="cartItem.id"
              >
                <optgroup>
                  <option
                      v-for="option in 20"
                      :key="option"
                      :selected="option == cartItem.number"
                      :value="option"
                  >{{ option }}
                  </option
                  >
                </optgroup>
              </select>
              <BaseIcon
                  class="w-4 h-4 absolute right-3 pointer-events-none"
                  imageUrl="chevron-down"
              />
            </div>
            <div class="flex-grow">
              <button @click="removeFromCart(cartItem)">
                <span>移除商品</span>
              </button>
            </div>
            <div>
              <button class="hover:bg-gray-200 rounded-full p-4">
                <BaseIcon imageUrl="dots" class=" w-5 h-5"/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Item -->
    </div>

    <!-- Summary -->
    <div class="col-span-1 md:sticky md:top-0 md:self-start">
      <div class="space-y-14 mt-10 md:mt-0">
        <div class="text-xs md:text-sm space-y-5">
          <div>
            <h1 class="font-bold">合计</h1>
          </div>
          <div class="flex justify-between	">
            <h2>交货</h2>
            <h2 class="ml-auto text-right">
              您将在收到商品时支付运费
            </h2>
          </div>
          <hr class="bg-black border-black h-0.5 my-5"/>
          <div class="flex justify-between font-bold items-center">
            <h2>产品的价值</h2>
            <h2 class="text-2xl">{{ cartTotal }}</h2>
          </div>
        </div>
        <div>
          <div class="py-7 px-7 border rounded">
            <div class="flex justify-between items-center">
              <div>
                <h2 class="block font-bold text-lg">拥有账户?</h2>
                <h3 class="text-sm mr-2">
                  <a class="underline" href="#">加入或登录</a> 加入或登录以快速，高效地进行采购并访问订单历史记录。
                </h3>
              </div>
              <div>
                <BaseIcon class="h-8 w-8 " imageUrl="profile"/>
              </div>
            </div>
          </div>
        </div>

        <button class="w-full h-12 bg-blue-600 hover:bg-blue-700 rounded-full ">
          <span class=" inline-flex items-center ">
            <span class="text-white font-bold text-sm ">下一步</span>
          </span>
        </button>
      </div>
    </div>
    <!-- Summary -->
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
import cart from "@/api/cart";

export default {
  components: {
    BaseIcon,
  },
  data() {
    return {
      carts: [],
    }
  },
  created() {
    this.showCarts()
  },
  computed: {
    loadItem() {

    },
    cartTotal() {

    },
    cartLength() {
      return this.carts.length
    },
  },
  methods: {
    removeFromCart(cartItem) {
      let memberId = 2
      let goodsId = cartItem.id
      cart.delFromCart(memberId, goodsId).then(res => {
        if (this.cartLength > 0) {
          this.showCarts()
        }
      })
    },
    updateNumber(cartItem, value) {

    },
    showCarts() {
      // TODO 会员登录
      let memberId = 2
      cart.showCartInfo(memberId).then(res => {
        this.carts = res.data.cartInfoList
      })
    },
  },
};
</script>

<style></style>
