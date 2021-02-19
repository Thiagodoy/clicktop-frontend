<!-- <template>
  <div class="">
    <div class=" short-menu" id="multi-menu">
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
    <div>
      <button onclick="carousel.previous()">Previous</button>
      <button onclick="carousel.next()">Next</button>
    </div>
  </div>
</template>
<script type="text/javascript">
import MultiCarousel from 'multicarousel'

  export default {
    data() {
      return {

      }
    },
    mounted() {
      const container = document.getElementById('multi-menu');

      const carousel = new MultiCarousel({
        target: container,
        props: {
          items: [...container.children],          // The rest of these are optional. Here are the defaults.
          delay: 1500, // Delay between slides.
          transition: 600, // Duration of slide transition.// count: 3, // How many items to show at once.
          controls: [ // Which controls are visible.
            'previous',
            'next'
          ]
        }
      });
    },

  }
</script> -->
