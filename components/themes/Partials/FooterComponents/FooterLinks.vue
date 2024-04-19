<template>
  <div>
    <div class="footer-logo text-left">
      <h4 class="footer-title">{{ title }}</h4>
      <div class="menu-footer-menu-container">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter your email"
            aria-label="Enter your email"
            aria-describedby="basic-addon2"
          />
          <div class="blue-btn button">
            <img src="../../../../assets/images/Arrow 3.png" width="20" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterLinks",
  props: ["title", "content"],
};
</script>
<style scoped>
.footer-logo {
  padding-left: none !important;
}
.footer-title {
  color: #222222;
  font-size: 30px;
  font-family: Darker Grotesque normal;
  font-weight: 800;
  word-wrap: break-word;
  margin-bottom: 50px;
}

.button {
  padding: 15px 15px;
}

input {
  border-radius: 8px;
  border: #dfdfdf 1px solid;
  margin-right: 5px;
}
input::placeholder {
  color: #222222;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word;
}
</style>
