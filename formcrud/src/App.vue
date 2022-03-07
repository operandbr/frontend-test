<template>
  <div id="app">
    <TheHeader />
    <main id="main">
      <router-view v-slot="{ Table }">
        <transition>
          <keep-alive>
            <component :is="Table" />
          </keep-alive>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>



