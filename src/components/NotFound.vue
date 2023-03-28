<template>
  <div class="text-center">
    <h1 class="font-bold text-2xl p-5">额……似乎出了点问题!</h1>

    <p class="pb-5">您查找的页面不存在</p>

    <p>尝试一下链接.</p>

    <router-link :to="{ name: 'Index' }"
      ><p class="underline">返回主页</p></router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style></style>
