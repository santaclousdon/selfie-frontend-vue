<template>
  <section>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-12">
          <div class="row align-items-center">
            <div class="col-lg-12 col-md-12 col-sm-12 content-title">
              <h2> <img src="../../../assets/images/aside/myreferrals.png" class="mr-5" alt=""> My referrals</h2>
            </div>
          </div>
          <div class="row justify-content-between p-3">
            <div class="col-lg-6 col-md-6 col-sm-12 pr-3">
              <div class="row activity-form">
                <div class="container">
                  <div class="row">
                    <h2 class="text-left mb-4 sub-title">
                      My referrals
                    </h2>
                  </div>
                  <div class="row mt-3" v-for="(item, index) in items" :key="index">
                    <div class="col-lg-4 col-md-4 col-sm-4 text-left active-table-text">User # {{ item.user }}</div>
                    <div class="col-lg-4 col-md-4 col-sm-4 text-left active-table-text">{{ item.date }}</div>
                    <div class="col-lg-4 mb-3 col-md-4 col-sm-4 text-left active-table-text"> <img
                        :src="item.status == 'Pending' ? pendingImage : paidImage" alt="" class="mr-3"> {{ item.status }} </div>
                    <img v-if="index < items.length-1" src="../../../assets/images/Line 1.png" width="100%" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 pl-5">
              <div class="row refer-form">
                <h2 class="text-left mb-4 sub-title">
                  Refer and earn
                </h2>
                <p>Want to earn more? Start referring friends using your personal link and earn €5.00 for every
                  friend who successfully uploads 4 photos or more. Use the link provided below.</p>
                <div class="copy-group col-lg-12 col-md-12 col-sm-12 p-0">
                  <input type="text" value="https://selfie.cash/emily1" placeholder="Your path" class="copy-link">
                  <span class="fa fa-clipboard text-dark" title="Copy to Clipboard"></span>
                </div>
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
  name: 'Accordion',
  data() {
    return {
      pendingImage: require('../../../assets/images/pendingStatus.png'),
      paidImage: require('../../../assets/images/paidStatus.png'),
      items: [
        {
          user: '454',
          date: '1 March, 2024',
          status: 'Pending'
        },
        {
          user: '398',
          date: '14 February, 2024',
          status: 'Approved'
        }
      ]
    }
  },
  mounted() { }
}
</script>
<style scoped >
section {
  padding-bottom: 0%;
  float: left;
}

.accordion-active div.active-faq .container .row {
  background-color: white;
}

.iq-accordion .iq-accordion-block {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 8px;
  border: 1px #EDEFFD solid
}

div.active-faq .container .row {
  background-color: white;
}

.content-title h2 {
  color: #222222;
  font-size: 50px;
  font-family: Darker Grotesque normal;
  font-weight: 800;
  word-wrap: break-word
}

p {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word
}

.faq-title {
  width: 80%;
  display: inline-block;
  padding-left: 0;
}

.blue-btn {
  background-color: #673CF6;
  border-radius: 100px;
  color: white;
  padding: 2px 5px;
  cursor: pointer;
}

.text-right {
  width: 20%;
}

.contact-nav a {
  color: black;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  word-wrap: break-word;
}

.legal-warn {
  padding-left: 15px;
}

.legal-item-title {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 30px;
  word-wrap: break-word
}

.legal-item-description {
  color: #222222;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word
}

ul {
  list-style: none;
  counter-reset: legal;
  padding: 0px;
}

ul li {
  margin-bottom: 20px;
}

ul li:before {
  margin-right: 10px;
  content: counters(legal, ' ')".";
  counter-increment: legal;
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 30px;
  word-wrap: break-word;
}

.refer-form {
  background-color: #673CF6;
  border-radius: 8px;
  padding: 25px 35px;
}

.refer-form .sub-title {
  color: white;
  font-size: 29px;
  font-family: Darker Grotesque normal;
  font-weight: 700;
  word-wrap: break-word;
}

.refer-form p {
  color: white;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 30px;
  word-wrap: break-word
}

.copy-link {
  border-radius: 8px;
}

.copy-group .fa-clipboard {
  position: absolute;
  top: 1px;
  right: 1px;
  cursor: pointer;
  padding: 15px;
  border-radius: 8px;
  color: #222222;
}

.copy-group .fa-clipboard:hover {
  background-color: #c8c9cc;
}


.activity-form {
  background-color: #F5F6FD;
  border-radius: 8px;
  padding: 25px 35px;
}

.active-table-text {
  padding: 0px;
  color: #222222;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word
}

h2.sub-title {
  color: #222222;
  font-size: 29px;
  font-family: Darker Grotesque normal;
  font-weight: 700;
  word-wrap: break-word;
}
</style>