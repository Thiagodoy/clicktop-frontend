<template>
  <div class="">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <!-- <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', }"
    ></div> -->
    <div class="gallery-box" v-for="(image, imageIndex) in images">
      <img :src="image" alt=""
      class="image"
      :key="imageIndex"
      @click="index = imageIndex">
      <!-- <div class="gallery-legend">
        <h5>
          Burger Prime - Hamburgueria
        </h5>
        <a class="block" href="#">Visitar perfil</a>
      </div> -->

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
    &:hover {
      .gallery-legend {
        opacity: 1;
      }
    }
    &:nth-child(5),
    &:nth-child(9),
    &:nth-child(13),
    &:nth-child(17) {
      margin-right: 0;
    }
  }
  .image {
    /* width: 295px; */
    width: 306px;
    height: auto;
    cursor: pointer;
  }

  /* @media screen and (min-width: 320px) and (max-width: 610px) {
    .gallery-box {
      margin: 0;
    }
    .image {
      margin: 0 auto 10px;
      width: 284px;
      height: auto;
    }
  }
  @media screen and (min-width: 611px) and (max-width: 975px) {
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
  /* @media screen and (min-width: 976px) and (max-width: 991px) {
    .gallery-box {
      margin-right: 15px;
      margin-bottom: 15px;
      &:nth-child(5),
      &:nth-child(9),
      &:nth-child(13),
      &:nth-child(17) {
        margin-right: 0;
      }
      &:nth-child(11) {
        margin-right: 15px;
      }
    }
    .image {
      width: 220px;
      height: auto;
    }
  } */
  @media screen and (min-width: 320px) and (max-width: 991px) {
    .timeline-box {
      text-align: center;
    }
    .gallery-box {
      margin: 0;
      width: auto;
      display: inline;
      &:last-child,
      &:nth-child(20)  {
        display: none;
      }
      .gallery-legend {
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

  @media screen and (min-width: 992px) and (max-width: 1233px) {
    .gallery-box {
      margin-right: 15px;
      margin-right: 15px;
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
        margin-right: 15px;
      }
    }
    .image {
      width: 167px;
      height: auto;
    }
  }

  @media screen and (min-width: 1234px) and (max-width: 1365px) {
    .gallery-box {
      margin-right: 15px;
      margin-right: 15px;
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
        margin-right: 15px;
      }
    }
    .image {
      width: 212px;
      height: auto;
    }
  }

  @media screen and (min-width: 1366px) and (max-width: 1710px) {
    .gallery-box {
      &:nth-child(9),
      &:nth-child(13),
      &:nth-child(17), {
        margin-right: 0;
      }
    }
    .image {
      /* width: 226px; */
      height: auto;
    }
  }

  @media screen and (min-width: 1638px) and (max-width: 1710px) {
    .gallery-box {
      &:nth-child(9),
      &:nth-child(13),
      &:nth-child(17), {
        margin-right: 0;
      }
    }
    .image {
      /* width: 281px; */
      height: auto;
    }
  }

  @media screen and (min-width: 1200px) and (max-width: 1750px) {
    .image {
      width: 198px;
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
        ],
        index: null
      };
    },
    // mounted() {
      // $('.blueimp-gallery').addClass('line').addClass('justify-content-between');
    // },
    components: {
      'gallery': VueGallery
    },
  }
</script>
