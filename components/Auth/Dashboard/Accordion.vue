<template>
    <section>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-12">
                    <div class="row align-items-center">
                        <div class="col-lg-12 col-md-12 col-sm-12 content-title">
                            <h2>Hello, {{ name }}</h2>
                            <p>Finish the tasks listed below and begin earning from your selfies.</p>
                        </div>
                    </div>
                    <div class="iq-accordion career-style mt-2">
                        <div class="iq-accordion-block step-content">
                            <div class="active-faq clearfix">
                                <div class="container">
                                    <div class="row align-items-center">
                                        <div class="faq-title">
                                            <a href="javascript:void(0)" class="accordion-title"><span
                                                    class="text-white title"> You’ve got 5 tasks today </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-details">
                                <div class="container step-box align-items-center">
                                    <div v-for="(item, index) in items" :key="index"
                                        class="row align-items-center justify-content-between mb-3">
                                        <div class="col-lg-6 col-md-6 col-sm-12 align-items-center step-title">
                                            <span v-if="item.status == ''" class="mr-3 step-index">{{ index + 1 }}</span>
                                            <span v-else class="mr-3"
                                                :class="item.status == 'Pending' ? 'pendingImage' : 'rejectedImage'"> <img
                                                    :src="item.status == 'Pending' ? pendingImage : rejectedImage" alt="">
                                            </span>
                                            {{ item.title }}
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-none step-detail text-center">{{ item.detail }}
                                        </div>
                                        <div class="col-lg-2 col-md-2 col-sm-none step-status text-center"
                                            :class="item.status + '-item'">{{ item.status }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button type="button" class="btn btn-primary" id="modal" data-toggle="modal" data-target="#exampleModal"
            data-whatever="@mdo" data-backdrop="static" data-keyboard="false">Open modal for @mdo</button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog  modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i
                                class="fa fa-times fa-1x"></i></button>
                        <div class="row align-items-center">
                            <div class="col-lg-12 col-md-12 col-sm-12 content-title">
                                <h2> <img src="../../../assets/images/personaldetail.png" width="20" class="mr-5" alt="">
                                    Fill in your personal information.</h2>
                                <p class="mt-3">Prior using this platform, we require some personal information
                                    from you. Rest
                                    assured, this
                                    information will not be shared publicly. Please ensure you complete this
                                    form truthfully, as
                                    any errors or falsehoods may result in a permanent ban from the platform.
                                </p>
                            </div>
                        </div>
                        <div class="iq-accordion-modal row career-style">
                            <div class="iq-accordion-block">
                                <div class="accordion-details">
                                    <div class="row mt-3">
                                        <div class="sign-content col-lg-6 col-md-6 col-sm-12">
                                            <label for="FirstName">First name(s)</label>
                                            <input type="text" class="iban-input" name="FirstName">
                                        </div>
                                        <div class="sign-content col-lg-6 col-md-6 col-sm-12">
                                            <label for="LastName">Last name</label>
                                            <input type="text" class="iban-input" name="LastName">
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="sign-content col-lg-4 col-md-4 col-sm-12">
                                            <label for="birth">Date of birth</label>
                                            <select type="select" name="birth" class="form-control text mt-3"
                                                placeholder="">
                                                <option value="0">Select Day</option>
                                                <option v-for="day in days" :value="day">{{ day }}</option>
                                            </select>
                                        </div>
                                        <div class="sign-content col-lg-4 col-md-4 col-sm-12">
                                            <label for="birth" style="visibility: hidden;">Date of
                                                birth</label>
                                            <select type="select" name="month" class="form-control text mt-3"
                                                placeholder="">
                                                <option value="0">Select Month</option>
                                                <option v-for="month in months" :value="month">{{ month }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="sign-content col-lg-4 col-md-4 col-sm-12">
                                            <label for="birth" style="visibility: hidden;">Date of
                                                birth</label>
                                            <select type="select" name="month" class="form-control text mt-3"
                                                placeholder="">
                                                <option value="0">Select Year</option>
                                                <option v-for="year in years" :value="year">{{ year }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
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
                                    <div class="row mt-3">
                                        <div class="sign-content col-lg-12 col-md-12 col-sm-12">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="flexCheckIndeterminate">
                                                <label class="form-check-label col-lg-12 col-md-12 "
                                                    for="flexCheckIndeterminate">
                                                    I hereby declare that I have filled in my personal
                                                    information
                                                    truthfully.
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <a href="" class="blue-btn button btn-sm">
                                            <div class="row justify-content-center align-items-center">
                                                <span class="label-text mr-3">Sign this agreement</span>
                                                <img src="../../../assets/images/Arrow 3.png" class="sign-image mt-1"
                                                    alt="">
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
    name: 'Accordion',
    data() {
        return {
            name: 'Emily',
            pendingImage: require('../../../assets/images/pending.png'),
            rejectedImage: require('../../../assets/images/rejected.png'),
            days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            years: [1990, 2020, 2021, 2022, 2023, 2024],
            items: [
                {
                    title: 'Fill in your payment information',
                    status: 'Pending',
                    detail: ''
                },
                {
                    title: 'Upload your identification',
                    status: 'Rejected',
                    detail: 'Must be government issued ID'
                },
                {
                    title: 'Sign our legal agreement',
                    status: '',
                    detail: ''
                },
                {
                    title: 'Upload your selfies',
                    status: '',
                    detail: ''
                },
                {
                    title: 'Refer a friend',
                    status: '',
                    detail: ''
                }
            ]
        }
    },
    mounted() {
        document.getElementById('modal').click();
        jQuery('#exampleModal').modal({
            backdrop: 'static',
            keyboard: false
        })
    }
}
</script>
<style scoped >
section {
    padding-bottom: 0%;
}

.accordion-active div.active-faq .container .row {
    background-color: #673CF6;
}

.modal-body {
    padding: 15px 0px 0px 0px;
}

.modal-body {
    margin-right: 15px;
}

.iq-accordion-modal {
    background-color: #00000005;
    border-top: 1px dashed gray;
    padding: 40px;
}

.iq-accordion-modal .iq-accordion-block {
    width: 100%;
    height: 100%;
}

.iq-accordion .iq-accordion-block {
    width: 100%;
    height: 100%;
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

.active-faq {
    border-radius: 8px 8px 0px 0px;
}

#modal {
    visibility: hidden;
}

div.active-faq .container .row {
    background-color: #673CF6;
    color: white;
    font-size: 29px;
    font-family: Darker Grotesque;
    font-weight: 700;
    word-wrap: break-word
}

.content-title {
    padding: 40px 40px 0 40px;
}

.content-title h2 {
    color: #222222;
    font-size: 50px;
    font-family: Darker Grotesque;
    font-weight: 800;
    word-wrap: break-word
}

.pendingImage {
    background: #673CF6;
    border-radius: 9999px;
    padding: 3px 6px 6px 6px;
}

.rejectedImage {
    background: #E35D5D;
    border-radius: 9999px;
    padding: 3px 6px 6px 6px;
}

.content-title p {
    color: #222222;
    font-size: 18px;
    font-family: Montserrat;
    font-weight: 500;
    word-wrap: break-word
}

.step-title {
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

.accordion-title span {
    color: white;
    font-size: 29px;
    font-family: Darker Grotesque normal;
    font-weight: 600;
    word-wrap: break-word;
    padding-left: 30px;
}

.blue-btn {
    background-color: #673CF6;
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
    word-wrap: break-word
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
    margin-top: 15px;
    cursor: pointer;
}

span.title {
    color: white;
    font-size: 29px;
    font-family: Darker Grotesque;
    font-weight: 700;
    word-wrap: break-word
}

.step-detail {
    color: #222222;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 500;
    word-wrap: break-word
}

.step-box {
    padding: 30px 30px 0px 30px;
    border: 1px #EDEFFD solid;
    border-radius: 8px;
}

.step-index {
    padding-left: 5px;
    color: #D6D6D6;
    font-size: 34px;
    font-family: Darker Grotesque normal;
    font-weight: 700;
    word-wrap: break-word
}

section .container {
    float: left;
}

.modal-dialog {
    max-width: 50%;
}

.step-status {
    padding: 5px;
}

input.iban-input {
    height: 40px;
}

.step-content {
    border: 1px #EDEFFD solid
}
</style>