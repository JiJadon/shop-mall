<template>
  <div>
    <header class="container mx-auto p-4">
      <div
          class="flex flex-wrap justify-between items-center space-x-6 space-y-5"
      >
        <div class="">
          <a href="/">
            <BaseIcon imageUrl="ikea-logo"/>
          </a>
        </div>
        <!--- Nav bar#1 --->
        <nav class="hidden xl:flex justify-around">

          <el-menu
              :default-active="activeIndex"
              class="space-x-8 font-bold text-sm"
              mode="horizontal"
              @select="handleSelect"
          >
            <el-sub-menu index="1" :show-timeout="100" :hide-timeout="100">
              <template #title>产品分类</template>
              <el-tabs tab-position="left">
                <template slot-scope="scope" v-for="item in categoryList">
                  <el-tab-pane :label="item.name" style="width: 1100px;height: 400px">
                    <el-card shadow="never" style="width: 780px;height: 400px;float: left">
                      <span class="title">{{ item.name }}</span>
                      <div>
                        <template v-for="i in item.children">
                          <div class="category-box">
                            <router-link :to="{path: '/goodsList',query: {id: i.ID}}">
                              <el-image class="img-box" :src="i.image"/>
                              <span class="img-box-title"> {{ i.name }}</span>
                            </router-link>
                          </div>
                        </template>
                      </div>
                    </el-card>
                    <el-card shadow="never" style="float: right;width: 300px;height: 400px;margin: 0px 10px"></el-card>
                  </el-tab-pane>
                </template>
              </el-tabs>
            </el-sub-menu>

            <el-sub-menu index="2" :show-timeout="100" :hide-timeout="100">
              <template #title>优惠活动</template>
              <div>
                <el-card></el-card>
                <el-card></el-card>
              </div>
            </el-sub-menu>

            <el-sub-menu index="3" :show-timeout="100" :hide-timeout="100">
              <template #title>新品上市</template>
            </el-sub-menu>

            <el-menu-item index="4">关于我们</el-menu-item>

          </el-menu>

        </nav>
        <!--- Nav bar#1 --->
        <div
            class="flex flex-grow order-last sm:order-1 rounded-full bg-gray-100 p-4 m-2"
        >
          <input
              placeholder="您在寻找什么?"
              type="text"
              class="rounded-full w-full bg-transparent text-gray-700 focus:outline-none px-2"
          />
          <button class="focus:outline-none">
            <BaseIcon imageUrl="loop"/>
          </button>
        </div>

        <nav class="order-2 ">
          <!--- Nav bar#2 --->
          <ul class="flex">
            <li
                v-for="(item, index) in navbarRightItems"
                :key="index"
                class="navbar-li relative"
            >
              <router-link
                  :to="{
                name: item.routeName,
              }"
              >
                <a :href="item.url">
                  <BaseIcon :imageUrl="item.svgName"/>
                </a>
              </router-link>
            </li>
          </ul>
        </nav>
        <!--- Nav bar#2 --->
      </div>
    </header>
  </div>
</template>

<script>
import BaseIcon from '../BaseIcon';
import goods from '/src/api/goods'

export default {
  components: {
    BaseIcon,
  },
  data() {
    return {
      navbarLeftItems: [
        {text: '产品', url: '#'},
        {text: '房间', url: '#'},
        {text: '活动和优惠', url: '#'},
        {text: '关于我们', url: '#'},
      ],
      navbarRightItems: [
        {svgName: 'truck', url: '#'},
        {svgName: 'profile', url: '#'},
        {svgName: 'heart', url: '#'},
        {svgName: 'cart', url: '#', routeName: 'ItemShopCart'},
      ],
      activeIndex: "1",
      categoryList: [],
      offset: 0,
    };
  },
  computed: {},
  created() {
    this.showCategory()
  },
  methods: {
    handleSelect() {

    },
    showCategory() {
      goods.getCategories().then(res => {
        this.categoryList = res.data.categories
      })
    }
  }
};
</script>

<style>
.title {
  /*position: relative;*/
  top: -10px;
  font-size: 20px;
  font-weight: bold;
}

.category-box {
  width: 216px;
  margin: 15px;
  height: 90px;
  float: left;
}

.category-box:hover {
  background: rgb(245, 245, 245);
}

.img-box {
  margin: 6px;
  width: 70px;
  height: 70px;
}

.img-box-title {
  font-size: 16px;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

</style>
