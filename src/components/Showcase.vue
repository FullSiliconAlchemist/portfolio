<template>
    <div class="modal-mask" v-if="title == showModal">
        <div class="modal-wrapper">
            <div class="modal-container">
                <h2>
                    {{ title }}
                </h2>
                <carousel :per-page="1"
                          :navigation-enabled="true"
                          :min-swipe-distance="1"
                          :autoplay="true"
                          :autoplayHoverPause="true">
                  <slide v-for="(image, index) in images" :key="index">
                      <img :src="mediaService.imageResize(image)"/>
                  </slide>
                </carousel>
                <p>
                    {{ description }}
                </p>
                <div class="modal-footer">
                    <slot name="footer">
                        <button class="modal-default-button" @click="closeModal()">
                            OK
                        </button>
                    </slot>
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
}
.modal-mask {
  position: fixed;
//   z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 80vw;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

// .modal-default-button {
//   float: right;
//   position: inherit;
// }
</style>
