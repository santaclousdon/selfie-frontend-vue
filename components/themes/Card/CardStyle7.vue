<template>
  <div :class="CardClass">
    <div class="iq-portfolio">
      <a href="/portfolio-detail" class="iq-portfolio-img"><img width="1260" height="954" :src="CardMedia" class="img-fluid" alt=""></a>
      <div class="iq-portfolio-content  text-center">
        <div class="details-box clearfix">
          <div class="consult-details">
            <a href="/portfolio-detail">
              <h5 class="text-hover"> {{ CardTitle }} </h5>
            </a>
            <p class="mb-0">
              {{ CardSubtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardStyle7',
  props: ['CardTitle', 'CardSubtitle', 'CardMedia', 'CardClass']
}
</script>
