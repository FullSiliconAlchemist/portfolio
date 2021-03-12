<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Hero></Hero>
    <div class="title">
      <h1>
        MADMULTIMEDIA
      </h1>
    </div>
    <section>
      <h2>Section 1</h2>
    </section>
    <section>
      <h2>Section 2</h2>
    </section>
    <section>
      <h2>Section 3</h2>
    </section>
    <section>
      <h2>Section 4</h2>
    </section>
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
export default class Home extends Vue { }
</script>

<style lang="scss">
  .home {
    scroll-snap-type: y mandatory;
  }
  .title {
    font-size: 2rem;
    margin-top: 8rem!important;
    height: 20rem;
    width: 80%;
    position: relative;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 10;
    background-color: transparent;
  }
  section {
    margin-top: 10rem!important;
    height: 100vh;
    width: 80%;
    position: relative;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 10;
    background-color: transparent;
  	scroll-snap-align: center;
  }
  h2 {
    position: absolute;
    left: 0;
  }
</style>