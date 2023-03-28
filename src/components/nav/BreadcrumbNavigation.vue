<template>
  <nav
      class="container mx-auto font-medium p-4 border-b-2 border-gray-100"
      aria-label="Breadcrumb"
  >
    <ol class="flex items-center justify-start space-x-2 text-xs">
      <li class="xs:hidden">
        <a href="#">产品</a>
      </li>

      <li class="flex items-center space-x-2">
        <BaseIcon imageUrl="chevron-right" class="h-2.5 w-2.5 xs:hidden" />
        <a href="#">储物和收纳</a>
      </li>

      <li class="flex items-center space-x-2">
        <BaseIcon imageUrl="chevron-right" class="h-2.5 w-2.5" />
        <a href="#">柜子</a>
      </li>

      <li class="flex items-center space-x-2 xs:hidden">
        <BaseIcon imageUrl="chevron-right" class="h-2.5 w-2.5" />
        <a href="#" aria-current="about">衣柜</a>
      </li>

      <li
          v-if="$route.name == 'ItemShopDetails' && $route.params.id"
          class="flex items-center space-x-2 xs:hidden"
      >
        <BaseIcon imageUrl="chevron-right" class="h-2.5 w-2.5" />
        <p>{{ loadItem.name }}</p>
      </li>

      <li
          v-if="$route.name == 'ItemShopCart'"
          class="flex items-center space-x-2 xs:hidden"
      >
        <BaseIcon imageUrl="chevron-right" class="h-2.5 w-2.5" />
        <p>Koszyk</p>
      </li>
    </ol>
  </nav>
</template>

<script>
import BaseIcon from '../BaseIcon';
export default {
  components: {
    BaseIcon,
  },

  computed: {
    loadItem() {
      return this.$store.getters.loadItemById(this.$route.params.id);
    },
  },
};
</script>

<style></style>
