<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Hero msg="Charles Rabbat"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Hero from '@/components/Hero.vue'; // @ is an alias to /src

@Component({
  components: {
    Hero,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">

</style>