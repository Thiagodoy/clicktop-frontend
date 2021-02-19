<template id="">
  <div class="row">
     <div class="multi-carousel" data-items="1,3,5,6" data-slide="1" id="carouselBig"  data-interval="1000">
          <div class="multi-carousel-inner">
              <div class="item">
                <img src="../../assets/img/503d00b2719be56717833715cd2c7e5f.png" alt="">
                  <div class="pad10">
                    <h5>Igreja Nossa Senhora da Penha</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  </div>
              </div>
              <div class="item">
                <img src="../../assets/img/b0c9301d33c36f42444c7aec4994e7e6.png" alt="">
                  <div class="pad10">
                    <h5>Igreja Nossa Senhora da Penha</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  </div>
              </div>
              <div class="item">
                <img src="../../assets/img/63fc31b8f2fde6239cfccbea4869b1bb.png" alt="">
                  <div class="pad10">
                    <h5>Igreja Nossa Senhora da Penha</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  </div>
              </div>
              <div class="item">
                <img src="../../assets/img/63fc31b8f2fde6239cfccbea4869b1bb.png" alt="">
                  <div class="pad10">
                    <h5>Igreja Nossa Senhora da Penha</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  </div>
              </div>
              <div class="item">
                <img src="../../assets/img/63fc31b8f2fde6239cfccbea4869b1bb.png" alt="">
                  <div class="pad10">
                    <h5>Igreja Nossa Senhora da Penha</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  </div>
              </div>
              <div class="item">
                <img src="../../assets/img/63fc31b8f2fde6239cfccbea4869b1bb.png" alt="">
                  <div class="pad10">
                    <h5>Igreja Nossa Senhora da Penha</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  </div>
              </div>
          </div>
          <button class="leftLst">
            <div class="">
              <i class="icon-Component-4--2" aria-hidden="true"></i>
            </div>
          </button>
          <button class="rightLst">
            <div class="">
              <i class="icon-Component-4--1" aria-hidden="true"></i>
            </div>
          </button>
      </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../styles/global/_colors.scss";
  .multi-carousel { float: left; overflow: hidden; margin: 15px; width: 100%; position:relative; left: 0; right: 0; top: 0; bottom: 0;}
  .multi-carousel .multi-carousel-inner { transition: 1s ease all; padding: 0 50px ;margin: 0 auto;}
  .multi-carousel .multi-carousel-inner .item { float: left;}
  /* .multi-carousel .multi-carousel-inner .item > div { text-align: center; padding:10px; margin:10px; background:#f1f1f1; color:#666;} */
  .multi-carousel .leftLst, .multi-carousel .rightLst {
    position:absolute;
    /* top:calc(50% - 20px); */
    height: 100%;
    width: 50px;
    background: white;
    border: 0;
    padding: 0;
    z-index: 9999;
    i {
	    color: $light-grey;
	    font-size: 2em;
	    &:before {
	      color: $light-grey;
	    }
			&:focus,
		  &:hover,
		  &:active,
		  &.active {
		    i:before {
		      color: $dark-blue;
		    }
		  }
	  }
  }
  .multi-carousel .leftLst {
    left: 0;
    div {
      margin-left: 15px;
    }
  }
  .multi-carousel .rightLst {
    right: 0;
    div {
      float: right;
      margin-right: 15px;
    }
  }

  .multi-carousel .leftLst.over, .multi-carousel .rightLst.over { pointer-events: none;}
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

  @media screen and (min-width: 320px) and (max-width: 991px) {
    .multi-carousel .multi-carousel-inner {padding: 0 5px}
    .multi-carousel .leftLst, .multi-carousel .rightLst {
      width: 0;
      background: transparent;
    }
    .multi-carousel .leftLst div,
    .multi-carousel .rightLst div {
      margin-left: -5px;
      margin-right: 0;
    }
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

  @media screen and (min-width: 1200px) and (max-width: 1750px) {
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
</style>
<script type="text/javascript">
  export default {
    data() {
      return {

      }
    },
    mounted() {
      var itemsMainDiv = ('.multi-carousel');
      var itemsDiv = ('.multi-carousel-inner');
      var itemWidth = "";

      $('.leftLst, .rightLst').click(function () {
          var condition = $(this).hasClass("leftLst");
          if (condition)
              click(0, this);
          else
              click(1, this)
      });

      ResCarouselSize2();




      $(window).resize(function () {
          ResCarouselSize2();
      });

      //this function define the size of the items
      function ResCarouselSize2() {
          var incno = 0;
          var dataItems = ("data-items");
          var itemClass = ('.item');
          var id = 0;
          var btnParentSb = '';
          var itemsSplit = '';
          var sampwidth = $(itemsMainDiv).width();
          var bodyWidth = $('body').width();
          $(itemsDiv).each(function () {
              id = id + 1;
              var itemNumbers = $(this).find(itemClass).length;
              btnParentSb = $(this).parent().attr(dataItems);
              itemsSplit = btnParentSb.split(',');
              $(this).parent().attr("id", "carouselBig" + id);


              if (bodyWidth >= 1200) {
                itemWidth = 540;
                // incno = itemsSplit[0];
                // itemWidth = sampwidth / incno;
              }
              else if (bodyWidth >= 992) {
                itemWidth = 410;
                // incno = itemsSplit[0];
                // itemWidth = sampwidth / incno;
              }
              else if (bodyWidth >= 768) {
                itemWidth = 185;
                // incno = itemsSplit[0];
                // itemWidth = sampwidth / incno;
              }
              else {
                itemWidth = 155;
                // incno = itemsSplit[0];
                // itemWidth = sampwidth / incno;
              }
              $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
              $(this).find(itemClass).each(function () {
                  $(this).outerWidth(itemWidth);
              });

              $(".leftLst").addClass("over");
              $(".rightLst").removeClass("over");

          });
      }


      //this function used to move the items
      function ResCarousel(e, el, s) {
          var leftBtn = ('.leftLst');
          var rightBtn = ('.rightLst');
          var translateXval = '';
          var divStyle = $(el + ' ' + itemsDiv).css('transform');
          var values = divStyle.match(/-?[\d\.]+/g);
          var xds = Math.abs(values[5]);
          if (e == 0) {
              translateXval = parseInt(xds) - parseInt(itemWidth * s);
              $(el + ' ' + rightBtn).removeClass("over");

              if (translateXval <= itemWidth / 1) {
                  translateXval = 0;
                  $(el + ' ' + leftBtn).addClass("over");
              }
          }
          else if (e == 1) {
              var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
              translateXval = parseInt(xds) + parseInt(itemWidth * s);
              $(el + ' ' + leftBtn).removeClass("over");

              if (translateXval >= itemsCondition - itemWidth / 1) {
                  translateXval = itemsCondition;
                  $(el + ' ' + rightBtn).addClass("over");
              }
          }
          $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
      }

      //It is used to get some elements from btn
      function click(ell, ee) {
          var Parent = "#" + $(ee).parent().attr("id");
          var slide = $(Parent).attr("data-slide");
          ResCarousel(ell, Parent, slide);
      }
    },

  }
</script>
