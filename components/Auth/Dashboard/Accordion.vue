<template>
    <section>
        <div class="container">
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
                        <button type="button" id="closeModal" class="close" data-dismiss="modal" aria-label="Close"><i
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
                                            <input type="text" class="iban-input" name="FirstName" @input="HandleValidate"
                                                v-model="personalInfo.firstName">
                                        </div>
                                        <div class="sign-content col-lg-6 col-md-6 col-sm-12">
                                            <label for="LastName">Last name</label>
                                            <input type="text" class="iban-input" name="LastName" @input="HandleValidate"
                                                v-model="personalInfo.lastName">
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="sign-content col-lg-4 col-md-4 col-sm-12">
                                            <label for="birthDate">Date of birth</label>
                                            <select type="select" name="birthDate" class="form-control text mt-3"
                                                @change="HandleValidate" placeholder="" v-model="date.day">
                                                <option value="0">Select Day</option>
                                                <option v-for="(day, index) in days" :key="index" :value="day">{{ day }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="sign-content col-lg-4 col-md-4 col-sm-12">
                                            <label for="month" style="visibility: hidden;">Date of
                                                birth</label>
                                            <select type="select" name="month" class="form-control text mt-3"
                                                @change="HandleValidate" placeholder="" v-model="date.month">
                                                <option value="0">Select Month</option>
                                                <option v-for="(month, index) in months" :key="index" :value="month">{{
                                                    month }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="sign-content col-lg-4 col-md-4 col-sm-12">
                                            <label for="birthYear" style="visibility: hidden;">Date of
                                                birth</label>
                                            <select type="select" name="birthYear" class="form-control text mt-3"
                                                @change="HandleValidate" placeholder="" v-model="date.year">
                                                <option value="0">Select Year</option>
                                                <option v-for="(year, index) in years" :key="index" :value="year">{{ year }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="sign-content col-lg-12 col-md-12 col-sm-12">
                                            <label for="country">Country of residence</label>
                                            <select name="country" class="form-control text mt-3" @change="HandleValidate"
                                                v-model="personalInfo.country">
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
                                                <input class="form-check-input" type="checkbox" id="flexCheckIndeterminate"
                                                    v-model="personalInfo.check">
                                                <label class="form-check-label col-lg-12 col-md-12" @click="HandleValidate"
                                                    for="flexCheckIndeterminate">
                                                    I hereby declare that I have filled in my personal
                                                    information
                                                    truthfully.
                                                </label>
                                                <div class="invalid-feedback">
                                                    You must agree before submitting.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <a @click="HandleSubmit" class="blue-btn button btn-sm">
                                            <div class="row justify-content-center align-items-center">
                                                <span class="label-text mr-3">Complete registration</span>
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

<script defacult>
import jquery from 'jquery';

export default {
    name: 'Accordion',
    data() {
        return {
            name: '',
            validInfo: true,
            pendingImage: require('../../../assets/images/pending.png'),
            rejectedImage: require('../../../assets/images/rejected.png'),
            days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            years: Array.from({ length: 75 }, (v, k) => k + 1950),
            items: [
                {
                    title: 'Fill in your payment information',
                    status: 'Pending',
                    detail: ''
                },
                {
                    title: 'Upload your identification',
                    status: 'Rejected',
                    detail: ''
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
            ],
            date: {
                day: 0,
                month: 0,
                year: 0
            },
            personalInfo: {
                firstName: "",
                lastName: "",
                birth: "",
                country: "",
                filledInfo: false,
                check: false
            }
        }
    },
    mounted() {
        jQuery('#exampleModal').on('click', '.modal-backdrop', function (e) {
            e.preventDefault();
        });

        jQuery(document).on('keydown', function (e) {
            if (e.key === "Escape") {
                e.preventDefault();
            }
        });

        if (!this.$store.$auth.$state.user.filledInfo) {
            // if (!this.$store.state.userInfo.filledInfo) {
            document.getElementById('modal').click();
        }

        const user = this.getUserInfo;
        console.log("user", user)
        this.items[0].status = user.paymentStatus;
        this.items[1].status = user.IDStatus;
        this.items[1].detail = user.IDStatus == "Empty" ? "Still not uploaded." : "Must be government issued ID";
        this.items[2].status = user.legalSigned;
        this.items[4].status = ""

    },
    computed: {
        getUserInfo() {
            return this.$store.getters.getUserInfo;
        }
    },
    methods: {
        async HandleSubmit() {

            this.HandleValidate()

            if (!this.validInfo) return

            else {
                this.personalInfo.birth = this.date.day + "/" + this.date.month + "/" + this.date.year
                this.personalInfo.filledInfo = true

                const res = await this.$axios.$post("/api/auth/personal", {
                    info: this.personalInfo
                });

                // const userdata = { ...this.personalInfo, email: this.$store.$auth.$state.user.email, password: this.$store.$auth.$state.user.password }
                const userdata = { ...this.$store.$auth.$state.user, ...this.personalInfo }

                document.getElementById('closeModal').click();
                this.$store.commit('setUserInfo', userdata)
                this.$router.push('personal-details')
            }

        },

        HandleValidate() {

            if (this.personalInfo.firstName == "") {
                jQuery("input[name='FirstName']").addClass('err')
                this.validInfo = false
            }
            else {
                jQuery("input[name='FirstName']").removeClass('err')
                this.validInfo = true
            }
            if (this.personalInfo.lastName == "") {
                jQuery("input[name='LastName']").addClass('err')
                this.validInfo = false
            }
            else {
                jQuery("input[name='LastName']").removeClass('err')
                this.validInfo = true
            }

            if (this.date.day == 0) {
                jQuery("select[name='birthDate']").addClass('err')
                this.validInfo = false
            }
            else {
                jQuery("select[name='birthDate']").removeClass('err')
                this.validInfo = true
            }

            if (this.date.month == 0) {
                jQuery("select[name='month']").addClass('err')
                this.validInfo = false
            }
            else {
                jQuery("select[name='month']").removeClass('err')
                this.validInfo = true
            }

            if (this.date.year == 0) {
                jQuery("select[name='birthYear']").addClass('err')
                this.validInfo = false
            }
            else {
                jQuery("select[name='birthYear']").removeClass('err')
                this.validInfo = true
            }

            if (this.personalInfo.country == 0) {
                jQuery("select[name='country']").addClass('err')
                this.validInfo = false
            }
            else {
                jQuery("select[name='country']").removeClass('err')
                this.validInfo = true
            }

            if (!this.personalInfo.check) {
                this.validInfo = false
                // jQuery("label.form-check-label").css('color', 'red')
            }
            else {
                // jQuery("label.form-check-label").css('color', 'black')
                this.validInfo = true
            }
        }
    }
}
</script>
<style scoped >
section {
    padding-bottom: 0%;
}

/* .close {
    display: none;
} */
.accordion-active div.active-faq .container .row {
    background-color: #673CF6;
}

.Pending-item {
    background: #F5F5F5;
    border-radius: 8px;
    color: #222222;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 500;
    word-wrap: break-word;
}

.Rejected-item {
    background: #E35D5D;
    border-radius: 8px;
    color: white;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 500;
    word-wrap: break-word
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

.err {
    border: 1px solid red !important;
}
</style>