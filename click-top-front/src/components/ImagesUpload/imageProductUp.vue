<template>
<div style="margin-top:20px" class="">
  <div class="container-image-modal">
    <div>
      <img :id="`image-${this.index}`" src="../../assets/img/perfilempresa.png">
    </div>
  </div>
  <div class="tools-modal">
    <label @click="fileOpen" style="cursor:pointer" class="label">SELECIONAR IMAGEM</label>
    <button data-dismiss="modal" class="label close" id="button">CONCLUIDO</button>
  </div>
  <input @change="getImage" id="file" style="display: none;" class="input-file " type="file"/>
</div>
</template>
<script>
export default {
  props:['index', 'type'],
    data(){
      return{
        imagemFormatada:undefined,
      }
    },

    methods: {
        imagemResponse(){
            alert(this.imagemFormatada)
        },

        fileOpen(){
          var inputFile = document.getElementById('file')
          console.log("teste")
          inputFile.click();
        },

        getImage(){

          let arquivos = file.files // pega lista de arquivos selecionados
          console.log(arquivos);
          //validações name - size - type
          if(arquivos[0].size > 102400){ // validando tamanho do arquivo 100kb
              alert("Desculpe! este arquivo é maior do que o permetido !");
          }
          if(arquivos[0].type != 'image/jpeg' ){
              alert(arquivos[0].type)
              alert("Desculpe! selecione uma imagem válida");
          }else{
              let image = document.getElementById('image')
              let fileReader = new FileReader();
              fileReader.onload = ()=>{
                  let result = fileReader.result;
                  image.src = result;
                  var cropper = new Cropper(image,{
                      aspectRatio: 1,
                      background: false,
                      guides:false,
                      cropBoxResizable:true,
                      minContainerWidth:280,
                      minContainerHeight:280
                  })



                  $('#button').on("click", function(){
                      var cortada = cropper.getCroppedCanvas().toDataURL('image/jpeg');
                     console.log(cortada)
                      this.imagemFormatada = cortada;

                    $(function(){
                          alert(this.imagemFormatada);
                    })
                  })
              };
              fileReader.readAsDataURL(arquivos[0]);
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
}
#img_temp{
    width: 100%;
    height: 100%;
}

.container-image-modal{
    max-width: 280px;
    max-height: 280px;
    display: flex;
    justify-content: center;
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
