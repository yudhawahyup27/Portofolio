<template>
  <div>
    <landing-header />
    <main>
      <Nuxt />
    </main>
    <slot />
  </div>
</template>

<script>
import LandingHeader from "~/components/landing/header.vue";
export default {
  name: "LayoutLanding",
  components: {
    LandingHeader,
  },
};
</script>

<style></style>
