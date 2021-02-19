<template>
    <div class="margin-t20">
        <!-- Imagem temporaria -->
        <div class="box-img-temp" v-if="reRenderCover">
          <img id="img_temp_cover" src="../../assets/img/capaempresa.png" data-toggle="modal" data-target="#modal-cover"/>
          <div class="button remove" @click="removeImageCover">
            X
          </div>
        </div>

         <!-- Modal -->
        <div class="modal fade" id="modal-cover" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="modal-cover" aria-hidden="true" v-if="reRenderCover">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <button style="margin-bottom:20px;" type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button><br><br>
                        <div class="container-image-modal ">
                            <div>
                                <img id="image-cover" src="../../assets/img/capaempresa.png">
                            </div>
                        </div>
                        <div class="tools-modal">
                            <label @click="fileOpenCover" style="cursor:pointer" class="label">SELECIONAR IMAGEM</label>
                            <button  data-dismiss="modal" class="label close" id="button-cover">CONCLUÍDO</button>
                        </div>
                        <input @change="getImageCover" id="file-cover" style="display: none;" class="input-file " type="file"/>


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

               imagemFormatadaCover:undefined,
               reRenderCover: true
            }
    },

    methods: {
        removeImageCover() {
          this.imagemFormatadaCover = undefined;
          this.$emit('addCapa', this.imagemFormatadaCover);
          this.reRenderCover = false;
          this.$nextTick(() => {
            this.reRenderCover = true;
          });
        },
        imagemResponse(){
            alert(this.imagemFormatadaCover)
        },

        fileOpenCover(){
        var inputFile = document.getElementById('file-cover')
        console.log("teste")
        inputFile.click();
        },

        getImageCover(){
        let files = $('#file-cover')[0].files[0];
        // console.log(files);
        let arquivos = files; // pega lista de arquivos selecionados
        //validações name - size - type
        if(arquivos.size > 102400){ // validando tamanho do arquivo 100kb
            alert("Desculpe! este arquivo é maior do que o permetido !");
        }
        if(arquivos.type != 'image/jpeg' ){
            // alert(arquivos.type)
            alert("Desculpe! selecione uma imagem válida");
        }else{
            let vm = this;
            let image = document.getElementById('image-cover');
            console.log(image);
            let fileReader = new FileReader();
            fileReader.onload = ()=>{
                let result = fileReader.result;
                image.src = result;
                var cropperCover = new Cropper(image,{
                    aspectRatio: 16/9,
                    background: false,
                    guides:false,
                    cropBoxResizable:true,
                })
                $('#button-cover').on("click", function(){
                    var cortada = cropperCover.getCroppedCanvas().toDataURL('image/jpeg');
                    vm.imagemFormatadaCover = cortada;
                    let x = document.getElementById('img_temp_cover');
                    x.src = cortada;
                    cropperCover.destroy();
                  $(function(){
                  //       alert(this.imagemFormatadaCover);
                    vm.$emit('addCapa', vm.imagemFormatadaCover);
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
    /* width: 300px;
    height: 300px; */
    width: 800px;
    height: 300px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
#img_temp_cover{
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

#image-cover {
  width: 100%;
  height: auto;
}

@media screen and (min-width: 320px) and (max-width: 991px) {
  .box-img-temp {
    width: 95%;
    height: auto;
    margin: 0 auto;
    display: block;
  }
}
</style>
