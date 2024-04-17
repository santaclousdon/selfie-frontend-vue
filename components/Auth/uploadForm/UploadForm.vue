<template>
  <section>
    <div
      class="modal fade modal-mobile"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-mobile" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i class="fa fa-times fa-1x"></i>
            </button>
            <div class="row align-items-center content-body">
              <div class="col-lg-12 col-md-12 col-sm-12 content-title">
                <h2>Submit a photo for approval.</h2>
                <p class="mt-3">
                  Use the tool below to upload a selfie. Once uploaded, it can
                  take up to 48 hours for approval. Ensure your photo is a
                  minimum of 800 by 800 pixels. Only PNG, JPG, and JPEG formats
                  are accepted.
                </p>
              </div>
            </div>
            <div class="iq-accordion career-style">
              <div class="iq-accordion-block">
                <div class="accordion-details">
                  <div class="row justify-content-between">
                    <div class="col-lg-5 col-md-5 col-sm-12">
                      <p class="sub-title">
                        <span class="title-num"> 1</span> Upload your photo
                      </p>
                      <input
                        type="file"
                        name="fileUpload"
                        class="form-control file-input"
                        placeholder=""
                      />
                      <div
                        class="row align-items-center justify-content-center upload-content image-input"
                        :style="{
                          'background-image': `url(${imageData})`,
                          'background-size': 'cover',
                          'background-repeat': 'no-repeat',
                        }"
                        @click="chooseImage"
                      >
                        <div class="align-items-center justify-content-center" :style="{'height': '80px'}">
                          <img :src="imageData ? `` : `/_nuxt/assets/images/upload.png`" alt="" />
                        </div>
                        <br />
                        <p
                          class="mt-5 text-center drag-drop"
                          style="
                            display: block;
                            width: 100%;
                            margin-bottom: 15px;
                          "
                        >
                          Drag and Drop File or
                        </p>
                        <button class="blue-btn button btn-sm browser-btn">
                          Browse
                        </button>
                        <p class="mt-3 image-limit">
                          Minimum 800 by 800 pixels
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 choose-mobile">
                      <p class="sub-title">
                        <span class="title-num"> 2</span> Choose the category of
                        this photo
                      </p>
                      <input
                        ref="fileInput"
                        type="file"
                        name="fileUpload"
                        class="form-control file-input file-input-form"
                        placeholder=""
                        @input="onFileChange"
                      />
                      <select
                        type="select"
                        @change="onChange($event)"
                        name="birth"
                        class="form-control text mt-3"
                        value="selected"
                      >
                        <option disabled value="" selected>{{ this.receivedModalData.title === undefined ? "Face, half body" : this.receivedModalData.title }}</option>
                        <option
                          v-for="(item, index) in items"
                          :key="index"
                          :value="index"
                        >
                          {{ item.title }}
                        </option>
                      </select>
                      <p class="text mt-5">Potential earning</p>
                      <p class="text-funds">€{{ selectedRate.toFixed(2) }}</p>
                    </div>
                  </div>
                  <div class="form-check mt-5">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckIndeterminate"
                    />
                    <label
                      class="form-check-label col-lg-12 col-md-12"
                      for="flexCheckIndeterminate"
                    >
                      I hereby declare that I have read and agree with the
                      <span>terms & conditions.</span>
                    </label>
                  </div>
                  <div class="submit-mobile" @click="onSubmit">
                    <a
                      class="blue-btn button btn-sm mt-3 mb-3"
                      data-dismiss="modal"
                    >
                      <span class="label-text mr-3">Submit this photo</span>
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
import jquery from "jquery";
import Accordion from "../MyPhotos/Accordion.vue";
import { EventBus } from '../MyPhotos/event-bus.js';

export default {
  name: "UploadForm",
  components: {
    Accordion
  },
  data() {
    return {
      receivedModalData: {},
      name: "Emily",
      title: "Face, half body",
      description: "Breasts fully covered. Fully clothed.",
      type: "Mandatory",
      selectedRate: 0.0,
      pendingImage: require("../../../assets/images/pending.png"),
      rejectedImage: require("../../../assets/images/rejected.png"),
      imageData: null,
      index: 0,
      days: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      years: [
        1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
        2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
        2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
      ],
      items: [
        {
          title: "Face, half body",
          description: "Breasts fully covered. Fully clothed.",
          type: "Mandatory",
          cost: 1.0,
        },
        {
          title: "Face, half body",
          description: "Visible cleavage. Lightly clothed, lingerie or bikini.",
          type: "",
          cost: 1.5,
        },
        {
          title: "Face, full body",
          description: "Breasts fully covered. Fully clothed.",
          type: "",
          cost: 1.5,
        },
        {
          title: "Face, full body",
          description: "Visible cleavage. Lightly clothed.",
          type: "",
          cost: 1.75,
        },
        {
          title: "No face, full body",
          description: "Lingerie or bikini.",
          type: "Maximum 1",
          cost: 1.75,
        },
        {
          title: "Face, full body",
          description: "Lingerie or bikini.",
          type: "",
          cost: 2.0,
        },
        {
          title: "No face, breasts",
          description: "Fully nude",
          type: "Maximum 1",
          cost: 2.5,
        },
        {
          title: "Face, half body",
          description: "Fully nude",
          type: "",
          cost: 3.0,
        },
        {
          title: "No face, full body",
          description: "Fully nude",
          type: "Maximum 1",
          cost: 3.0,
        },
        {
          title: "Face, full body",
          description: "Fully nude",
          type: "",
          cost: 3.5,
        },
        {
          title: "No face, full body",
          description: "Fully nude, masturbating.",
          type: "Maximum 1",
          cost: 4.0,
        },
        {
          title: "Face, full body",
          description: "Fully nude, masturbating.",
          type: "",
          cost: 5.5,
        },
      ],
    };
  },
  created() {
    EventBus.$on('modalData', modalData => {
      this.receivedModalData = modalData;
    console.log("dddddddddddd", this.receivedModalData)
    this.selectedRate = this.receivedModalData.price === undefined ? 1 : this.receivedModalData.price;
    this.imageData = this.receivedModalData.url === undefined ? "" : this.receivedModalData.url;
    this.title = this.receivedModalData.title === undefined ? "Face, half body" : this.receivedModalData.title;
    this.index = this.receivedModalData.index;
    console.log("selectedRate", this.index);
    });
  },
  methods: {
    onChange(event) {
      this.selectedRate = this.items[event.target.value].cost;
      this.description = this.items[event.target.value].description;
      this.title = this.items[event.target.value].title;
    },
    chooseImage() {
      this.$refs.fileInput.click();
    },

    onFileChange(evt) {
      console.log("evt", evt.target);
      const vm = this;
      const selectedFile = evt.target.files[0]; // accessing file
      this.selectedFile = selectedFile;

      var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

      // FileReader support

      if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = () => {
          this.imageData = fr.result;
        };

        fr.readAsDataURL(files[0]);
      }
    },
    
    onSubmit() {
      const formData = new FormData();
      formData.append("file", this.selectedFile); // appending file
      formData.append("userId", this.$store.$auth.$state.user._id);
      formData.append("price", this.selectedRate);
      formData.append("description", this.description);
      formData.append("title", this.title);
      formData.append("index", this.index);
      formData.append("type", this.type);

      // sending file to the backend
      this.$axios
        .$post("/api/auth/selfie-upload", formData)
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
section {
  padding-bottom: 0%;
}

.iq-accordion {
  background-color: #00000005;
  padding: 40px;
  border-top: 1px dashed #8a8989;
}

.iq-accordion .iq-accordion-block {
  width: 100%;
  height: 100%;
}

.close {
  z-index: 9999999;
  position: relative;
  margin-right: 10px;
}

label {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word;
}

#modal {
  visibility: hidden;
}

.content-title {
  padding: 40px 40px 0px 40px;
}

.content-title h2 {
  color: #222222;
  font-size: 50px;
  font-family: Darker Grotesque;
  font-weight: 800;
  word-wrap: break-word;
}

.content-title p {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word;
}

.faq-title {
  width: 80%;
  display: inline-block;
  padding-left: 0;
}

.accordion-title span {
  color: white;
  font-size: 29px;
  font-family: Darker Grotesque normal;
  font-weight: 600;
  word-wrap: break-word;
  padding-left: 30px;
}

.blue-btn {
  background-color: #673cf6;
  border-radius: 8px;
  color: white;
  padding: 10px 40px;
  cursor: pointer;
}

select {
  color: #222222;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word;
}

.label-text {
  color: white;
  font-size: 24px;
  font-family: Darker Grotesque normal;
  font-weight: 600;
  word-wrap: break-word;
}

.form-check-label {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word;
  margin-top: 8px;
  cursor: pointer;
}

.form-check-label span {
  color: #673cf6;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word;
}

.file-input {
  display: none;
}

section .container {
  float: left;
}

.modal-dialog {
  max-width: 50%;
}

.upload-content {
  padding: 50px;
  background-color: #f7f7f7;
  border-radius: 8px;
  border: 1px #dfdfdf solid;
  cursor: pointer;
}

.upload-content:hover {
  background-color: #e9e9e9;
}

.sub-title {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word;
}

.title-num {
  background: #673cf6;
  border-radius: 9999px;
  color: white;
  padding: 2px 10px;
}

.image-limit {
  color: #909090;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word;
  margin-bottom: 0px;
}

.text-funds {
  color: #673cf6;
  font-size: 60px;
  font-family: Darker Grotesque normal;
  font-weight: 600;
  line-height: 30px;
  word-wrap: break-word;
}

.text {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word;
  margin-bottom: 10px;
}

.modal-body {
  padding: 10px 0px 0px 0px;
}
</style>
