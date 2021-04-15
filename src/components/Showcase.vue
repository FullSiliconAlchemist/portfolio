<template>
    <div class="modal-mask" 
      v-if="title == showModal">
        <div class="modal-wrapper">
            <div class="modal-container media__width">
                <carousel :per-page="1"
                        :navigation-enabled="true"
                        :min-swipe-distance="1"
                        :autoplay="true"
                        :autoplayHoverPause="true">
                  <slide v-for="(image, index) in images" :key="index">
                    <img :src="mediaService.imageResize(image)"/>
                  </slide>
                </carousel>
                <div class="description__zone">
                  <h2>
                    {{ title }}
                  </h2>
                  <a v-if="websiteUrl" :href="websiteUrl">
                    <h4>
                     {{ websiteUrl }}
                    </h4>
                  </a>
                  <p>
                    {{ description }}
                  </p>
                  <div class="modal-footer">
                    <slot name="footer">
                      <button class="modal-default-button" @click="closeModal()">
                        Close
                      </button>
                    </slot>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import MediaService from '../services/media.service'
import { Carousel, Slide } from 'vue-carousel';

@Component({
  components: {
    Carousel,
    Slide
  }
})
export default class Hero extends Vue {
  @Prop() public title!: string;
  @Prop() public description!: string;
  @Prop() public websiteUrl!: string;
  @Prop() public images!: string[];
  @Prop() public showModal!: string;

  private mediaService!: MediaService;

  data() {
      this.mediaService = new MediaService();
      return {

      };
  }

  public closeModal(): void {
      this.$emit('onClose');
  }

//   mounted(): void {
//   }

//   created(): void {
//   }

//   destroy(): void {
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
    color: rgb(20, 31, 51);
    z-index: 10000;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
img {
  top: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
}
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  margin: 0px auto;
  padding-bottom: 1rem;
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.VueCarousel-dot-container {
  margin: 0!important;
}
.description__zone {
  padding: 1rem;
}
.media__width {
  width: 60vw;
}
@media only screen and (max-width: 768px) {
  .media__width {
    width: 80vw;
  }
}
</style>
