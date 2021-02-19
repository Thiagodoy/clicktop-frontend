<template>
  <div class="">
    <div class="search-box">
      <div class="container md">
        <div class="row align-items-center">
          <div class="col-2 margin-t10">
            <small class="text-center margin-b5 block">Aumente o alcance da busca</small>
            <div class="range">
              <input class="" type="range" name="quantity" min="1" max="5" steps="1" value="1">>
              <!-- <input type="range" min="1" max="7" steps="1" value="1"> -->
            </div>

            <ul class="range-labels">
              <li class="active selected">0km</li>
              <li>50km</li>
              <li>100km</li>
              <li>150km</li>
              <li>200km</li>
            </ul>
          </div>
          <div class="offset-1 col-6">
            <input class="form-control no-border" type="text" name="" value="" placeholder="O que você deseja encontrar?">
          </div>
          <div class="offset-1 col-2">
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
            <a class="btn btn--ios" href="#">
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

            <a class="btn btn--android" href="#">
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
          <div class="col-6">
            <input class="form-control" type="text" name="" value="" placeholder="Faça um busca rápida em nossa agenda telefônica">
          </div>
          <div class="offset-1 col-2">
            <div class="text-right">
              <!-- <a class="btn btn--ios" href="#">
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
                  <span class="btn__text">Baixar programa na</span>
                  <span class="btn__storename">Versão Desktop</span>
              </a> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
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
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <!-- <span class="sr-only">Previous</span> -->
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <!-- <span class="sr-only">Next</span> -->
      </a>
    </div>


    <div class="container lg margin-t15">
      <carousel-multi></carousel-multi>
      <!-- <ul class="short-menu">
        <li>
          <img src="../../assets/img/ico/XMLID_312_.svg" alt="">
          <p>Animais e plantas</p>
        </li>
        <li>
          <img src="../../assets/img/ico/artesanato.svg" alt="">
          <p>Artesanato</p>
        </li>
        <li>
          <img src="../../assets/img/ico/auto.svg" alt="">
          <p>Automóveis, Veículos e Serviços</p>
        </li>
        <li>
          <img src="../../assets/img/ico/bebidas_alimentos.svg" alt="">
          <p>Bebidas e Alimentos</p>
        </li>
        <li>
          <img src="../../assets/img/ico/bebidas_alimentos.svg" alt="">
          <p>Bebidas e Alimentos</p>
        </li>
        <li>
          <img src="../../assets/img/ico/casa_decoração.svg" alt="">
          <p>Casa e Decoração</p>
        </li>
        <li>
          <img src="../../assets/img/ico/Comunicacao_publicidade.svg" alt="">
          <p>Comunicação e Publicidade</p>
        </li>
        <li>
          <img src="../../assets/img/ico/construcao_reformas.svg" alt="">
          <p>Construção, Reforma e Serviços</p>
        </li>
      </ul> -->
    </div>

    <!-- <div class="container lg margin-t30">
      <div class="row partner-line">
        <div class="col-3">
          <img class="partner-item" src="../../assets/img/damadagua.png" alt="">
        </div>
        <div class="col-3">
          <img class="partner-item" src="../../assets/img/cafecia.png" alt="">
        </div>
        <div class="col-3">
          <img class="partner-item" src="../../assets/img/mendes.png" alt="">
        </div>
        <div class="col-3">
          <img class="partner-item" src="../../assets/img/bela.png" alt="">
        </div>
      </div>
    </div> -->

    <div class="container lg hr-lines">
      <hr><hr><hr><hr>
      <h1 class="text-center title margin-t30">Timeline Click Top</h1>
    </div>


    <section class="content-home">
      <div class="container lg">
        <div class="timeline-box">
          <!-- <div class="line justify-content-between"> -->
            <gallery class=""></gallery>
        </div>
      </div>
    </section>
          <!-- </div> -->
          <!-- <div class="line justify-content-between">
            <div class="inline">
              <img src="../../assets/img/img1.png" alt="">
            </div>
            <div class="inline">
              <img src="../../assets/img/img1.png" alt="">
            </div>
            <div class="inline">
              <img src="../../assets/img/img1.png" alt="">
            </div>
            <div class="inline">
              <img src="../../assets/img/img1.png" alt="">
            </div>
            <div class="inline">
              <img src="../../assets/img/img1.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container lg hr-lines">
      <hr><hr><hr><hr>
    </div>

    <!-- <div class="container lg">
      <div class="timeline-box">
        <gallery></gallery>

      </div>

    </div> -->

    <div class="container lg">
      <h1>Empresas em destaque</h1>
      <div class="company-box">
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
      <h1>Últimas empresas cadastradas</h1>
      <div class="company-box">
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
      <h1>Conheça a cidade de <b>Passos de Minas/MG</b></h1>
      <carousel-big></carousel-big>
    </div>

  </div>
</template>
<script>
import CarouselMulti from '../../components/carousel-multi/carousel-multi.vue';
import CarouselBig from '../../components/carousel-multi/carousel-big.vue';
import Gallery from '../../components/gallery/gallery.vue';
export default {
  data() {
    return {

    }
  },
  mounted() {
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
