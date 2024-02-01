<template>
  <div>
    <div class="footer-logo text-left">
      <h4 class="footer-title">{{ title }}</h4>
      <div class="menu-footer-menu-container">
        <ul class="info-share d-inline list-inline">
          <li class="list-inline-item"><a class="icon-btn" href="#"><img src="../../../../assets/images/instagram.png"
                alt=""></a>
          </li>
          <li class="list-inline-item">
            <a class="icon-btn facebook" href="#"><img src="../../../../assets/images/facebook.png" alt=""></a>
          </li>
          <li class="list-inline-item"><a class="icon-btn" href="#">
              <img src="../../../../assets/images/Xing.png" alt=""></a>
          </li>
          <li class="list-inline-item"><a class="icon-btn" href="#"><img src="../../../../assets/images/youtube.png"
                alt=""></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterLinks',
  props: ['title', 'content']
}
</script>
<style scoped>
a.icon-btn {
  background-color: #F5F6FD;
  border-radius: 8px;
  display: block;
  width: 45px;
  height: 45px;
  padding: 6px 12px;
}

a.facebook {
  padding: 6px 15px !important;
}

a.icon-btn:hover {
  background-color: #ababad;
}

.footer-title {
  color: #222222;
  font-size: 30px;
  font-family: Darker Grotesque;
  font-weight: 800;
  word-wrap: break-word;
  margin-bottom: 50px;
}
</style>