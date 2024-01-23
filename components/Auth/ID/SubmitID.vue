<template>
  <section class="container">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="iq-accordion career-style mt-5">
            <div class="iq-accordion-block p-3">
              <div class="active-faq clearfix">
                <div class="container">
                  <div class="row align-items-left">
                    <div class="sub-title">
                      Please submit a government-issued ID, such as a copy of your passport, national ID card, or driver's
                      license.
                    </div>
                  </div>
                  <div class="row align-items-center">
                    <div class="faq-title">
                      <a href="javascript:void(0)" class="accordion-title"><span> Upload a copy of your ID
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-details">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12 ml-3 upload-content" data-toggle="modal"
                      data-target="#exampleModal" data-whatever="@mdo" data-backdrop="static" data-keyboard="false">
                      <input type="file" name="fileUpload" class="form-control file-input" placeholder="">
                      <div class="row align-items-center justify-content-center">
                        <div class="align-items-center justify-content-center">
                          <img src="../../../assets/images/upload.png" alt="">
                        </div>
                        <br>
                        <p class="mt-5 text-center" style="display: block; width: 100%;">Drag and Drop File or</p>
                        <a href="" class="blue-btn button btn-sm mt-3">Browse</a>
                        <p class="mt-3 image-limit">Minimum 800 by 800 pixels</p>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <a href="" class="blue-btn button btn-sm mt-3">
                      <div class="row justify-content-center align-items-center">
                        <span class="label-text mr-3">Submit for verification</span>
                      </div>
                    </a>
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
  name: 'SubmitID',
  data() {
    return {
      items: [
        {
          title: 'Grant of Rights',
          description: 'The Contributor hereby agrees to sell and provide their selfie photographs ("Photos") to the Company. The Contributor grants the Company the full rights to use these Photos on various (adult) entertainment websites to engage with their audience.'
        },
        {
          title: 'Confidentiality of Personal Details',
          description: 'The Contributor\'s personal details shall remain confidential and will not be shared publicly by the Company under any circumstances.'
        },
        {
          title: 'Licensing to Third Parties',
          description: 'The Company reserves the right to license the Photos to third parties for an undisclosed period of time. This licensing pertains only to the Photos and does not include any personal details of the Contributor.'
        },
        {
          title: 'Agreement to Terms',
          description: 'By signing this Agreement, the Contributor confirms that they fully understand and agree to the terms set forth herein.'
        }
      ],
      currentDate: this.$moment().format('MMM DD, YYYY')
    }
  },
  mounted() { }
}
</script>
<style scoped >
section {
  padding: 0%;
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

p {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word;
  margin-bottom: 0px;
}

.faq-title {
  width: 100%;
  display: inline-block;
  padding-left: 0;
}

.label-text {
  color: white;
  font-size: 24px;
  font-family: Darker Grotesque normal;
  font-weight: 600;
  word-wrap: break-word;
}

label {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word
}

.sub-title {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word
}

.upload-content {
  padding: 50px;
  background-color: #F7F7F7;
  border-radius: 8px;
  border: 1px #DFDFDF solid;
  cursor: pointer;
}

.upload-content:hover {
  background-color: #e9e9e9;
}

.file-input {
  display: none;
}

.image-limit {
  color: #909090;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word
}
</style>