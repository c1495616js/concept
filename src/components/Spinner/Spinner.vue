<template>
   <div class="spinner" v-if="loading" style="">
      <Loader :loading="loading" :color="getColor"></Loader>
    </div>
</template>

<script>
  // change loader style from path
  import Loader from 'vue-spinner/src/PulseLoader.vue'
  export default {
    props: ['loading', 'color'],
    computed: {
      getColor () {
        if (this.color) {
          return this.color
        }
        return '#2CA9D6'
      }
    },
    components: {
      Loader
    }
  }
</script>

<style scoped>
.spinner{
  z-index:9999;
  position:fixed;
  top:50%;
  left:50%;
  width:100px;
  height:50px;
}
</style>
