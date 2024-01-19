<template>
    <section class="">
        <div class="container login-section justify-content-center">
            <div class="row justify-content-between p-3">
                <div class="col-lg-6 col-md-6 col-sm-12 pr-3">
                    <div class="row activity-form">
                        <h2 class="text-left mb-4 sub-title">
                            Your activity
                        </h2>
                        <p>Your photo is approved. <span class="text-funds">€1.75</span> has been credited to your account.
                            <br><span class="text-date">20:35 March 1, 2024</span>
                        </p>
                        <p>Successfully uploaded photo(s). Please wait 24 to 48 hours for approval.
                            <br><span class="text-date">20:35 March 1, 2024</span>
                        </p>
                        <p>You have an approved referral! <span class="text-funds">€5.00</span> has been credited to your
                            account.
                            <br><span class="text-date">20:35 March 1, 2024</span>
                        </p>
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
    </section>
</template>
<script>
export default {
    name: 'DescriptionCard'
}
</script>
<style scoped >
.sub-title {
    color: #222222;
    font-size: 29px;
    font-family: Darker Grotesque;
    font-weight: 700;
    word-wrap: break-word;
}

.forgot-pass a {
    color: #222222;
    font-size: 18px;
    font-family: Montserrat;
    font-weight: 500;
    word-wrap: break-word;
}

.activity-form {
    background-color: #F5F6FD;
    border-radius: 8px;
    padding: 25px 35px;
}

.refer-form {
    background-color: #673CF6;
    border-radius: 8px;
    padding: 25px 35px;
}

input.text {
    background: white;
    border-radius: 8px;
    border: 1px #DFDFDF solid
}

#submitLogin {
    float: right;
}

.detail-form {
    border: #EDEFFD 1px solid;
    border-radius: 8px;
}

.accordion-title span {
    color: #222222;
    font-size: 29px;
    font-family: Darker Grotesque normal;
    font-weight: 700;
    word-wrap: break-word;
}

.get-started {
    color: black;
    font-size: 18px;
    font-family: Montserrat;
    font-weight: 600;
    word-wrap: break-word
}

.accordion-details {
    color: #222222;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 30px;
    word-wrap: break-word;
}

.blue-btn-arrow {
    background: #673CF6;
    border-radius: 9999px;
    padding: 2px 5px;
}

.alert {
    margin-left: auto;
    margin-right: auto;
    background-color: #E35D5D;
    color: white;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 500;
    word-wrap: break-word;
}

section {
    padding: 50px 0;
}

.activity-form p {
    color: #222222;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 22px;
    word-wrap: break-word;
}

.activity-form p .text-funds {
    color: #222222;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 600;
    line-height: 22px;
    word-wrap: break-word;
}

.activity-form p .text-date {
    color: #673CF6;
    font-size: 12px;
    font-family: Montserrat;
    font-weight: 700;
    line-height: 22px;
    word-wrap: break-word;
}

.activity-form h2.sub-title {
    color: #222222;
    font-size: 29px;
    font-weight: 700;
    word-wrap: break-word;
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
    font-weight: 500;
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
</style>
  
  