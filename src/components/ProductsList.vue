<template>
  <!--grid -->
  <div class="grid grid-cols-2 md:divide-x-0 md:grid-cols-3 lg:grid-cols-4  ">
    <div
        v-for="item in goodsList"
        :key="item.id"
        class="flex flex-col py-9 px-5 border-b even:border-l md:border-l-0  cursor-pointer"
    >
      <router-link
          :to="{path: '/goodsDetail',query: {id: item.ID}}">
        <div class="relative">
          <span
              class="absolute top-0 transition-opacity ease-in-out duration-300 hover:opacity-0"
          >
            <img :src="item.image" alt="" class="w-auto h-auto"/>
          </span>
          <span>
            <img :src="item.image" alt="" class="w-auto h-auto"/>
          </span>
        </div>
        <div class="flex flex-col mt-5">
          <span
              v-if="item.isNew ===1"
              class="font-bold text-yellow-600 "
          >新品</span>
          <span class="font-bold">{{ item.name }}</span>
          <span>{{ item.desc }}</span>
          <span class="font-bold md:text-2xl">￥{{ item.price }} 元</span>
        </div>
      </router-link>

      <div class="self-end mt-auto">
        <button
            class="bg-blue-700 rounded-full w-6 h-6 p-6 flex justify-center items-center  hover:bg-blue-800	"
            @click="addToCart(item)"
        >
          <span>
            <BaseIcon class="text-white" imageUrl="add-item"/>
          </span>
        </button>
      </div>
    </div>
  </div>
  <!--提示信息-->
  <ModalAddedToCart
      v-if="isModalAddedVisible"
      :name="itemName"
      @hide-modal-added="hideModal"
  />
  <!--grid -->
</template>

<script>
import BaseIcon from './BaseIcon';
import ModalAddedToCart from './modal/ModalAddedToCart';
import goods from "@/api/goods";
import cart from "@/api/cart";

export default {
  components: {
    BaseIcon,
    ModalAddedToCart,
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isModalAddedVisible: false,
      itemName: '',
      itemNames: [],
      goodsList: [],
    };
  },
  created() {
    this.handleGoodsList()
  },
  methods: {
    handleGoodsList() {
      goods.getGoodsList(this.id).then(res => {
        this.goodsList = res.data.goodsList
      })
    },
    addToCart(item) {
      this.itemNames.push(item.name);
      this.itemName = this.itemNames.pop();
      if (!this.isModalAddedVisible) {
        this.isModalAddedVisible = true;
      }
      //TODO 模拟id为2的会员
      item.memberId = 2
      //每次添加的数量为1
      item.number = 1
      cart.addToCart(item).then(res => {

      })
    },
    hideModal() {
      this.isModalAddedVisible = false;
    },
  },
  computed: {},
};
</script>

<style></style>
