<template>
  <div class="position-relative iq-chart-data overview-block-pb">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-5">
          <div class="vc_chart vc_round-chart wpb_content_element">
            <div class="vc_chart-with-legend">
              <Donut class="vc_round-chart-canvas" />
            </div>
            <ul class="vc_chart-legend">
              <li><span style="background-color:#437deb" />High</li><li><span style="background-color:#53e2d9" />Medium</li><li><span style="background-color:#8ab4f7" />Low</li>
            </ul>
          </div>
        </div>

        <div class="col-md-12 col-lg-7">
          <div class="vc_chart vc_line-chart wpb_content_element">
            <div class="vc_chart-with-legend ">
              <Bar class="vc_line-chart-canvas" />
            </div>
            <ul class="vc_chart-legend d-none">
              <li><span style="background-color:#437deb" />One</li><li><span style="background-color:#53e2d9" />Two</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Donut from '../../components/LandingPage15/donut'
import Bar from '../../components/LandingPage15/bar'
export default {
  name: 'Chart',
  components: {
    Donut,
    Bar
  }
}
</script>
