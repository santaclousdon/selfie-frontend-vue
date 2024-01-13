<template>
  <section class="pt-0">
    <div class="container">
      <div class="row align-items-center ">
        <div class="col-sm-6">
          <h2 class="text-left mb-4">
            Let's talk about for your<br> business.
          </h2>
          <div class="response-output" />
          <form action="#" method="post">
            <div class="contact-form">
              <div> <input type="text" name="your-name" class="form-control text " placeholder="Your Name"> </div>
              <div> <input type="text" name="your-email" class="form-control text " placeholder="Your Email"> </div>
              <div> <input type="text" name="your-subject" class="form-control text " placeholder="Subject"> </div>
              <div> <textarea name="your-message" cols="40" rows="10" class="form-control textarea " placeholder="Your Message" /> </div>
              <div>
                <button
                  id="submit-4"
                  click="/contact-us"
                  name="submit"
                  type="submit"
                  value="Send"
                  class="button d-block w-100"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="mt-5 col-sm-6 offset-lg-1 col-lg-5 offset-md-1 col-md-5">
          <div class="wrapper">
            <div class="contact-box d-flex">
              <i aria-hidden="true" class="ion ion-android-call" />
              <div class="service-detail">
                <h4 class="mb-2">
                  Phone support
                </h4>
                <ul class="list-inline mb-0">
                  <li> <a href="tel:+0123456789"> +0123456789</a> </li>
                  <li> <a href="tel:+0123456789"> +0123456789</a> </li>
                </ul>
              </div>
            </div>
            <div class="contact-box d-flex">
              <i aria-hidden="true" class="fas fa-envelope" />
              <div class="service-detail">
                <h4 class="mb-2">
                  Email us
                </h4>
                <ul class="list-inline mb-0">
                  <li><a href="mailto:support@iqnonicthemes.com"> support@iqnonicthemes.com</a></li>
                  <li><a href="mailto:support@iqnonicthemes.com"> support@iqnonicthemes.com</a></li>
                </ul>
              </div>
            </div>
            <div class="contact-box d-flex">
              <i aria-hidden="true" class="ion ion-android-share-alt" />
              <div class="service-detail">
                <h4 class="mb-2">
                  Social media
                </h4>
                <ul>
                  <li class="d-inline">
                    <a href="#"><i class="fa fa-facebook-f" /></a>
                  </li>
                  <li class="d-inline">
                    <a href="#"><i class="fa fa-twitter" /></a>
                  </li>
                  <li class="d-inline">
                    <a href="#"><i class="fa fa-instagram" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ContactForm'
}
</script>
