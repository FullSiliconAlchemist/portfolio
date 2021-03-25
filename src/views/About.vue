<template>
  <div class="about">
    <section>
      <h2>About</h2>
      <p>
        Why “madmultimedia”?
        Madness is the creative process’ lowest point, but it’s also the inflection point towards a greater outcome. 
        I’m a believer in the power of multimedia to tell compelling stories, deliver timely content, and provide transformational opportunities for individuals and crowds. I believe information technology is the our best tool way to providing create a more informed world and ultimately a better one. The core of this world starts with   good design and engineering solutions that people will love to use.
      </p>
      <p>
        I’ve worked on a range of projects including interactive installations, games, and web apps. I am proficient in fullstack web technologies, UX design and data modelling, as well as being an avid game programmer, 3D graphics programmer, 3D modeler and level designer. I completed the Bachelor in Computer Science and Computation Arts at Concordia University in Montreal.
      </p>
      <p>
        Having worked at a tech startup for most of my undergradthe last four years, I’ve seen the ins and outs of a tech startup. Whether it be the technological pipeline, from design to execution and deployment or on the business development side, from developing marketing strategies to raising venture capital. I wore many hats in a short period of time while still remaining focused on my core set of responsibilities.
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue { }
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