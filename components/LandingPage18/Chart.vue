<template>
  <section class="iq-pb-70">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-4 col-sm-12">
          <div class="iq-chart-sports">
            <div>
              <div class="vc_chart-with-legend">
                <Newdonut class="vc_round-chart-canvas" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-sm-12">
          <div class="iq-chart-sports">
            <div>
              <div class="vc_chart-with-legend">
                <Newdonuttwo class="vc_round-chart-canvas" />
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4 col-sm-12">
          <div class="iq-chart-sports">
            <div>
              <div class="vc_chart-with-legend">
                <Newdonutthree class="vc_round-chart-canvas" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Newdonut from '../../components/LandingPage18/newdonut'
import Newdonuttwo from '../../components/LandingPage18/newdonuttwo'
import Newdonutthree from '../../components/LandingPage18/newdonutthree'
export default {
  name: 'Chart',
  components: {
    Newdonut,
    Newdonuttwo,
    Newdonutthree
  }
}
</script>
