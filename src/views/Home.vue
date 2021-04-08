<template>
  <div class="home">
    <Hero></Hero>
    <div class="title">
      <h1>
        MAD
      </h1>
      <h1>
        MULTIMEDIA
      </h1>
    </div>
    <section v-for="(work, index) in works" :key="index">
      <h2>
        {{ work.title }}
      </h2>
      <div v-for="(image, index) in work.images" :key="index">
        <img :src="imageResize(image)"/>
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
  }
})
export default class Home extends Vue {

  fbService!: FirebaseService;
  works!: WorksModel[];

  imageResize(uploadCareLink: string): string {
    const prefix = uploadCareLink.slice(0, 57);
    const suffix = uploadCareLink.slice(57);
    const resize = '/-/resize/' + Math.floor(window.innerWidth * 0.8) + '/';
    return prefix + resize + suffix;
  }

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
    margin-top: 6rem!important;
    height: 100vh;
    width: 80%;
    position: relative;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 10;
    background-color: transparent;
  }
  img {
    max-height: 500px;
  }
  section {
    margin-bottom: 10rem!important;
    height: auto;
    width: 80%;
    position: relative;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 10;
    background-color: transparent;
  }
  h1 {
    font-family: Chango-Regular;
    font-size: 5rem;
    margin: 0 1rem 0;
    text-align: center;
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
  @media screen and (max-width: 400px)  {
    h1 {
      font-family: Chango-Regular;
      font-size: 3rem;
      word-wrap: break-word;
      margin: 0 1rem 0;
    }
  }
</style>