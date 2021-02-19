<template>
  <div class="">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <!-- <div id="blueimp-gallery-carousel" class="blueimp-gallery blueimp-gallery-carousel">
      <a class="prev">
        <i class="icon-Component-4--2"></i>
      </a>
      <a class="next">
        <i class="icon-Component-4--1"></i>
      </a>
      <a class="close">×</a>
    </div> -->
    <!-- <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', }"
    ></div> -->
    <div class="gallery-box" v-for="(image, imageIndex) in images" @click="appendLegend(imageIndex)">
      <img :src="image" alt=""
      class="image"
      :key="imageIndex"
      @click="index = imageIndex">
      <div class="gallery-legend">
        <h5>
          Burger Prime - Hamburgueria
        </h5>
        <router-link class="block" tag="a" to="client-profile">Visitar perfil</router-link>
      </div>

    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../../styles/global/_colors.scss";
  .gallery-box {
    position: relative;
    display: inline-block;
    /* margin-bottom: 20px; */
    margin-bottom: 10px;
    /* margin-right: 24px; */
    margin-right: 10px;
    .gallery-legend {
      padding: 10px 10px 20px;
      text-align: center;
      color: white;
      opacity: 0;
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      width: 100%;
      background-color: $dark-blue;
      z-index: 10;
      a {
        font-size: 0.9em;
        color: white;
        text-decoration: underline;
      }
    }
    &:hover,
    &:active,
    &:focus,
    &.active {
      .gallery-legend {
        opacity: 1;
      }
    }
    &:nth-child(6),
    &:nth-child(11),
    &:nth-child(16),
    &:nth-child(21) {
      margin-right: 0;
    }
  }
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
    /* width: 317px; */
    /* height: 317px; */
    width: 328px;
    height: auto;
    cursor: pointer;
  }
  @media screen and (min-width: 320px) and (max-width: 991px) {
    .timeline-box {
      text-align: center;
    }
    .gallery-box {
      margin: 0;
      /* width: auto; */
      display: inline;
      &:last-child,
      &:nth-child(20)  {
        display: none;
      }
      .gallery-legend {
        display: none;
        padding: 5px;
        bottom: -36px;
        h5, a {
          font-size: 0.6em;
        }
      }
    }
    .image {
      margin: 2.5px;
      width: 30%;
      height: auto;
    }
  }
  /* @media screen and (min-width: 320px) and (max-width: 610px) {
    .gallery-box {
      margin: 0;
      width: auto;
      display: inline;
    }
    .image {
      margin: 2.5px;
      width: 284px;
      width: 30%;
      height: auto;
    }
  } */
  /* @media screen and (min-width: 611px) and (max-width: 976px) {
    .gallery-box {
      margin-bottom: 10px;
      margin-right: 10px;
      &:nth-child(3),
      &:nth-child(5),
      &:nth-child(7),
      &:nth-child(9),
      &:nth-child(11),
      &:nth-child(13),
      &:nth-child(15),
      &:nth-child(17),
      &:nth-child(19),
      &:nth-child(21), {
        margin-right: 0;
      }
      &:nth-child(6),
      &:nth-child(16) {
        margin-right: 10px;
      }
    }
    .image {
      width: 302px;
      height: auto;
    }
  } */
  @media screen and (min-width: 992px) and (max-width: 1285px) {
    .gallery-box {
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10),
      &:nth-child(13),
      &:nth-child(19),
      &:nth-child(21), {
        margin-right: 0;
      }
      &:nth-child(6),
      &:nth-child(11) {
        margin-right: 24px;
      }
    }
    .image {
      width: 296px;
      height: auto;
    }
  }

  @media screen and (min-width: 1286px) and (max-width: 1365px) {
    .gallery-box {
      &:nth-child(5),
      &:nth-child(9),
      &:nth-child(13),
      &:nth-child(17),
      &:nth-child(21), {
        margin-right: 0;
      }
      &:nth-child(6),
      &:nth-child(11),
      &:nth-child(16) {
        margin-right: 24px;
      }
    }
    .image {
      width: 296px;
      height: auto;
    }
  }

  @media screen and (min-width: 1366px) and (max-width: 1637px) {
    .gallery-box {
      &:nth-child(6),
      &:nth-child(11),
      &:nth-child(21), {
        margin-right: 0;
      }
    }
    .image {
      /* width: 244px; */
      height: auto;
    }
  }

  @media screen and (min-width: 1638px) and (max-width: 1710px) {
    .gallery-box {
      &:nth-child(6),
      &:nth-child(11),
      &:nth-child(21), {
        margin-right: 0;
      }
    }
    .image {
      /* width: 302px; */
      height: auto;
    }
  }

  @media screen and (min-width: 1200px) and (max-width: 1749px) {
    /* .gallery-box {
      margin-bottom: 10px;
      margin-right: 10px;
    } */
    .image {
      /* width: 202px; */
      width: 214px;
      height: auto;
    }
    .gallery-legend {
      h5 {
        font-size: 1em;
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
        'https://11904.cdn.simplo7.net/static/11904/sku/aviamentos-botao-infantil-patinhas-azul-turquesa-e-preto-12-unidades-1543927288934.jpg',
        'https://11904.cdn.simplo7.net/static/11904/sku/aviamentos-botao-infantil-patinhas-azul-turquesa-e-preto-12-unidades-1543927288934.jpg',
        'https://11904.cdn.simplo7.net/static/11904/sku/aviamentos-botao-infantil-patinhas-azul-turquesa-e-preto-12-unidades-1543927288934.jpg',
        'https://11904.cdn.simplo7.net/static/11904/sku/aviamentos-botao-infantil-patinhas-azul-turquesa-e-preto-12-unidades-1543927288934.jpg',
        'https://11904.cdn.simplo7.net/static/11904/sku/aviamentos-botao-infantil-patinhas-azul-turquesa-e-preto-12-unidades-1543927288934.jpg',
        'https://11904.cdn.simplo7.net/static/11904/sku/aviamentos-botao-infantil-patinhas-azul-turquesa-e-preto-12-unidades-1543927288934.jpg',
        'https://11904.cdn.simplo7.net/static/11904/sku/aviamentos-botao-infantil-patinhas-azul-turquesa-e-preto-12-unidades-1543927288934.jpg',
        'https://11904.cdn.simplo7.net/static/11904/sku/aviamentos-botao-infantil-patinhas-azul-turquesa-e-preto-12-unidades-1543927288934.jpg',
        'https://11904.cdn.simplo7.net/static/11904/sku/aviamentos-botao-infantil-patinhas-azul-turquesa-e-preto-12-unidades-1543927288934.jpg',
        'https://11904.cdn.simplo7.net/static/11904/sku/aviamentos-botao-infantil-patinhas-azul-turquesa-e-preto-12-unidades-1543927288934.jpg',
        'https://11904.cdn.simplo7.net/static/11904/sku/aviamentos-botao-infantil-patinhas-azul-turquesa-e-preto-12-unidades-1543927288934.jpg',
        'https://11904.cdn.simplo7.net/static/11904/sku/aviamentos-botao-infantil-patinhas-azul-turquesa-e-preto-12-unidades-1543927288934.jpg',
        'https://11904.cdn.simplo7.net/static/11904/sku/aviamentos-botao-infantil-patinhas-azul-turquesa-e-preto-12-unidades-1543927288934.jpg',
        'https://11904.cdn.simplo7.net/static/11904/sku/aviamentos-botao-infantil-patinhas-azul-turquesa-e-preto-12-unidades-1543927288934.jpg',
        'https://11904.cdn.simplo7.net/static/11904/sku/aviamentos-botao-infantil-patinhas-azul-turquesa-e-preto-12-unidades-1543927288934.jpg',
        'https://11904.cdn.simplo7.net/static/11904/sku/aviamentos-botao-infantil-patinhas-azul-turquesa-e-preto-12-unidades-1543927288934.jpg',
        'https://11904.cdn.simplo7.net/static/11904/sku/aviamentos-botao-infantil-patinhas-azul-turquesa-e-preto-12-unidades-1543927288934.jpg',
        'https://11904.cdn.simplo7.net/static/11904/sku/aviamentos-botao-infantil-patinhas-azul-turquesa-e-preto-12-unidades-1543927288934.jpg',
        'https://11904.cdn.simplo7.net/static/11904/sku/aviamentos-botao-infantil-patinhas-azul-turquesa-e-preto-12-unidades-1543927288934.jpg',
        'https://11904.cdn.simplo7.net/static/11904/sku/aviamentos-botao-infantil-patinhas-azul-turquesa-e-preto-12-unidades-1543927288934.jpg',
        ],
        index: null
      };
    },
    methods: {
      appendLegend() {
        $('#blueimp-gallery .slide').append('<div class="gallery-legend">'
         +  '<h5>'
         +    'Burger Prime - Hamburgueria'
         + '</h5>'
          +  '<a class="block" href="http://localhost:8080/client-profile">Visitar perfil</a>'
         // +  '<router-link class="block" tag="a" to="client-profile">Visitar perfil</router-link>'
         + '</div>');
      }
    },
    mounted() {
      $('#blueimp-gallery .next').html('<i class="icon-Component-4--1"></i>');
      $('#blueimp-gallery .prev').html('<i class="icon-Component-4--2"></i>');
    },
    components: {
      'gallery': VueGallery
    },
  }
</script>
