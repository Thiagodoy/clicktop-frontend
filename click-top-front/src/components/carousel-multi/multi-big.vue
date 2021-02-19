<template id="">
  <div id="big" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner w-100" role="listbox">
      <div class="carousel-item active">
        <div class="item img-fluid">
          <img src="../../assets/img/503d00b2719be56717833715cd2c7e5f.png" alt="">
            <div class="pad10">
              <h5>Igreja Nossa Senhora da Penha</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="item img-fluid">
          <img src="../../assets/img/503d00b2719be56717833715cd2c7e5f.png" alt="">
            <div class="pad10">
              <h5>Igreja Nossa Senhora da Penha</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="item img-fluid">
          <img src="../../assets/img/503d00b2719be56717833715cd2c7e5f.png" alt="">
            <div class="pad10">
              <h5>Igreja Nossa Senhora da Penha</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="item img-fluid">
          <img src="../../assets/img/503d00b2719be56717833715cd2c7e5f.png" alt="">
            <div class="pad10">
              <h5>Igreja Nossa Senhora da Penha</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="item img-fluid">
          <img src="../../assets/img/503d00b2719be56717833715cd2c7e5f.png" alt="">
            <div class="pad10">
              <h5>Igreja Nossa Senhora da Penha</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="item img-fluid">
          <img src="../../assets/img/503d00b2719be56717833715cd2c7e5f.png" alt="">
            <div class="pad10">
              <h5>Igreja Nossa Senhora da Penha</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="item img-fluid">
          <img src="../../assets/img/503d00b2719be56717833715cd2c7e5f.png" alt="">
            <div class="pad10">
              <h5>Igreja Nossa Senhora da Penha</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#big" role="button" data-slide="prev">
      <i class="icon-Component-4--2" aria-hidden="true"></i>
    </a>
    <a class="carousel-control-next" href="#big" role="button" data-slide="next">
      <i class="icon-Component-4--1" aria-hidden="true"></i>
    </a>
</div>
</template>
<style scoped lang="scss">
  .carousel {
    width: 1555px;
    margin: 20px auto 30px;
    background: white;
    .carousel-control-prev,
    .carousel-control-next {
      width: auto;
      background-color: white;
      height: 101%;
    }
    .carousel-control-prev {
      left: -22px;
    }
    .carousel-control-next {
      right: -10px;
    }
  }

  .carousel-inner .carousel-item {
    background: white;
    /* margin: 0 20px; */
    .item {
      width: 478px !important;
      max-height: 542px;
      display: inline-block;
      position: relative;
      background-color: #0D2D56;
      color: white;
      margin: 0 20px;
      h5 {
        font-family: 'Mosk-Medium';
        font-size: 24px;
      }
      p {
        font-family: 'Roboto';
        font-size: 18px;
        line-height: 1.1;
        margin-bottom: 0;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
      }
      h5, p {
        font-weight: normal;
      }
      img {

        height: 390px;
      }
      .pad10 {
        padding: 10px;
      }
    }
  }

.carousel-inner .carousel-item.active,
.carousel-inner .carousel-item-next,
.carousel-inner .carousel-item-prev {
  display: flex;
}

.carousel-inner .carousel-item-right.active,
.carousel-inner .carousel-item-next {
  transform: translateX(33%);
}

.carousel-inner .carousel-item-left.active,
.carousel-inner .carousel-item-prev {
  transform: translateX(-33%);
}

.carousel-inner .carousel-item-right,
.carousel-inner .carousel-item-left{
  transform: translateX(0);

}

@media screen and (min-width: 320px) and (max-width: 991px) {
  $percent: calc(90% / 1.4);
  .carousel {
    /* width: 250px; */
    width: 100%;
    max-width: 474px;
    .carousel-control-next {
      right: -10px;
      padding-left: 10px;
    }
  }
  .carousel-inner .carousel-item-right.active,
  .carousel-inner .carousel-item-next {
    /* transform: translateX(49%); */
    transform: translateX(150px);
  }

  .carousel-inner .carousel-item-left.active,
  .carousel-inner .carousel-item-prev {
    /* transform: translateX(-49%); */
    transform: translateX(-150px);
  }
  .carousel-inner .carousel-item {

    .item {
      /* width: 220px !important; */
      width: 130px !important;
      max-height: 180px;
      margin: 0 0 0 20px;
      /* width: 270px !important;
      margin: 0 5px; */
      h5 {
        font-size: 9px;
        /* font-size: 20px; */
      }
      p {
        font-size: 9px;
        /* font-size: 14px; */
        -webkit-line-clamp: 3;
      }
      img {
        /* width: 220px; */
        /* width: 270px; */
        width: 130px;
        height: auto;
      }
      .pad10 {
        padding: 5px;
      }
    }
  }
}

@media screen and (min-width: 525px) and (max-width: 991px) {
  .carousel-inner .carousel-item-right.active,
  .carousel-inner .carousel-item-next {
    transform: translateX(150px);
  }

  .carousel-inner .carousel-item-left.active,
  .carousel-inner .carousel-item-prev {
    transform: translateX(-150px);
  }
}

@media screen and (min-width: 1200px) and (max-width: 1750px) {
  .carousel {
    width: 995px;
  }
  .carousel-inner .carousel-item {

    .item {
      width: 300px !important;
      max-height: 387px;
      margin: 0 15px;
      h5 {
        font-size: 20px;
      }
      p {
        font-size: 14px;
      }
      img {
        width: 300px;
        height: auto;
      }
    }
  }
}
</style>
<script type="text/javascript">
  export default {
    data() {
      return {

      }
    },
    mounted() {
      $('#big').carousel({
        interval: false
      });

      $('.carousel .carousel-item').each(function(){
        console.log('entrouuuu');
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i=0;i<2;i++) {
          next=next.next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }

          next.children(':first-child').clone().appendTo($(this));
        }
      });
    },
    methods: {

    },
  }
</script>
