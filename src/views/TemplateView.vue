<template>
  <div>
    <!-- Header -->
    <topbar-comp />

    <!-- Main Slot -->
    <main><slot></slot></main>

    <!-- Footer -->
    <footer-comp />
  </div>
</template>

<script>
import FooterComp from "../components/FooterComp.vue";
import TopbarComp from "../components/TopbarComp.vue";
export default {
  name: "TemplateView",
  components: { FooterComp, TopbarComp },
};
</script>

<style>
</style>