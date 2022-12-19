<template>
  <div id="app">
    <!-- If -->
    <div class="loading" v-if="spinner == true">
      <pixel-spinner :size="250" color="#d19c97" />
    </div>

    <!-- Else -->
    <router-view v-else />
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import { PixelSpinner } from "epic-spinners";
export default {
  components: { PixelSpinner },
  methods: {
    ...mapActions(["getProducts", "getProducts8"]),
  },
  created() {
    this.getProducts();
    this.getProducts8();
  },
  computed: {
    ...mapGetters({
      spinner: "GET_SPINNER",
    }),
  },
};
</script>
<style>
.loading {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
