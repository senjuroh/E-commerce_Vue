<template>
  <!-- Categories Start -->
  <div class="container-fluid pt-5">
    <div class="row px-xl-5 pb-3">
      <div
        class="col-lg-4 col-md-6 pb-1"
        v-for="(product, index) in products"
        :key="index"
      >
        <div
          class="cat-item d-flex flex-column border mb-4"
          style="padding: 30px"
        >
          <p class="text-right">15 Products</p>
          <a href="" class="cat-img position-relative overflow-hidden mb-3">
            <div style=""></div>
            <img
              class="img-fluid"
              :src="product.image"
              alt=""
              style="height: 400px; width: 500px; object-fit: cover"
            />
          </a>
          <h5 class="font-weight-semi-bold m-0 text-center">
            {{ product.title }}
          </h5>
        </div>
      </div>
    </div>
  </div>
  <!-- Categories End -->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CategoriesComp",
  computed: {
    ...mapGetters({
      products: "GET_PRODUCTS",
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>