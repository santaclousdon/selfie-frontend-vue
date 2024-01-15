<template>
  <footer id="contact" :class="footerClass">
        <div class="col-lg-12 col-md-12 text-lg-left text-md-left text-left"> <span class="copyright">
            This platform is powered and operated by Brainwave HQ LLC, located at 30 N Gould St Ste R,
            Sheridan, WY 82801, US. EIN: 32-0739554.</span>
        </div>
    <div class="container mt-5">
      <div class="copyright-footer">
        <!-- <p class="footer-logo">This platform is powered and operated by Brainwave HQ LLC, located at 30 N Gould St Ste R,
          Sheridan, WY 82801, US. EIN: 32-0739554.</p> -->
        <div class="pt-3 pb-3">
          <div class="row flex-row-reverse justify-content-between">
            <div class="col-lg-12 col-md-12 text-lg-left text-md-left text-left"> <span class="copyright">Copyright
                <i class="fa fa-copyright"></i> 2024 <a href="/landing-page-1">Selfie.cash</a> All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterCopyright',
  props: ['footerClass']
}
</script>

<style scoped>
.footer-logo {
  color: #222222;
  font-size: 16px;
  font-family: 'Montserrat';
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word
}
</style>
