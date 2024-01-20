<template>
  <section>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-12">
          <div class="row align-items-center">
            <div class="col-lg-12 col-md-12 col-sm-12 content-title">
              <h2> <img src="../../../assets/images/myphoto.png" class="ml-5 mr-5" alt=""> My photos</h2>
            </div>
          </div>
          <div class="iq-accordion career-style mt-5">
            <div class="iq-accordion-block p-3">
              <div class="active-faq clearfix">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="faq-title">
                      <a href="javascript:void(0)" class="accordion-title"><span> Upload your first two selfies
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-details">
                <div class="container">
                  <div class="row mt-4">
                    <div class="legal-warn">
                      <img src="../../../assets/images/legal-warn.png" width="20" height="20" alt="">
                    </div>
                    <div class="col-lg-11 mb-4 mb-lg-0">
                      <p>To get paid, you need to upload at least two clothed half-body (face and upper body).
                      </p>
                    </div>
                  </div> 
                  <div class="row">
                    <div v-for="(firstimage, index1) in images_first" :key="index1" class="col-lg-4 col-md-4 col-sm-12">
                      <div class="col upload-content"
                        :style="{ 'background-image': 'url(_nuxt/' + firstimage.url + ')' }">
                        <input type="file" name="fileUpload" class="form-control file-input" placeholder="">
                        <div :style="{ 'visibility': firstimage.status == '' ? 'visible' : 'hidden' }"
                          class="row align-items-center justify-content-center">
                          <div class="align-items-center justify-content-center">
                            <img src="../../../assets/images/upload.png" alt="">
                          </div>
                          <span class="image-num">{{ index1 + 1 }}</span>
                        </div> 
                        <!-- <img src="../../../assets/images/avatar/test/4.jpg" width="100%" alt=""> -->
                      </div>
                    </div>
                    <!-- <div class="col-lg-3 col-md-3 col-sm-12 ml-3 upload-content">
                      <input type="file" name="fileUpload" class="form-control file-input" placeholder="">
                      <div class="row align-items-center justify-content-center">
                        <div class="align-items-center justify-content-center">
                          <img src="../../../assets/images/upload.png" alt="">
                        </div>
                        <span class="image-num">2</span>
                      </div>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="iq-accordion career-style mt-5">
            <div class="iq-accordion-block p-3">
              <div class="active-faq clearfix">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="faq-title">
                      <a href="javascript:void(0)" class="accordion-title"><span> Upload more photos
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-details">
                <div class="container">
                  <div class="row mt-4">
                    <div class="legal-warn">
                      <img src="../../../assets/images/legal-warn.png" width="20" height="20" alt="">
                    </div>
                    <div class="col-lg-11 mb-4 mb-lg-0">
                      <p>Upload up to six more selfies. Check our rates to see your potential earnings.
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div v-for="(image, index2) in images_all" :key="index2" style="width: 30%;"
                      class="col-lg-4 col-md-4 col-sm-12">
                      <div class="col-lg-12 upload-content mt-5"
                        :style="{ 'background-image': 'url(/_nuxt/' + image.url + ')' }">
                        <input type="file" name="fileUpload" class="form-control file-input" placeholder="">
                        <div :style="{ 'visibility': image.status == '' ? 'visible' : 'hidden' }"
                          class="row align-items-center justify-content-center">
                          <div class="align-items-center justify-content-center">
                            <img src="../../../assets/images/upload.png" alt="">
                          </div>
                          <span class="image-num">{{ index2 + 3 }}</span>
                        </div>
                      </div>
                      <div class="row align-items-center justify-content-between p-3">
                        <span v-if="image.status == 'Pending'" class="pending image-status">Pending</span>
                        <span v-if="image.status == 'Approved'" class="approved image-status">Approved</span>
                        <span v-if="image.status == 'Pending'" class="pending image-action"><img
                            src="../../../assets/images/recycle.png" alt=""></span>
                      </div>
                    </div>
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
      images_first: [
        {
          url: '',
          status: ''
        },
        {
          url: '',
          status: ''
        }
      ],
      images_all: [
        {
          url: 'assets/images/avatar/test/4.jpg',
          status: 'Approved'
        },
        {
          url: 'assets/images/avatar/test/4.jpg',
          status: 'Pending'
        },
        {
          url: '',
          status: ''
        },
        {
          url: '',
          status: ''
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

.upload-content {
  padding: 100px;
  background: #F7F7F7;
  /* background: url('../../../assets/images/avatar/test/4.jpg'); */
  background-size: cover;
  border-radius: 8px;
  border: 1px #DFDFDF solid;
  cursor: pointer;
  float: left;
}

.file-input {
  display: none;
}

.upload-content:hover {
  background-color: #e9e9e9;
  opacity: .5;
}

.image-num {
  position: absolute;
  top: 20px;
  right: 20px;
  color: rgba(34, 34, 34, 0.20);
  font-size: 55px;
  font-family: Darker Grotesque normal;
  font-weight: 700;
  line-height: 24px;
  word-wrap: break-word
}

.image-status {
  color: #222222;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word
}

.pending {
  background: #F5F5F5;
  border-radius: 6px;
  padding: 5px 10px;
  cursor: pointer;
}

.approved {
  background: #D3EDB1;
  border-radius: 6px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>