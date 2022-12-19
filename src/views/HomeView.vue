<template>
  <div>
    <div class="container">
      <h1>#hello</h1>
      <div class="col-md-3" v-for="product in products" :key="product.id">
        hello
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      products: "GET_PRODUCTS",
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>
