<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  head () {
    return {
      bodyAttrs: {
        'data-spy': 'scroll',
        'data-offset': '80'
      }
    }
  }
}
</script>
<style>
  /* Import Below Theme Style*/
  /*@import url('../assets/css/color/style.css');
    .wow {
      visibility: hidden;
    }
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 30%, 0);
        -ms-transform: translate3d(0, 30%, 0);
        transform: translate3d(0, 30%, 0);
      }
      100% {
        opacity: 1;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none;
      }
    }

    .fadeInUp {
      animation-name: fadeInUp;
      animation-timing-function: ease-out;
    }
  */
</style>
