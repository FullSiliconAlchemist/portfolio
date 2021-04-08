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
    <div class="content">
      <div class="content__wrapper">
        <div class="grid__layout">
          <section v-for="(work, index) in works" :key="index">
            <Showcase :title="work.title"
                      :description="work.description"
                      :images="work.images"
                      :showModal="modal"
                      @onClose="handleClose()">
            </Showcase>
            <button @click="modal = work.title">
              <img :src="mediaService.imageResize(work.images[0])"/>
            </button>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Hero from '@/components/Hero.vue'; // @ is an alias to /src
import Showcase from '@/components/Showcase.vue';
import FirebaseService, { WorksModel } from '../services/firebase.service'
import MediaService from '../services/media.service'

@Component({
  components: {
    Hero,
    Showcase
  }
})
export default class Home extends Vue {

  fbService!: FirebaseService;
  works!: WorksModel[];
  modal!: string;

  private mediaService!: MediaService;

  data() {
    this.fbService = new FirebaseService();
    this.works = this.fbService.getWorks();
    this.mediaService = new MediaService();
    return {
      works: this.works,
      modal: this.modal
    }
  }

  public handleClose(): void {
    this.modal = '';
  }

  // created(): void {
  //   console.log('Vue created');
  // }

  // destroy(): void {
  //   console.log('Vue destroyed');
  // }
}
</script>

<style scoped lang="scss">
  .content {
    background: linear-gradient(0deg, rgb(255, 255, 255) 99%, rgba(255, 255, 255, 0) 100%);
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  .content__wrapper {
    max-width: 80vw;
    left: 0;
    right: 0;
    margin: auto;
  }
  .grid__layout {
    display: grid;
    grid-template-columns: minmax(0,1fr) minmax(0,1fr);
    grid-gap: 10px;
    background-color: transparent;
    padding: 10px;
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
  button {
    border: none;
    background: none;
    padding: 0!important;
  }
  img {
    max-height: 40vh;
    width: 100%;
    // max-width: 30rem;
  }
  section {
    margin-bottom: 0!important;
    width: 80%;
    height: auto;
    position: relative;
    left: 0;
    right: 0;
    margin: auto;
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
  .grid__layout {
    display: grid;
    grid-template-columns: fit-content(300px);
    background-color: transparent;
    padding: 10px;
  }
  }
</style>