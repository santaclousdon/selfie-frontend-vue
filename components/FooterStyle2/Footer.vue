<template>
  <FooterMain :class="footerClass">
      <div slot="footerContent" class="footer-top">
        <div class="row algin-self-center footer_top_block">
          <div class="col-md-6">
            <h4 class="footer-title">Subscribe for Newsletter</h4>			
          </div>
          <div class="col-md-6">
          <div class="mc4wp-form-fields">
            <input type="email" name="EMAIL" placeholder="Your Email" required="">
            <input type="submit" value="Sign up">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <FooterLogo
            :section-image="navLogo"
            section-text="It is a long established fact that a reader will be distracted by the readable content."
          />
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6 mt-4 mt-lg-0 mt-md-0">
          <FooterLinks :content="footerHome" title="Menu"/>
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6 mt-4 mt-lg-0 mt-md-0">
          <FooterLinks :content="footerHome" title="About Us"/>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
          <FooterAddress :address-content="footerText" address-title="Contact us" class="iq-contact" />
        </div>
      </div>    
    </div>
  </FooterMain>
</template>
<script>
import FooterMain from '../themes/Partials/Footer/FooterMain'
import FooterLogo from '../themes/Partials/FooterComponents/FooterLogo'
import FooterAddress from '../themes/Partials/FooterComponents/FooterAddress'
import FooterLinks from '../themes/Partials/FooterComponents/FooterLinks'
import logoImg from '../../assets/images/logo.png'

export default {
  name: 'Footer',
  props:['footerClass'],
  components: { FooterLogo, FooterLinks, FooterAddress, FooterMain },
  data () {
    return {
      navLogo: logoImg,
      footerText: [
        {
          icon: true,
          iconClass: 'fas fa-phone-alt',
          text: '+0123 456 789'
        },
        {
          icon: true,
          iconClass: 'fas fa-envelope',
          text: 'support@iqnonicthemes.com'
        },
        {
          icon: true,
          iconClass: 'fas fa-home',
          text: '1234 North Luke Lane, South Bend, IN 360001'
        }
      ],
      footerHome: [
        {
          href: 'javascript:void(0)',
          title: 'Home'
        },
        {
          href: 'javascript:void(0)',
          title: 'Blog'
        },
        {
          href: 'javascript:void(0)',
          title: 'Careers'
        },
        {
          href: 'javascript:void(0)',
          title: 'Clients'
        },
        {
          href: 'javascript:void(0)',
          title: 'Service'
        } 
      ]
    }
  }
}
</script>

<style scoped></style>
