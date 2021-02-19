<template>
    <div class="margin-b20">
        <!-- Imagem temporaria -->
        <div class="box-img-temp" v-if="reRenderProduct">
          <a data-toggle="modal" :href="`#staticBackdrop${this.index}`">
            <img :id="`img_temp_${this.index}`" class="img_temp_product img-temp-product" src="../../assets/img/produtoempresa.png"/>
          </a>
          <div class="button remove" @click="removeImageProduct(index)">
            X
          </div>
        </div>

         <!-- Modal -->
        <div class="modal fade staticBackdrop" :id="`staticBackdrop${this.index}`" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <button style="margin-bottom:20px;" type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button><br><br>
                        <div class="container-image-modal ">
                            <div>
                                <img class="image-product" :id="`image-${this.index}`" src="../../assets/img/produtoempresa.png">
                            </div>
                        </div>
                        <div class="tools-modal">
                          <!-- @click="fileOpenProduct(this)" -->
                            <label v-on:click="fileOpenProduct(index)" style="cursor:pointer" class="label">SELECIONAR IMAGEM</label>
                            <div  data-dismiss="modal" class="label close btn-input">CONCLUÍDO</div>
                             <!-- :id="`button-product-$(this.index)`" -->
                        </div>
                        <input @change="getImageProduct(index)" :id="`file-product-${this.index}`" style="display: none;" class="input-file input-product" type="file"/>


                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
export default {
  props:['index', 'type'],
    data(){
        return{
           imagemFormatadaProduct:undefined,
           reRenderProduct: true
        }
    },

    methods: {
      removeImageProduct(id) {
        this.imagemFormatadaProduct = undefined;
        this.$emit('addProduct',{index:this.index, image:this.imagemFormatadaProduct});
        this.reRenderProduct = false;

        this.$nextTick(() => {
          this.reRenderProduct = true;
          this.$destroy();
        });
      },
        imagemResponse(){
            alert(this.imagemFormatadaProduct)
        },

        fileOpenProduct(id){
        //   let mdl = $('.staticBackdrop').attr('id');
          console.log(id, ' file-product-'+id);
          // let fileProductId = $('.input-product').attr('id');
          // console.log(fileProductId);
          var inputFile = document.getElementById('file-product-' + id);
          inputFile.click();
        },

        getImageProduct(id){
          var nameId = 'file-product-' + id;
          // var fileProductId = $('#'+nameId);
          // let fileProductId = $('#input-product-' + id);
          // let fileProductId = $('.input-product').attr('id');
          console.log(nameId);
        // let fileProduct = $(fileProductId)[0].files[0];
        // let n = $('.img_temp_product').attr('id').replace('img_temp_', '');
        let fileProduct = $('#'+nameId)[0].files[0];
        let arquivos = fileProduct; // pega lista de arquivos selecionados
        //validações name - size - type
        if(arquivos.size > 102400){ // validando tamanho do arquivo 100kb
            alert("Desculpe! este arquivo é maior do que o permetido !");
        }
        if(arquivos.type != 'image/jpeg' ){
            alert("Desculpe! selecione uma imagem válida");
        }else{
            let vm = this;
            // let imageId = $('.image-product').attr('id');
            let imageId = 'image-' + id;
            let image = document.getElementById(imageId);
            // let image = document.querySelector('.image-product').id;
            let fileReader = new FileReader();
            fileReader.onload = ()=>{
                let result = fileReader.result;
                image.src = result;
                var cropper = new Cropper(image,{
                    aspectRatio: 1,
                    background: false,
                    guides:false,
                    cropBoxResizable:true,
                })

                $('.btn-input').on("click", function(){
                    var cortada = cropper.getCroppedCanvas().toDataURL('image/jpeg');
                    vm.imagemFormatadaProduct = cortada;
                    // let xId = $('.img_temp_product').attr('id');
                    let xId = 'img_temp_' + id;
                    let x = document.getElementById(xId);
                    // console.log('x ', x, ' xId ', xId);
                    x.src = cortada;

                  $(function(){
                  //       alert(this.imagemFormatadaProduct);
                    vm.$emit('addProduct',{index:vm.index, image:vm.imagemFormatadaProduct});
                  })
                })
            };
            fileReader.readAsDataURL(arquivos);
        }
        },
        formatFileSize(size)
        {
            var sizes = [' Bytes', ' KB', ' MB', ' GB', ' TB', ' PB', ' EB', ' ZB', ' YB'];
            for (var i = 1; i < sizes.length; i++)
            {
                if (size < Math.pow(1024, i)) return (Math.round((size/Math.pow(1024, i-1))*100)/100) + sizes[i-1];
            }
            return size;
        }
    },

}
</script>

<style lang="scss" scoped>
  @import "../../styles/global/mixin/_mixins.scss";
  .button {
    &.remove {
      @include border-radius(50%);
      position: absolute;
      right: -10px;
      top: -10px;
      background: red;
      width: 24px;
      text-align: center;
      color: white;
      font-size: 0.8em;
      height: 24px;
      font-weight: bold;
      padding-top: 2px;
    }
  }
.image-product{

  display: block;
  max-width: 100%;

}

.temp_clear{
    position: relative;
    top:-120px;
    right: 30px;
    background: #F00;
    color:#fff;
    border-radius: 30px;
    padding: 10px;
}

.box-img-temp{
    width: 300px;
    height: 300px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    a {
      width: 100%;
    }
}
.img_temp_product {
    width: 100%;
    height: 100%;
}

.container-image-modal{

    display: flex;
    justify-content: center
}
.tools-modal{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    padding: 15px;
    margin-top: 10px;
    cursor: pointer
}
.label{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    color:#003F73;
}
</style>
