<template>
  <div class="row fancy-clients wow fadeIn">
    <div v-for="(item,index) in clientList" :key="index" class="col-lg-2 col-md-3 col-sm-6">
      <a class="clients-block wow fadeIn" data-wow-delay="0.6s" href="#">
        <img class="img-fluid" :src="item.src" alt="image">
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name:'CardStyle6',
  props:['clientList']
}
</script>
