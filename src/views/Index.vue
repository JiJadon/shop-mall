<template>
  <div>
    <el-carousel :interval="4000" height="580px" trigger="click">
      <el-carousel-item v-for="banner in bannerList">
        <el-image :src="banner"></el-image>
      </el-carousel-item>
    </el-carousel>
    <div style="margin-top: 60px">
      <span class="title">近期推荐</span>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card shadow="never">
            <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
            />
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never">
            <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
            />
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never">
            <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
            />
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-divider></el-divider>
    <div style="margin-top: 60px">
      <span class="title">热销产品</span>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card :body-style="{ padding: '20px' }" shadow="never">
            <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
            />
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ padding: '20px' }" shadow="never">
            <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
            />
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ padding: '20px' }" shadow="never">
            <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
            />
          </el-card>
        </el-col>
      </el-row>
    </div>

  </div>
</template>
<script>
import goods from "/src/api/goods"

export default {
  name: "index",
  data() {
    return {
      bannerList: [],
    }
  },
  created() {
    this.loadBanner()
  },
  methods: {
    loadBanner() {
      goods.getBanner(37).then(res => {
        this.bannerList = res.data.url
      })
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.image {
  width: 100%;
  display: block;
}

.title {
  font-size: x-large;
  font-weight: bold;
  padding-bottom: 6px;
}

.el-row {
  margin-bottom: 20px;
}
</style>>
