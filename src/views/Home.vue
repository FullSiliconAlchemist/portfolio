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
      <h2>About</h2>
      <p>
        I’m a believer in the power of multimedia and that information technology is the way to providing a more informed world and ultimately a better one. The core of this world starts with good design and engineering solutions that people love to use.
        Having worked at a startup for most of my undergrad, I’ve seen the ins and outs of a tech startup. Whether it be the technological pipeline, from design to execution and deployment or on the business development side, from developing marketing strategies to raising venture capital. I wore many hats in a short period of time while still remaining focused on my core set of responsibilities. 
        Types of multimedia work I’ve explored varies from interactive installations, games, to web apps like the types we use on a day to day basis.
      </p>
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
    height: auto;
    width: 80%;
    position: relative;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 10;
    background-color: transparent;
  }
  h2 {
    position: relative;
    text-align: left;
    left: 0;
  }
  p {
    position: relative;
    text-align: left;
    padding-top: 2rem;
  }
</style>