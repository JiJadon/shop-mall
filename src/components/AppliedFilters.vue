<template>
  <div
    v-if="appliedFilters.length >= 1"
    class="flex items-center  py-7 flex-wrap border-b-2 border-gray-100"
  >
    <button
      v-for="(item, index) in appliedFilters"
      :key="index"
      class="inline-flex items-center whitespace-nowrap border border-black bg-gray-100 hover:bg-gray-200  rounded-full font-bold text-xs px-7 py-2.5 mt-5 mr-5"
    >
      <BaseIcon class="h-4 w-4 mr-2.5" imageUrl="close" />
      <span class="text-sm">{{ item }}</span>
    </button>

    <button
      v-if="appliedFilters.length > 1"
      class="inline-flex items-center whitespace-nowrap  bg-gray-100 hover:bg-gray-200  rounded-full font-bold text-xs px-7 py-2.5 mt-5 mr-5"
    >
      <span class="text-sm">Usuń wszystko</span>
    </button>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon';

export default {
  components: {
    BaseIcon,
  },

  data() {
    return {
      appliedFilters: [],
    };
  },

  computed: {
    filteredValues() {
    },
  },
  watch: {
    filteredValues: {
      deep: true,
      handler(filteredValues) {
        const { newest, saleOnline, ...remainingVal } = filteredValues;

        let remainingValues = [];

        for (let key in remainingVal) {
          let value = remainingVal[key];

          if (Array.isArray(value)) {
            remainingValues.push(...value);
          } else {
            remainingValues.push(value);
          }
        }

        const appliedFilters = [
          newest ? '新奇' : '',
          saleOnline ? '通过互联网出售' : '',
          ...remainingValues,
        ].filter((item) => item != '');

        this.appliedFilters = appliedFilters;
      },
    },
  },
};
</script>

<style></style>
