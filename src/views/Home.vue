<template>
  <div class="home">
    <Hero></Hero>
    <div class="title">
      <h1 class="mad">
        MAD
      </h1>
      <h1>
        MULTI
      </h1>
      <h1>
        MEDIA
      </h1>
      <h5>Fullstack developer, 3D generalist.</h5>
      <div class="arrow"></div>
    </div>
    <div class="content">
      <div class="content__wrapper">
        <div class="sub__title">
          <h2>
            Projects
          </h2>
        </div>
        <div class="grid__layout" v-if="hoverExists">
          <section v-for="(work, index) in works" :key="index"
                  @mouseenter="mouseOver(work.title)"
                  @mouseleave="mouseOff()">
            <div v-show="hover === work.title" class="work__summary">
              <h1 class="hover__title">
                {{ work.title }}
              </h1>
              <h3>
                {{ work.genre }}
              </h3>
            </div>
            <Showcase :title="work.title"
                      :description="work.description"
                      :images="work.images"
                      :websiteUrl="work.url"
                      :showModal="modal"
                      @onClose="handleClose()">
            </Showcase>
            <button @click="modal = work.title">
              <img :src="mediaService.imageResize(work.images[0])"/>
            </button>
          </section>
        </div>
        <div class="grid__layout" v-if="!hoverExists">
          <section v-for="(work, index) in works" :key="index">
            <Showcase :title="work.title"
                      :description="work.description"
                      :images="work.images"
                      :websiteUrl="work.url"
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
  hover!: string;
  hoverExists!: boolean;

  private mediaService!: MediaService;

  data() {
    this.fbService = new FirebaseService();
    this.works = this.fbService.getWorks();
    this.mediaService = new MediaService();
    this.hover = ''
    this.hoverExists = !window.matchMedia( "(hover: none)" ).matches;
    return {
      works: this.works,
      modal: this.modal,
      hover: this.hover,
      hoverExists: this.hoverExists
    }
  }

  public handleClose(): void {
    this.modal = '';
  }

  public mouseOver(title: string): void {
    console.log(this.hover)
    if (this.hover === title) {
      return;
    }
    this.hover = title;
  }

  public mouseOff(): void {
    if (this.hover === '') {
      return;
    }
    this.hover = '';
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
  .work__summary {
    width: 100%;
    height: 98.3%;
    background-color: rgba($color: #99cccc, $alpha: 0.8);
    position: absolute;
    pointer-events: none;
  }
  .mad {
    font-size: 6.5rem;
    color:rgb(162, 32, 32);
    letter-spacing: 10px;
  }
  .arrow {
    width: 6vmin;
    height: 6vmin;
    border-width: .8vmin .8vmin 0 0;
		border-style: solid;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 65vh;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
  .content {
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
    // grid-gap: 10px;
    background-color: transparent;
    // padding: 10px;
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
  .hover__wrapper {
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .hover__title {
    top: 50%;
    color:rgb(162, 32, 32);
    position: relative;
    text-align: center;
    font-size: 2rem;
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
    font-size: 3rem;
    margin: 0 1rem 0;
    text-align: center;
  }
  h2 {
    position: relative;
    padding-bottom: 2rem;
    text-align: left;
    font-size: 2rem;
    left: 0;
  }
  h3 {
    font-size: 1.8rem;
  }
  h5 {
    margin-top: 1rem;
  }
  p {
    position: relative;
    text-align: left;
    padding-top: 2rem;
  }
  @media screen and (max-width: 400px)  {
    h1 {
      font-family: Chango-Regular;
      font-size: 2.5rem;
      word-wrap: break-word;
      margin: 0 1rem 0;
    }
    h5 {
      font-size: 1.5rem;
    }
    .mad {
      font-size: 4.5rem;
      color:rgb(162, 32, 32);
      letter-spacing: normal;
    }
    .grid__layout {
      display: grid;
      grid-template-columns: fit-content(300px);
      background-color: transparent;
      padding: 10px;
    }
    .work__summary {
      content-visibility: hidden;
    }
  }
</style>