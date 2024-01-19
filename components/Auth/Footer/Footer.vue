<template>
    <FooterMain class="footer-one iq-bg-light iq-over-light-90">
      <div slot="footerContent" class="footer-top">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <FooterLogo :section-image="navLogo" :content1="footerHome1" :content2="footerHome2" :content3="footerHome3"
              :line="lineImage"
              section-text="It is a long established fact that a reader will be distracted by the readable content." />
          </div>
          <div class="col-lg-9 col-md-6 col-sm-6">
            <div class="row">
              <div class="col-lg-5 col-md-4 col-sm-6 mt-4 mt-lg-0 mt-md-0">
                <FooterLinks :content="footerHome1" title="Sign up for updates" />
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 mt-4 mt-lg-0 mt-md-0">
                <FooterFollowUs :content="footerHome2" title="Follow us" />
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6 mt-lg-0 mt-4">
                <FooterAddress :address-content="footerText" address-title="Contact us" class="iq-contact" />
              </div>
            </div>
            <div class="row mt-5" >
              <FooterCopyright class="footer-one iq-bg-light iq-over-light-90" />
            </div>
          </div>
        </div>
      </div>
    </FooterMain>
  </template>
  <script>
  import FooterMain from '../../themes/Partials/Footer/FooterMainAuth'
  import FooterLogo from '../../themes/Partials/FooterComponents/FooterLogo'
  import FooterAddress from '../../themes/Partials/FooterComponents/FooterAddress'
  import FooterLinks from '../../themes/Partials/FooterComponents/FooterLinks'
  import FooterCopyright from '../../themes/Partials/FooterComponents/FooterCopyright'
  import FooterFollowUs from '../../themes/Partials/FooterComponents/FooterFollowUs'
  import logoImg from '../../../assets/images/logo.png'
  import line from '../../../assets/images/Line 1.png'
  
  export default {
    name: 'Footer',
    components: { FooterLogo, FooterLinks, FooterAddress, FooterMain, FooterCopyright, FooterFollowUs },
    data() {
      return {
        navLogo: logoImg,
        lineImage: line,
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
        footerHome1: [
          {
            href: '/home',
            title: 'Home'
          },
          {
            href: '/register-page',
            title: 'Create an account'
          },
          {
            href: '/login-page',
            title: 'Login'
          }
        ],
        footerHome2: [
          {
            href: '/home',
            title: 'How does it work?'
          },
          {
            href: '/our-rates',
            title: 'Our rates'
          },
          {
            href: '/photo-require',
            title: 'Photo requirements'
          },
          {
            href: '/faqs',
            title: 'Frequently asked questions'
          }
        ],
        footerHome3: [
          {
            href: '/terms',
            title: 'Terms & conditions'
          },
          {
            href: '/privacy',
            title: 'Privacy policy'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped></style>
  