<template>
  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <!-- <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', }"
    ></div> -->
    <img :src="image" alt=""
    class="image"
    v-for="(image, imageIndex) in images"
    :key="imageIndex"
    @click="index = imageIndex">
  </div>
</template>
<style scoped lang="scss">
  .image {
    /* float: left; */
    /* background-size: cover;
    background-repeat: no-repeat;
    background-position: center center; */
    /* border: 1px solid #ebebeb; */
    /* display: inline-block; */
    /* margin: 10px 5px; */
    /* margin-bottom: 20px; */
    /* display: flex; */
    width: 317px;
    height: 317px;
    margin-bottom: 20px;
    margin-right: 24px;
    &:nth-child(6),
    &:nth-child(11),
    &:nth-child(16),
    &:nth-child(21) {
      margin-right: 0;
    }
  }
  @media (max-width: 1100px) {
    .image {
      /* float: left; */
      /* background-size: cover;
      background-repeat: no-repeat;
      background-position: center center; */
      /* border: 1px solid #ebebeb; */
      /* display: inline-block; */
      /* margin: 10px 5px; */
      /* margin-bottom: 20px; */
      /* display: flex; */
      width: 317px;
      height: 317px;
      margin-bottom: 20px;
      margin-right: 24px;
      &:nth-child(6),
      &:nth-child(11),
      &:nth-child(16),
      &:nth-child(21) {
        margin-right: 24px;
      }
    }
  }
</style>
<script>
  import VueGallery from 'vue-gallery';

  export default {
    data: function () {
      return {
        images: [
          '/img/img1.5188958f.png',
          '/img/img1.5188958f.png',
          '/img/img1.5188958f.png',
          '/img/img1.5188958f.png',
          '/img/img1.5188958f.png',
          '/img/img1.5188958f.png',
          '/img/img1.5188958f.png',
          '/img/img1.5188958f.png',
          '/img/img1.5188958f.png',
          '/img/img1.5188958f.png',
          '/img/img1.5188958f.png',
          '/img/img1.5188958f.png',
          '/img/img1.5188958f.png',
          '/img/img1.5188958f.png',
          '/img/img1.5188958f.png',
          '/img/img1.5188958f.png',
          '/img/img1.5188958f.png',
          '/img/img1.5188958f.png',
          '/img/img1.5188958f.png',
          '/img/img1.5188958f.png',
        ],
        index: null
      };
    },
    mounted() {
      // $('.blueimp-gallery').addClass('line').addClass('justify-content-between');
    },
    components: {
      'gallery': VueGallery
    },
  }
</script>
