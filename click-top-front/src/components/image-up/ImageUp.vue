<template>
    <div style="margin-top:20px" class="">
        <!-- Imagem temporaria -->
        <div  class="box-img-temp" v-if="reRenderImage">
            <img id="img_temp" src="../../assets/img/perfilempresa.png" data-toggle="modal" data-target="#modal-perfil"/>
            <div class="button remove" @click="removeImage">
              X
            </div>
        </div>

         <!-- Modal -->
        <div class="modal fade" id="modal-perfil" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="modal-perfilLabel" aria-hidden="true" v-if="reRenderImage">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <button style="margin-bottom:20px;" type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button><br><br>
                        <div class="container-image-modal ">
                            <div>
                                <img  id="image" src="../../assets/img/perfilempresa.png">
                            </div>
                        </div>
                        <div class="tools-modal">
                            <label @click="fileOpen" style="cursor:pointer" class="label">SELECIONAR IMAGEM</label>
                            <div  data-dismiss="modal" class="label close" id="button">CONCLUIDO</div>
                        </div>
                        <input @change="getImage" id="file" style="display: none;" class="input-file " type="file"/>


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
         imagemFormatada:undefined,
         reRenderImage: true
      }
    },

    methods: {
      removeImage() {
        // this.imagemFormatada = undefined;
        // this.$emit('addProfile',{index:this.index, image:this.imagemFormatada});
        this.reRenderImage = false;
        this.$nextTick(() => {
          this.reRenderImage = true;
        });
      },
        imagemResponse(){
            alert(this.imagemFormatada);
        },

        fileOpen(){
        var inputFile = document.getElementById('file');
        console.log("teste");
        inputFile.click();
        },

        getImage(){
        let fileImage = $('#file')[0].files[0];
        let arquivos = fileImage // pega lista de arquivos selecionados
        console.log(arquivos);
        //validações name - size - type
        if(arquivos.size > 102400){ // validando tamanho do arquivo 100kb
            alert("Desculpe! este arquivo é maior do que o permetido !");
        }
        if(arquivos.type != 'image/jpeg' ){
            // alert(arquivos.type)
            alert("Desculpe! selecione uma imagem válida");
        }else{
            let vm = this;
            let image = document.getElementById('image');
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

                $('#button').on("click", function(){
                    var cortada = cropper.getCroppedCanvas().toDataURL('image/jpeg');
                    vm.imagemFormatada = cortada;
                    let x = document.getElementById('img_temp');
                    x.src = cortada;
                  $(function(){
                      // alert(this.imagemFormatada);
                      vm.$emit('addProfile',{index:vm.index, image:vm.imagemFormatada});
                  })

                })
            }
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

#image{

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
}
#img_temp{
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

@media screen and (min-width: 320px) and (max-width: 991px) {
  .box-img-temp {
    margin: 0 auto;
    display: block;
  }
  #img_temp {
    width: 300px;
    height: auto;
  }
}
</style>
