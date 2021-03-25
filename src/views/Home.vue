<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Hero></Hero>
    <div class="title">
      <h1>
        MADMULTIMEDIA
      </h1>
    </div>
    <section v-for="(work, index) in works" :key="index">
      <h2>
        {{ work.title }}
      </h2>
      <div v-for="(image, index) in work.images" :key="index">
        <img :src="image"/>
      </div>
      <p>
        {{ work.description }}
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Hero from '@/components/Hero.vue'; // @ is an alias to /src
import FirebaseService, { WorksModel } from '../services/firebase.service'

@Component({
  components: {
    Hero
  },
})
export default class Home extends Vue {

  fbService!: FirebaseService;
  works!: WorksModel[];

  data() {
    this.fbService = new FirebaseService();
    this.works = this.fbService.getWorks();
    return {
      works: this.works
    }
  }

  created(): void {
    console.log('Vue created');
  }

  destroy(): void {
    console.log('Vue destroyed');
  }
}
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