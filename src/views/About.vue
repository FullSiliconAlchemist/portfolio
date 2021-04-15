<template>
  <div class="about">
    <section>
      <div class="header">
        <h2>
          Creatives can't help but make 
        </h2>
        <h1>
          MAD
        </h1>
        <h2 class="mm">
          multimedia.
        </h2>
      </div>
      <div class="text">
        <p>
          I’m a believer in the power of multimedia to tell compelling stories, deliver timely content, and provide transformational opportunities for individuals and crowds.
          I believe information technology is our best tool to create a more informed world and ultimately a better one.
        </p>
        <p>
          I’ve worked on a range of projects including interactive installations, games, and web apps.
          I am proficient in fullstack web technologies, UX design and data modelling, as well as being an avid game programmer, 3D graphics programmer, 3D modeler and level designer.
          I completed the Bachelor in Computer Science and Computation Arts at Concordia University in Montreal.
        </p>
        <p>
          Having worked at a tech startup for most of my undergrad in the last four years, I’ve seen the ins and outs of a startup company.
          Whether it be the technological pipeline, from design to execution and deployment or on the business development side, from developing marketing strategies to raising venture capital.
        </p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue { }
</script>

<style scoped lang="scss">
  .header {
    max-width: 500px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .text {
    max-width: 40rem;
    left: 0;
    right: 0;
    margin: auto;
  }
  section {
    height: auto;
    width: 80%;
    position: relative;
    left: 0;
    right: 0;
    margin: auto;
    background-color: transparent;
  }
  h1 {
    font-family: Chango-Regular;
    font-stretch: expanded;
    font-size: 5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  h2 {
    position: relative;
    text-align: left;
    left: 0;
  }
  .mm {
    position: relative;
    text-align: right;
    left: 0;
  }
  p {
    position: relative;
    text-align: left;
    padding-top: 2rem;
  }
</style>