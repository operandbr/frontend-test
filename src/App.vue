<template>
  <Layout />
</template>
<script>
import Layout from './components/Layout'
export default {
  components: {
    Layout
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
* {
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: $secondary;
}
::-webkit-scrollbar-thumb:hover {
  background: $secondary;
}
</style>
