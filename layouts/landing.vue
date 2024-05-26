<template>
  <div>
    <LandingHeader />
    <main>
      <Nuxt />
    </main>
    <slot />
    <div v-if="showHideSpinner" class="full-page-overlay">
      <PartialLoading />
    </div>
    <LandingFooter />
  </div>
</template>

<script>
import LandingFooter from "~/components/landing/Footer.vue";
import LandingHeader from "~/components/landing/Header.vue";
import PartialLoading from "~/components/partial/loading.vue"; // Assuming you have this component

export default {
  components: {
    LandingHeader,
    PartialLoading,
    LandingFooter,
  },
  data() {
    return {
      showHideSpinner: true,
    };
  },
  beforeCreate() {
    this.showHideSpinner = true;
  },
  mounted() {
    this.showHideSpinner = false;
  },
};
</script>
<style scoped>
.full-page-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(15 23 42 / 1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
</style>
