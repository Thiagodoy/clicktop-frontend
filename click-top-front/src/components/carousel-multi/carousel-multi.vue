carouselMulti<template>
	  <div class="row">
		   <div class="carousel-multi" data-items="1" data-slide="1" id="carouselMulti"  data-interval="1000">
            <div class="carousel-multi-inner short-menu">
                <div class="item">
                    <div class="pad15">
                      <i class="icon-Group-272"></i>
                      <p>Alimentos & Bebidas</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                      <i class="icon-contrucao-decoracao"></i>
                      <p>Construção & Decoração</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                      <i class="icon-disk-delivery"></i>
                      <p>Disk Delivery</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                      <i class="icon-educacao-cultura"></i>
                      <p>Educação & Cultura</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                      <i class="icon-esporte-lazer"></i>
                      <p>Esporte & Lazer</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                      <i class="icon-eventos-festas"></i>
                      <p>Eventos & Festas</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                      <i class="icon-igrejas"></i>
                      <p>Igrejas</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                      <i class="icon-industria-ferragens"></i>
                      <p>Indústrias e Ferragens</p>
                    </div>
                </div>
								<div class="item">
                    <div class="pad15">
                      <i class="icon-informatica-escritorio"></i>
                      <p>Informática & Escritório</p>
                    </div>
                </div>
								<div class="item">
                    <div class="pad15">
                      <i class="icon-midia-publicidade"></i>
                      <p>Mídia & Publicidade</p>
                    </div>
                </div>
								<div class="item">
                    <div class="pad15">
                      <i class="icon-moda-estilo"></i>
                      <p>Moda & Estilo</p>
                    </div>
                </div>
								<div class="item">
                    <div class="pad15">
                      <i class="icon-moveis_eletro"></i>
                      <p>Móveis & Eletro</p>
                    </div>
                </div>
								<div class="item">
                    <div class="pad15">
                      <i class="icon-saude-bemestar"></i>
                      <p>Saúde & Bem Estar</p>
                    </div>
                </div>
								<div class="item">
                    <div class="pad15">
                      <i class="icon-servicos_profissionais"></i>
                      <p>Serviços & Profissionais</p>
                    </div>
                </div>
								<div class="item">
                    <div class="pad15">
                      <i class="icon-Address"></i>
                      <p>Turismo & Hotéis</p>
                    </div>
                </div>
								<div class="item">
                    <div class="pad15">
                      <i class="icon-variedades"></i>
                      <p>Variedades</p>
                    </div>
                </div>
								<div class="item">
                    <div class="pad15">
                      <i class="icon-veiculos"></i>
                      <p>Veículos</p>
                    </div>
                </div>
            </div>
            <button class="leftLst">
              <!-- <div class="left-arrow"></div> -->
							<i class="icon-Component-4--2" aria-hidden="true"></i>
            </button>
            <button class="rightLst">
              <!-- <div class="right-arrow"></div> -->
							<i class="icon-Component-4--1" aria-hidden="true"></i>
            </button>
        </div>
  	</div>
</template>
<style lang="scss" scoped>
	@import "../../styles/global/_colors.scss";
  .carousel-multi { float: left; overflow: hidden; margin: 15px; width: 100%; position:relative; left: 0; right: 0; top: 0; bottom: 0;}
  .carousel-multi .carousel-multi-inner { transition: 1s ease all; padding: 0 50px ;margin: 0 auto;}
  .carousel-multi .carousel-multi-inner .item { float: left;}
	.carousel-multi .carousel-multi-inner .item p { font-family: 'Roboto';}
  /* .carousel-multi .carousel-multi-inner .item > div { text-align: center; padding:10px; margin:10px; background:#f1f1f1; color:#666;} */
	.carousel-multi .carousel-multi-inner .item {
		cursor:pointer;
		&:hover {
			i:before {
				color: white;
			}
			&.a {
				fill: white;
			}
		}
		i {
			font-size: 3em;
		}
	}
  .carousel-multi .leftLst, .carousel-multi .rightLst {
    position:absolute;
    /* top:calc(50% - 20px); */
    height: 100%;
    width: 50px;
    background: white;
    border: 0;
    padding: 0;
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
  .carousel-multi .leftLst {
    left: 0;
    div {
      margin-left: 15px;
    }
  }
  .carousel-multi .rightLst {
    right: 0;
    div {
			float: right;
      margin-right: 15px;
    }
  }

  .carousel-multi .leftLst.over, .carousel-multi .rightLst.over { pointer-events: none;}

	@media screen and (min-width: 320px) and (max-width: 991px) {
		.carousel-multi .carousel-multi-inner .item {
			i {
				font-size: 1em;
			}
		}
		.carousel-multi .leftLst, .carousel-multi .rightLst {
			width: 20px;
			i {
				font-size: 1.3em;
				vertical-align: middle;
			}
		}
		.carousel-multi .rightLst {
			right: -5px;
		}
		.carousel-multi .leftLst {
			left: -5px;
		}
		.carousel-multi .carousel-multi-inner {
			padding: 0 20px;
		}
	}

	@media screen and (min-width: 1200px) and (max-width: 1750px) {

	}
</style>
<script type="text/javascript">
  export default {
    data() {
      return {

      }
    },
    mounted() {
      var itemsMainDiv = ('.carousel-multi');
      var itemsDiv = ('.carousel-multi-inner');
      var itemWidth = "";

      $('.leftLst, .rightLst').click(function () {
          var condition = $(this).hasClass("leftLst");
          if (condition)
              click(0, this);
          else
              click(1, this)
      });

      ResCarouselSize1();




      $(window).resize(function () {
          ResCarouselSize1();
      });

      //this function define the size of the items
      function ResCarouselSize1() {
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
              $(this).parent().attr("id", "carouselMulti" + id);


              if (bodyWidth >= 1200) {
                  // incno = itemsSplit[0];
                  // itemWidth = sampwidth / incno;
									itemWidth = 170;
              }
              else if (bodyWidth >= 992) {
                  // incno = itemsSplit[0];
                  // itemWidth = sampwidth / incno;
									itemWidth = 150;
              }
              else if (bodyWidth >= 768) {
                  // incno = itemsSplit[0];
                  // itemWidth = sampwidth / incno;
									itemWidth = 100;
              }
              else {
                  // incno = itemsSplit[10];
                  // itemWidth = sampwidth / incno;
									itemWidth = 100;
              }
              $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers});
              $(this).find(itemClass).each(function () {
                  $(this).outerWidth(itemWidth);
              });

              $(".leftLst").addClass("over");
              $(".rightLst").removeClass("over");

          });
      }


      //this function used to move the items
      function ResCarousel1(e, el, s) {
          var leftBtn = ('.leftLst');
          var rightBtn = ('.rightLst');
          var translateXval = '';
          var divStyle = $(el + ' ' + itemsDiv).css('transform');
          var values = divStyle.match(/-?[\d\.]+/g);
          var xds = Math.abs(values[4]);
          if (e == 0) {
              translateXval = parseInt(xds) - parseInt(itemWidth * s);
              $(el + ' ' + rightBtn).removeClass("over");

              if (translateXval <= itemWidth / 4) {
                  translateXval = 0;
                  $(el + ' ' + leftBtn).addClass("over");
              }
          }
          else if (e == 1) {
              var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
              translateXval = parseInt(xds) + parseInt(itemWidth * s);
              $(el + ' ' + leftBtn).removeClass("over");

              if (translateXval >= itemsCondition - itemWidth / 4) {
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
          ResCarousel1(ell, Parent, slide);
      }
    },

  }
</script>
