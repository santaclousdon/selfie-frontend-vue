<template>
  <section>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-12">
          <div class="row align-items-center">
            <div class="col-lg-12 col-md-12 col-sm-12 content-title payment-history">
              <h2> <img src="../../../assets/images/payment_history.png" class="mr-2" alt=""> Payment history</h2>
            </div>
          </div>
          <div class="iq-accordion career-style mt-5">
            <div class="iq-accordion-block p-3 payment-table">
              <div class="accordion-details">
                <div class="container">
                  <div class="row mt-4 pl-3 pr-3">
                    <table class="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col-3" class="text-left">Status</th>
                          <th scope="col-3" class="text-left">Amount</th>
                          <th scope="col-3" class="text-left">Date</th>
                          <th scope="col-3" class="text-left">Method</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in items" :key="index">
                          <td class="text-left"> <img :src="item.status == 'Paid' ? paidImage : pendingImage"  alt="">
                            {{ "&nbsp;&nbsp;&nbsp;&nbsp;" + item.status }}</td>
                          <td class="text-left">€{{ item.amount }}</td>
                          <td class="text-left">{{ item.date }}</td>
                          <td class="text-left">{{ item.method }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
      paidImage: require('../../../assets/images/paidStatus.png'),
      pendingImage: require('../../../assets/images/pendingStatus.png'),
      items: [
        {
          status: "Processing",
          amount: "12.50",
          date: "March 1, 2024",
          method: "SEPA Bank Transfer"
        },
        {
          status: "Paid",
          amount: "4.50",
          date: "February 14, 2024",
          method: "SEPA Bank Transfer"
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

.iq-accordion .iq-accordion-block {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 8px;
  border: 1px #EDEFFD solid
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

.table {
  width: 100vw;
  border: none;
}

th {
  color: #222222;
  font-size: 29px;
  font-family: Darker Grotesque normal;
  font-weight: 700;
  word-wrap: break-word
}

td {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word
}

thead {
  background: #F7F7F7;
  border-radius: 8px;
}
section, footer {
    padding-left: 0!important;
    padding-right: 0!important;
    width: 100%;
}
</style>