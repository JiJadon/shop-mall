<template>
  <TheNavigation/>
  <main class="container mx-auto p-4">
    <router-view/>
  </main>
  <TheFooter/>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheNavigation,
    TheFooter,
  },

  watch: {
    $route(to) {
      document.title =
          to.meta.title || `${to.params.name} - ${to.params.description}`;
    },
  },
  mounted() {

  },
};
</script>

<style>
#app {
  position: relative;
}
</style>
