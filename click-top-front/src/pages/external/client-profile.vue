<template>
  <div class="">
    <div class="search-box">
      <div class="container md">
        <div class="row align-items-center">
          <div class="col-2 col-sm-3 col-xl-2 margin-t10 desk">
            <small class="text-center margin-b5 block">Aumente o alcance da busca</small>
            <div class="range">
              <input class="" type="range" name="quantity" min="1" max="5" steps="1" value="1">>
              <!-- <input type="range" min="1" max="7" steps="1" value="1"> -->
            </div>

            <ul class="range-labels">
              <li class="active selected">10km</li>
              <li>50km</li>
              <li>100km</li>
              <li>150km</li>
              <li>200km</li>
            </ul>
          </div>
          <div class="offset-xl-1 col-6">
            <input class="form-control no-border" type="text" name="" value="" placeholder="O que você deseja encontrar?">
          </div>
          <div class="offset-xl-1 col-2 col-sm-3 col-xl-2 desk">
            <div class="">
              <small class="no-margin">Digite seu estado ou cidade:</small>
              <input class="form-control no-border" type="text" name="" value="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fast-search-box">
      <div class="container md">
        <div class="row align-items-center">
          <div class="col-3">
            <div class="inline">
              <a class="btn-store btn--ios" href="#">
                <svg class="btn__icon btn__icon--apple" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 20 20">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5640259,13.8623047
                  c-0.4133301,0.9155273-0.6115723,1.3251343-1.1437988,2.1346436c-0.7424927,1.1303711-1.7894897,2.5380249-3.086853,2.5500488
                  c-1.1524048,0.0109253-1.4483032-0.749939-3.0129395-0.741333c-1.5640259,0.008606-1.8909302,0.755127-3.0438843,0.7442017
                  c-1.296814-0.0120239-2.2891235-1.2833252-3.0321655-2.4136963c-2.0770874-3.1607666-2.2941895-6.8709106-1.0131836-8.8428955
                  c0.9106445-1.4013062,2.3466187-2.2217407,3.6970215-2.2217407c1.375,0,2.239502,0.7539673,3.3761597,0.7539673
                  c1.1028442,0,1.7749023-0.755127,3.3641357-0.755127c1.201416,0,2.4744263,0.6542969,3.3816528,1.7846069
                  C14.0778809,8.4837646,14.5608521,12.7279663,17.5640259,13.8623047z M12.4625244,3.8076782
                  c0.5775146-0.741333,1.0163574-1.7880859,0.8571167-2.857666c-0.9436035,0.0653076-2.0470581,0.6651611-2.6912842,1.4477539	C10.0437012,3.107605,9.56073,4.1605835,9.7486572,5.1849365C10.7787476,5.2164917,11.8443604,4.6011963,12.4625244,3.8076782z"/>
                </svg>
                <span class="btn__text">Baixar o aplicativo na</span>
                <span class="btn__storename">App Store</span>
              </a>
            </div>
            <div class="inline">
              <a class="btn-store btn--android" href="#">
                <svg class="btn__icon btn__icon--google" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 20 20">
                <path d="M4.942627,18.0508423l7.6660156-4.3273926l-1.6452026-1.8234253L4.942627,18.0508423z M2.1422119,2.1231079
                  C2.0543823,2.281311,2,2.4631958,2,2.664917v15.1259766c0,0.2799683,0.1046143,0.5202026,0.2631226,0.710144l7.6265259-7.7912598
                  L2.1422119,2.1231079z M17.4795532,9.4819336l-2.6724854-1.508606l-2.72229,2.7811279l1.9516602,2.1630249l3.4431152-1.9436035
                  C17.7927856,10.8155518,17.9656372,10.5287476,18,10.2279053C17.9656372,9.927063,17.7927856,9.6402588,17.4795532,9.4819336z
                  M13.3649292,7.1592407L4.1452026,1.954834l6.8656616,7.609314L13.3649292,7.1592407z"/>
                </svg>
                <span class="btn__text">Baixar aplicativo no</span>
                <span class="btn__storename">Google Play</span>
              </a>
            </div>
          </div>
          <div class="col-6">
            <input class="form-control" type="text" name="" value="" placeholder="Faça um busca rápida em nossa agenda telefônica">
          </div>
          <div class="offset-md-1 col-2">
            <div class="text-right">
              <a class="btn-store btn--ios" href="#">
                  <img src="../../assets/img/ico/laptop.svg" alt="" style="width: 25px; margin-top: 4px;">
                  <span class="btn__text">Baixar programa na</span>
                  <span class="btn__storename">Versão Desktop</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner desk">
        <div class="carousel-item active">
          <img src="../../assets/img/carousel1.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../../assets/img/carousel1.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../../assets/img/carousel1.png" class="d-block w-100" alt="...">
        </div>
      </div>

      <div class="carousel-inner resp">
        <div class="carousel-item active">
          <div class="d-block w-100 c-item1"></div>
        </div>
        <div class="carousel-item">
          <div class="d-block w-100 c-item2"></div>
        </div>
        <div class="carousel-item">
          <div class="d-block w-100 c-item3"></div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <i class="icon-Component-4--2" aria-hidden="true"></i>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <i class="icon-Component-4--1" aria-hidden="true"></i>
      </a>
    </div> -->


    <div class="container lg margin-t15">
      <carousel-multi></carousel-multi>
    </div>

    <div class="container lg hr-lines">
      <hr><hr><hr><hr>
    </div>


    <section class="content-home">
      <div class="container lg">
        <div class="row header-company-img">
          <div class="col-3">
            <img src="../../assets/img/hamburgueria_logo.png" alt="">
          </div>
          <div class="col-9">
            <img src="../../assets/img/918ecef5d6f22887fb6b0e61b4e51573@2x.png" alt="">
            <img class="small-profile" src="../../assets/img/hamburgueria_logo.png" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <div class="profile-info">
              <p class="margin-b40">
                Temos 25 anos de experiência e somos uma das maiores hamburguerias da cidade.
                Encontre aqui os melhores hambúrgueres artesanais, batatas rústicas e aquele chopp sempre geladinho.
              </p>
              <p class="margin-b10">
                Horário de Funcionamento<br>
                Ter. a Dom. das 12 às 23h
              </p>
              <div class="contact-box">
                <a class="email margin-b30" href="#">contato@burgerprime.com.br</a>
                <p>Tel: (31) 3208-7153</p>
                <p>Tel: (31) 3208-7154</p>
              </div>

              <div class="text-center margin-b30 whats-box">
                <img class="inline" src="../../assets/img/whats.png" alt="" width="50px">
                <p class="inline no-margin">
                  Tel: (31) 3208-7153
                </p>
              </div>

              <div class="text-center margin-b30 social-box">
                <a href="#">
                  <img src="../../assets/img/face.png" alt="" width="50px">
                </a>
                <a href="#">
                  <img src="../../assets/img/insta.png" alt="" width="50px">
                </a>

                <a href="#" class="contact-email" data-toggle="modal" data-target="#modalContact">
                  <img src="../../assets/img/ico/email.svg" alt="" width="50px">
                </a>

                <a href="#" class="contact-whats">
                  <img class="inline" src="../../assets/img/whats.png" alt="" width="50px">
                </a>
              </div>

              <p class="map-info">
                Como chegar:
                <br>
                Rua Frederico Masieiro, nº 595
                Centro - Passos de Minas/MG
              </p>

              <div class="map-box">
                <img src="../../assets/img/google-transit-farol-blumenau-blumob1.png" alt="">
              </div>
            </div>
          </div>
          <div class="col-9 text-center">
            <gallery></gallery>
          </div>
        </div>
      </div>
    </section>

    <div class="container lg hr-lines">
      <hr><hr><hr><hr>
    </div>

    <div class="container lg">
      <h1 class="title2">
        <i class="icon-Component-6--2"></i>
        Empresas em destaque
      </h1>
      <div class="company-box -sm">
        <div class="inline">
          <img src="../../assets/img/5-single.png" alt="">
        </div>
        <div class="inline">
          <img src="../../assets/img/fullsize_2011_09_26_14_WDL-Logo-7184_6769_041335667_259168100.png" alt="">
        </div>
        <div class="inline">
          <img src="../../assets/img/fullsize_2011_03_05_21_WDL-Logo-2192_724_033740449_868969945.png" alt="">
        </div>
        <div class="inline">
          <img src="../../assets/img/fullsize_2011_08_25_10_WDL-Logo-6639_6769_041035737_930246410.png" alt="">
        </div>
        <div class="inline">
          <img src="../../assets/img/05120f91bb9aca931161bb47c2876348.png" alt="">
        </div>
        <div class="inline">
          <img src="../../assets/img/5-single.png" alt="">
        </div>
        <div class="inline">
          <img src="../../assets/img/fullsize_2011_09_26_14_WDL-Logo-7184_6769_041335667_259168100.png" alt="">
        </div>
        <div class="inline">
          <img src="../../assets/img/fullsize_2011_03_05_21_WDL-Logo-2192_724_033740449_868969945.png" alt="">
        </div>
        <div class="inline">
          <img src="../../assets/img/fullsize_2011_08_25_10_WDL-Logo-6639_6769_041035737_930246410.png" alt="">
        </div>
        <div class="inline">
          <img src="../../assets/img/05120f91bb9aca931161bb47c2876348.png" alt="">
        </div>
        <div class="inline">
          <img src="../../assets/img/5-single.png" alt="">
        </div>
        <div class="inline">
          <img src="../../assets/img/fullsize_2011_09_26_14_WDL-Logo-7184_6769_041335667_259168100.png" alt="">
        </div>
        <div class="inline">
          <img src="../../assets/img/fullsize_2011_03_05_21_WDL-Logo-2192_724_033740449_868969945.png" alt="">
        </div>
        <div class="inline">
          <img src="../../assets/img/fullsize_2011_08_25_10_WDL-Logo-6639_6769_041035737_930246410.png" alt="">
        </div>
        <div class="inline">
          <img src="../../assets/img/05120f91bb9aca931161bb47c2876348.png" alt="">
        </div>
      </div>

      <div class="company-box -lg">
        <div class="line justify-content-between">
          <div class="inline">
            <img src="../../assets/img/5-single.png" alt="">
          </div>
          <div class="inline">
            <img src="../../assets/img/fullsize_2011_09_26_14_WDL-Logo-7184_6769_041335667_259168100.png" alt="">
          </div>
          <div class="inline">
            <img src="../../assets/img/fullsize_2011_03_05_21_WDL-Logo-2192_724_033740449_868969945.png" alt="">
          </div>
          <div class="inline">
            <img src="../../assets/img/fullsize_2011_08_25_10_WDL-Logo-6639_6769_041035737_930246410.png" alt="">
          </div>
          <div class="inline">
            <img src="../../assets/img/05120f91bb9aca931161bb47c2876348.png" alt="">
          </div>
        </div>

        <div class="line justify-content-between">
          <div class="inline">
            <img src="../../assets/img/5-single.png" alt="">
          </div>
          <div class="inline">
            <img src="../../assets/img/fullsize_2011_09_26_14_WDL-Logo-7184_6769_041335667_259168100.png" alt="">
          </div>
          <div class="inline">
            <img src="../../assets/img/fullsize_2011_03_05_21_WDL-Logo-2192_724_033740449_868969945.png" alt="">
          </div>
          <div class="inline">
            <img src="../../assets/img/fullsize_2011_08_25_10_WDL-Logo-6639_6769_041035737_930246410.png" alt="">
          </div>
          <div class="inline">
            <img src="../../assets/img/05120f91bb9aca931161bb47c2876348.png" alt="">
          </div>
        </div>

        <div class="line justify-content-between">
          <div class="inline">
            <img src="../../assets/img/5-single.png" alt="">
          </div>
          <div class="inline">
            <img src="../../assets/img/fullsize_2011_09_26_14_WDL-Logo-7184_6769_041335667_259168100.png" alt="">
          </div>
          <div class="inline">
            <img src="../../assets/img/fullsize_2011_03_05_21_WDL-Logo-2192_724_033740449_868969945.png" alt="">
          </div>
          <div class="inline">
            <img src="../../assets/img/fullsize_2011_08_25_10_WDL-Logo-6639_6769_041035737_930246410.png" alt="">
          </div>
          <div class="inline">
            <img src="../../assets/img/05120f91bb9aca931161bb47c2876348.png" alt="">
          </div>
        </div>

      </div>
    </div>

    <div class="container lg hr-lines">
      <hr><hr><hr><hr>
    </div>

    <div class="container lg">
      <h1 class="title2">
        <i class="icon-Component-6--2"></i>
        Últimas empresas cadastradas
      </h1>
      <div class="company-box -sm">
        <div class="inline">
          <img src="../../assets/img/5-single.png" alt="">
        </div>
        <div class="inline">
          <img src="../../assets/img/fullsize_2011_09_26_14_WDL-Logo-7184_6769_041335667_259168100.png" alt="">
        </div>
        <div class="inline">
          <img src="../../assets/img/fullsize_2011_03_05_21_WDL-Logo-2192_724_033740449_868969945.png" alt="">
        </div>
        <div class="inline">
          <img src="../../assets/img/fullsize_2011_08_25_10_WDL-Logo-6639_6769_041035737_930246410.png" alt="">
        </div>
        <div class="inline">
          <img src="../../assets/img/05120f91bb9aca931161bb47c2876348.png" alt="">
        </div>
        <div class="inline">
          <img src="../../assets/img/05120f91bb9aca931161bb47c2876348.png" alt="">
        </div>
      </div>

      <div class="company-box -lg">
        <div class="line justify-content-between">
          <div class="inline">
            <img src="../../assets/img/5-single.png" alt="">
          </div>
          <div class="inline">
            <img src="../../assets/img/fullsize_2011_09_26_14_WDL-Logo-7184_6769_041335667_259168100.png" alt="">
          </div>
          <div class="inline">
            <img src="../../assets/img/fullsize_2011_03_05_21_WDL-Logo-2192_724_033740449_868969945.png" alt="">
          </div>
          <div class="inline">
            <img src="../../assets/img/fullsize_2011_08_25_10_WDL-Logo-6639_6769_041035737_930246410.png" alt="">
          </div>
          <div class="inline">
            <img src="../../assets/img/05120f91bb9aca931161bb47c2876348.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="container lg hr-lines">
      <hr><hr><hr><hr>
    </div>

    <div class="container lg">
      <h1 class="title2">
        <i class="icon-Component-6--2"></i>
        Conheça a cidade de <b>Passos de Minas/MG</b>
      </h1>
      <div class="row">
        <div class="col-12">
          <div class="text-center short-menu info-city">
            <div class="item">
                <div class="pad15">
                  <i class="icon-Group-272"></i>
                  <p>Hotéis e Pousadas</p>
                </div>
            </div>
            <div class="item">
                <div class="pad15">
                  <i class="icon-contrucao-decoracao"></i>
                  <p>Roteiros e aventura</p>
                </div>
            </div>
            <div class="item">
                <div class="pad15">
                  <i class="icon-disk-delivery"></i>
                  <p>Histórico e Cultural</p>
                </div>
            </div>
            <div class="item">
                <div class="pad15">
                  <i class="icon-educacao-cultura"></i>
                  <p>Restaurantes e lanchonetes</p>
                </div>
            </div>
            <div class="item">
                <div class="pad15">
                  <i class="icon-esporte-lazer"></i>
                  <p>Camping</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <carousel-big></carousel-big>
    </div>



    <!-- modal contato direto -->
    <div class="modal modal-contact" tabindex="-1" role="dialog" id="modalContact">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <p>
              Fale com a gente!
            </p>
            <img class="img-contact" src="../../assets/img/ico/email.svg" alt="" width="50px">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="">Digite seu nome</label>
                  <input class="form-control" type="text" name="" value="">
                </div>
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label for="">Telefone para contato (Opcional)</label>
                      <input class="form-control" type="text" name="" value="">
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="">Digite seu endereço de e-mail</label>
                      <input class="form-control" type="email" name="" value="">
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="">Digite sua mensagem</label>
                  <textarea class="form-control" name="name" rows="6"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-null" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">Enviar</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style lang="scss" scoped>
@import "../../styles/global/_colors.scss";
@import "../../styles/global/mixin/_mixins.scss";

.nav.down {
  margin-bottom: 5%;
  .nav-item {
    a {
      font-size: 32px;
      font-family: 'Mosk-Bold-700';
      font-weight: bold;
      color: $grey;
      padding: 0;
      padding-bottom: 10px;
      /* padding: 0 20px; */
      &:focus,
      &:hover,
      &:active,
      &.active {
        color: $dark-blue;
        &:after {
          content: "";
          float: left;
          background: $dark-blue;
          width: 100%;
          height: 6px;
          border-radius: 3px;
          margin-top: 5px;
        }
        /* border-bottom: 8px solid $dark-blue; */
      }
    }
    &:first-child a {
      padding-left: 0;
    }
    &:last-child a {
      padding-right: 0;
    }
  }
}

/* @media screen and (min-width: 320px) and (max-width: 660px) {
  .nav.down {
    li {
      width: 100%;
      display: block;
      text-align: center;
      a {
        font-size: 20px !important;
        &:focus,
        &:hover,
        &:active,
        &.active {
          &:after {
            content: unset !important;
          }
        }
      }
    }
  }
} */
@media screen and (min-width: 320px) and (max-width: 991px) {
  .nav.down {
    li {
      /* width: 100%; */
      /* display: block; */
      /* text-align: center; */
      a {
        font-size: 11px !important;
        &:focus,
        &:hover,
        &:active,
        &.active {
          &:after {
            content: unset !important;
          }
        }
      }
    }
  }
}


@media screen and (min-width: 1200px) and (max-width: 1750px) {
  .nav.down {
    width: 89%;
    margin: 0 auto 5%;
    .nav-item {
      a {
        font-size: 20px;
      }
      &:first-child {
        margin-left: 5px;
      }
    }
  }
}

@media (min-width: 1750px) {
  .nav.down {
    width: 91%;
    margin: 0 auto 5%;
    .nav-item {
      &:first-child {
        margin-left: 5px;
      }
    }
  }
}
</style>
<script>
import CarouselMulti from '../../components/carousel-multi/carousel-multi.vue';
import CarouselBig from '../../components/carousel-multi/carousel-big.vue';
import Gallery from '../../components/gallery/gallery-four.vue';
export default {
  data() {
    return {

    }
  },
  mounted() {
    // $('#modalContact').modal();

    var sheet = document.createElement('style'),
      $rangeInput = $('.range input'),
      prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

    document.body.appendChild(sheet);

    var getTrackStyle = function (el) {
      var curVal = el.value,
          val = (curVal - 1) * 25,
          // val = (curVal - 1) * 16.666666667,
          style = '';

      // Set active label
      $('.range-labels li').removeClass('active selected');

      var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');

      curLabel.addClass('active selected');
      curLabel.prevAll().addClass('selected');

      // Change background gradient
      for (var i = 0; i < prefs.length; i++) {
        style += '.range {background: linear-gradient(to right, #467BBA 0%, #467BBA ' + val + '%, #fff ' + val + '%, #fff 100%)}';
        style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #467BBA 0%, #467BBA ' + val + '%, #809db7 ' + val + '%, #809db7 100%)}';
      }

      return style;
    }

    $rangeInput.on('input', function () {
      sheet.textContent = getTrackStyle(this);
    });

    // Change input value on label click
    $('.range-labels li').on('click', function () {
      var index = $(this).index();

      $rangeInput.val(index + 1).trigger('input');

    });
  },
  components: {
      'carousel-multi':CarouselMulti,
      'carousel-big':CarouselBig,
      'gallery': Gallery
  },

}
</script>
