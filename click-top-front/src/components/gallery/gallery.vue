<template>
  <div class="">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '19%', height: '200px' }"
    ></div>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery';

  export default {
    data: function () {
      return {
        images: [
          'https://public-v2links.adobecc.com/fbbac65c-d7ce-4440-7cdc-3047d0a7013c/component?params=component_id:c3beb0ee-cb06-4486-b2fc-e82240c4480e&params=version:0&token=1575513542_da39a3ee_213d0880f714f652e1d2282ebd2aeb0bb94a2b6a&api_key=CometServer1',
          'https://public-v2links.adobecc.com/fbbac65c-d7ce-4440-7cdc-3047d0a7013c/component?params=component_id:c3beb0ee-cb06-4486-b2fc-e82240c4480e&params=version:0&token=1575513542_da39a3ee_213d0880f714f652e1d2282ebd2aeb0bb94a2b6a&api_key=CometServer1',
          'https://public-v2links.adobecc.com/fbbac65c-d7ce-4440-7cdc-3047d0a7013c/component?params=component_id:c3beb0ee-cb06-4486-b2fc-e82240c4480e&params=version:0&token=1575513542_da39a3ee_213d0880f714f652e1d2282ebd2aeb0bb94a2b6a&api_key=CometServer1',
          'https://public-v2links.adobecc.com/fbbac65c-d7ce-4440-7cdc-3047d0a7013c/component?params=component_id:c3beb0ee-cb06-4486-b2fc-e82240c4480e&params=version:0&token=1575513542_da39a3ee_213d0880f714f652e1d2282ebd2aeb0bb94a2b6a&api_key=CometServer1',
          'https://public-v2links.adobecc.com/fbbac65c-d7ce-4440-7cdc-3047d0a7013c/component?params=component_id:c3beb0ee-cb06-4486-b2fc-e82240c4480e&params=version:0&token=1575513542_da39a3ee_213d0880f714f652e1d2282ebd2aeb0bb94a2b6a&api_key=CometServer1',
          'https://public-v2links.adobecc.com/fbbac65c-d7ce-4440-7cdc-3047d0a7013c/component?params=component_id:c3beb0ee-cb06-4486-b2fc-e82240c4480e&params=version:0&token=1575513542_da39a3ee_213d0880f714f652e1d2282ebd2aeb0bb94a2b6a&api_key=CometServer1',
          'https://public-v2links.adobecc.com/fbbac65c-d7ce-4440-7cdc-3047d0a7013c/component?params=component_id:c3beb0ee-cb06-4486-b2fc-e82240c4480e&params=version:0&token=1575513542_da39a3ee_213d0880f714f652e1d2282ebd2aeb0bb94a2b6a&api_key=CometServer1',
          'https://public-v2links.adobecc.com/fbbac65c-d7ce-4440-7cdc-3047d0a7013c/component?params=component_id:c3beb0ee-cb06-4486-b2fc-e82240c4480e&params=version:0&token=1575513542_da39a3ee_213d0880f714f652e1d2282ebd2aeb0bb94a2b6a&api_key=CometServer1',
          'https://public-v2links.adobecc.com/fbbac65c-d7ce-4440-7cdc-3047d0a7013c/component?params=component_id:c3beb0ee-cb06-4486-b2fc-e82240c4480e&params=version:0&token=1575513542_da39a3ee_213d0880f714f652e1d2282ebd2aeb0bb94a2b6a&api_key=CometServer1',
          'https://public-v2links.adobecc.com/fbbac65c-d7ce-4440-7cdc-3047d0a7013c/component?params=component_id:c3beb0ee-cb06-4486-b2fc-e82240c4480e&params=version:0&token=1575513542_da39a3ee_213d0880f714f652e1d2282ebd2aeb0bb94a2b6a&api_key=CometServer1',
          'https://public-v2links.adobecc.com/fbbac65c-d7ce-4440-7cdc-3047d0a7013c/component?params=component_id:c3beb0ee-cb06-4486-b2fc-e82240c4480e&params=version:0&token=1575513542_da39a3ee_213d0880f714f652e1d2282ebd2aeb0bb94a2b6a&api_key=CometServer1',
          'https://public-v2links.adobecc.com/fbbac65c-d7ce-4440-7cdc-3047d0a7013c/component?params=component_id:c3beb0ee-cb06-4486-b2fc-e82240c4480e&params=version:0&token=1575513542_da39a3ee_213d0880f714f652e1d2282ebd2aeb0bb94a2b6a&api_key=CometServer1',
          'https://public-v2links.adobecc.com/fbbac65c-d7ce-4440-7cdc-3047d0a7013c/component?params=component_id:c3beb0ee-cb06-4486-b2fc-e82240c4480e&params=version:0&token=1575513542_da39a3ee_213d0880f714f652e1d2282ebd2aeb0bb94a2b6a&api_key=CometServer1',
          'https://public-v2links.adobecc.com/fbbac65c-d7ce-4440-7cdc-3047d0a7013c/component?params=component_id:c3beb0ee-cb06-4486-b2fc-e82240c4480e&params=version:0&token=1575513542_da39a3ee_213d0880f714f652e1d2282ebd2aeb0bb94a2b6a&api_key=CometServer1',
          'https://public-v2links.adobecc.com/fbbac65c-d7ce-4440-7cdc-3047d0a7013c/component?params=component_id:c3beb0ee-cb06-4486-b2fc-e82240c4480e&params=version:0&token=1575513542_da39a3ee_213d0880f714f652e1d2282ebd2aeb0bb94a2b6a&api_key=CometServer1',
          // 'https://dummyimage.com/800/ffffff/000000',
          // 'https://dummyimage.com/1600/ffffff/000000',
          // 'https://dummyimage.com/1280/000000/ffffff',
          // 'https://dummyimage.com/400/000000/ffffff',
        ],
        index: null
      };
    },

    components: {
      'gallery': VueGallery
    },
  }
</script>

<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
    /* width: 200px; */
    /* height: 200px; */
  }
</style>
