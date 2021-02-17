<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="section">
      <h1>
        This is where I talk about stuff
      </h1>
    </div>
    <Hero/>
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
  .home {
    height: 1000vh;
  }
  .section {
    margin-top: 10rem!important;
    height: 100rem;
    width: 80%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 10;
    background-color: aquamarine;
  }
</style>