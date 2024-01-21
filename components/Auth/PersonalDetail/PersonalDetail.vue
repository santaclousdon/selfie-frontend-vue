<template>
    <section class="container payment-section">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="row align-items-center">
                        <div class="col-lg-12 col-md-12 col-sm-12 content-title">
                            <h2> <img src="../../../assets/images/personaldetail.png" width="20" class="mr-5" alt="">
                                Personal details.</h2>
                            <p class="mt-3">Prior using this platform, we require some personal information from you. Rest
                                assured, this
                                information will not be shared publicly. Please ensure you complete this form truthfully, as
                                any errors or falsehoods may result in a permanent ban from the platform.</p>
                        </div>
                    </div>
                    <div class="iq-accordion career-style mt-5">
                        <div class="iq-accordion-block p-3">
                            <div class="accordion-details">
                                <div class="container">
                                    <div class="row mt-5">
                                        <div class="sign-content col-lg-6 col-md-6 col-sm-12">
                                            <label for="FirstName">First name(s)</label>
                                            <input type="text" class="iban-input" name="FirstName">
                                        </div>
                                        <div class="sign-content col-lg-6 col-md-6 col-sm-12">
                                            <label for="LastName">Last name</label>
                                            <input type="text" class="iban-input" name="LastName">
                                        </div>
                                    </div>
                                    <div class="row mt-5">
                                        <div class="sign-content col-lg-4 col-md-4 col-sm-12">
                                            <label for="birth">Date of birth</label>
                                            <select type="select" name="birth" class="form-control text mt-3"
                                                placeholder="">
                                                <option value="0">Select Day</option>
                                                <option v-for="day in days" :value="day">{{ day }}</option>
                                            </select>
                                        </div>
                                        <div class="sign-content col-lg-4 col-md-4 col-sm-12">
                                            <label for="birth" style="visibility: hidden;">Date of birth</label>
                                            <select type="select" name="month" class="form-control text mt-3"
                                                placeholder="">
                                                <option value="0">Select Month</option>
                                                <option v-for="month in months" :value="month">{{ month }}</option>
                                            </select>
                                        </div>
                                        <div class="sign-content col-lg-4 col-md-4 col-sm-12">
                                            <label for="birth" style="visibility: hidden;">Date of birth</label>
                                            <select type="select" name="month" class="form-control text mt-3"
                                                placeholder="">
                                                <option value="0">Select Year</option>
                                                <option v-for="year in years" :value="year">{{ year }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mt-5">
                                        <div class="sign-content col-lg-12 col-md-12 col-sm-12">
                                            <label for="country">Country of residence</label>
                                            <select name="country" class="form-control text mt-3">
                                                <option value="0">Select your country of residence</option>
                                                <option value="1">Netherlands</option>
                                                <option value="2">United States</option>
                                                <option value="3">Ukraine</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mt-5">
                                        <div class="sign-content col-lg-12 col-md-12 col-sm-12">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="flexCheckIndeterminate">
                                                <label class="form-check-label col-lg-12 col-md-12 "
                                                    for="flexCheckIndeterminate">
                                                    I hereby declare that I have filled in my personal information
                                                    truthfully.
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-5">
                                        <a href="" class="blue-btn button btn-sm mt-3">
                                            <div class="row justify-content-center align-items-center">
                                                <span class="label-text mr-3">Sign this agreement</span>
                                                <img src="../../../assets/images/Arrow 3.png" class="sign-image mt-1" alt="">
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
    name: 'PersonalDetail',
    data() {
        return {
            days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            years: [1990, 2020, 2021, 2022, 2023, 2024],
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
    width: 100%;
    display: inline-block;
    padding-left: 0;
}

/* .blue-btn {
    background-color: #673CF6;
    border-radius: 8px;
    color: white;
    padding: 2px 5px;
    cursor: pointer;
  } */

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

.label-text {
    color: white;
    font-size: 24px;
    font-family: Darker Grotesque normal;
    font-weight: 600;
    word-wrap: break-word;
}

.alert {
    width: 100%;
    background-color: #E35D5D;
    color: white;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 500;
    word-wrap: break-word;
    display: block;
}

.sign-content {
    padding: 0px 15px 0px 15px;
}

.sign-content input {
    border-radius: 8px;
    border: 1px #DFDFDF solid;
    margin-top: 15px;
}

.sign-content span.currencyData {
    margin-top: 15px;
    color: #222222;
    font-size: 18px;
    font-family: Montserrat;
    font-weight: 600;
    line-height: 30px;
    word-wrap: break-word;
    border: none;
}

label {
    color: #222222;
    font-size: 18px;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 30px;
    word-wrap: break-word
}

span.sign-image {
    width: 18px;
    height: 18px;
    margin-top: 5px;
}

.payment-section {
    margin-top: 150px;
}

select {
    color: #222222;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 30px;
    word-wrap: break-word
}

input.iban-input {
    height: 40px;
}

.form-check-label {
    color: #222222;
    font-size: 18px;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 30px;
    word-wrap: break-word;
    margin-top: 15px;
    cursor: pointer;
}

.blue-btn.button {
    display: inline-block !important;
}

input[type='checkbox'].form-check-input {
    border: #DFDFDF solid 1px !important;
    border-radius: 8px !important;
    width: 20px;
}
</style>