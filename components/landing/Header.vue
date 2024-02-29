<template>
  <div>
    <header>
      <nav
        class="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg bg-[#0f172a] text-white"
      >
        <div>
          <a href="#"> Portofolio </a>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          @click="toggleMenu"
          class="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          :class="{
            hidden: isMenuHidden,
            'w-full md:flex md:items-center md:w-auto': true,
          }"
          id="menu"
        >
          <ul
            class="pt-4 text-base text-white md:flex md:justify-between md:pt-0"
          >
            <li>
              <a
                v-on:click="toggleModal()"
                class="md:p-4 py-2 block hover:text-purple-400"
                href="#"
                >Language</a
              >
            </li>
            <li>
              <a class="md:p-4 py-2 block hover:text-purple-400" href="#"
                >Project</a
              >
            </li>
            <li>
              <a class="md:p-4 py-2 block hover:text-purple-400" href="#"
                >Contact</a
              >
            </li>
            <li>
              <a
                class="md:p-4 py-2 block hover:text-purple-400"
                href="https://www.mastama.my.id"
                >Blog</a
              >
            </li>
            <li>
              <a
                class="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                href="#"
                >About Me</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <modal-changelanguage ref="languageModal" />
  </div>
</template>

<script lang="ts">
import ModalChangelanguage from "../partial/ModalChangelanguage.vue";

export default {
  data() {
    return {
      isMenuHidden: true,
    };
  },
  components: {
    ModalChangelanguage,
  },
  methods: {
    toggleMenu() {
      this.isMenuHidden = !this.isMenuHidden;
    },
    toggleModal() {
      this.$refs.languageModal.toggleModal();
    },
  },
};
</script>

<style></style>
