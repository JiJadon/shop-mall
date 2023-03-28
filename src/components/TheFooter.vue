<template>
  <footer class="bg-gray-50 relative bottom-0 ">
    <div class="container mx-auto px-4 lg:flex-row">
      <div class="mb-7 pt-9">
        <h2 class="font-bold text-2xl mb-2">加入我们</h2>
        <p class="mb-2 text-sm">
          您可以享受有吸引力的优惠、促销和惊喜。作为俱乐部会员，
          您可以依靠量身定制的优惠以及许多有趣的灵感和建议。
          加入俱乐部，感受宾至如归的感觉。
        </p>
        <a
            href="#"
            class="bg-black text-white overflow-hidden px-5 py-3 inline-block rounded-full font-bold text-xs"
        >注册或登录</a
        >
      </div>

      <!--- Footer Accordion -->
      <div>
        <ul class="lg:flex lg:flex-row lg:justify-between">
          <li
              v-for="(item, i) in accordionItems"
              :key="i"
              class="border-t-2 border-gray-100 lg:border-none"
          >
            <span class="font-bold hidden mb-6 lg:flex">{{ item.span }}</span>
            <button
                @click="selectItem(item, i)"
                class="flex w-full justify-between focus:outline-none py-7 lg:hidden"
            >
              <span class="font-bold">{{ item.span }}</span>
              <BaseIcon
                  :imageUrl="
                  i === activeItem && item.isActive
                    ? 'chevron-up'
                    : 'chevron-down'
                "
              />
            </button>

            <ul
                class="transition duration-500 ease-in-out lg:opacity-100 lg:visible lg:h-auto"
                :class="
                i === activeItem && item.isActive
                  ? 'opacity-100 visible h-auto'
                  : 'h-0 opacity-0 invisible overflow-hidden'
              "
            >
              <li
                  v-for="(nestedListItem, nestedListIndex) in item.nestedList"
                  :key="nestedListIndex"
                  class="mt-2 mb-6 lg:flex lg:flex-row"
              >
                <a :href="nestedListItem.url">{{ nestedListItem.text }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!--- Footer Accordion -->

      <div
          class="lg:border-b-2 border-gray-100 flex items-center flex-wrap justify-between space-y-4 lg:py-7"
      >
        <!-- Social Media Links -->
        <div class="mr-5 mt-4">
          <ul class="flex space-x-3.5 ">
            <li v-for="(item, index) in socialMediaItems" :key="index">
              <a :href="item.url">
                <BaseIcon
                    :imageUrl="item.svgName"
                    class="border border-gray-300 rounded-2xl hover:border-gray-500 fill-current text-gray-700 px-1.5 w-8 h-8"
                />
              </a>
            </li>
          </ul>
        </div>
        <!-- Social Media Links -->

        <!-- Payment Options -->
        <div>
          <ul class="flex space-x-3.5 ">
            <li v-for="(svgName, index) in paymentOptionsItems" :key="index">
              <BaseIcon
                  class="border border-gray-300 rounded px-1 w-11 h-8"
                  :imageUrl="svgName"
              />
            </li>
          </ul>
        </div>
        <!-- Payment Options -->

        <!-- Language Selector 	 -->
        <div class="xs:flex-100 lg:flex md:flex-initial lg:ml-auto">
          <a
              href=""
              class="inline-flex items-center border border-gray-300 hover:border-gray-500 fill-current text-gray-700 rounded-full font-bold text-xs px-4 py-1.5"
          >
            <BaseIcon imageUrl="globe" class="h-6 w-6 mr-1" />
            <span>中文</span>
          </a>
        </div>
        <!-- Language Selector -->
      </div>
      <!-- Copyrights -->
      <div class="flex items-center justify-between flex-wrap py-7 text-xs">
        <div>
          <p>© Systems For Education 2023</p>
        </div>
        <div class="my-5">
          <ul class="flex flex-wrap font-medium ">
            <li
                v-for="(item, index) in copyrightItems"
                :key="index"
                class=" mr-5"
            >
              <a :href="item.url">{{ item.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Copyrights -->
    </div>
  </footer>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
export default {
  components: {
    BaseIcon,
  },
  data() {
    return {
      activeItem: null,
      accordionItems: [
        {
          span: '客户服务',
          isActive: false,
          nestedList: [
            { text: '登录', url: '#' },
            { text: '查看购物车', url: '#' },
            { text: '查找订单', url: '#' },
          ],
        },
        {
          span: '在此购物',
          isActive: false,
          nestedList: [
            { text: '常见问题', url: '#' },
            { text: '联系我们', url: '#' },
            { text: '品质保证', url: '#' },

          ],
        },
        {
          span: '关于我们',
          isActive: false,
          nestedList: [
            { text: '加入我们', url: '#' },
            { text: '意见反馈', url: '#' },
          ],
        },
        {
          span: '常用链接',
          isActive: false,
          nestedList: [
            { text: '客户注册', url: '#' },
            { text: 'About me', url: '#' },
            { text: '', url: '#' },
          ],
        },
      ],
      copyrightItems: [
        { text: '隐私政策', url: '#' },
        { text: 'cookie设置', url: '#' },
      ],
      //社交图标
      socialMediaItems: [
        { svgName: 'facebook-oval', url: '#' },
      ],
      //支付图标
      paymentOptionsItems: [
        'logo-przelewy-24',
      ],
    };
  },

  methods: {
    selectItem(item, i) {
      item.isActive = !item.isActive;
      this.activeItem = i;
    },
  },
};
</script>

<style></style>
