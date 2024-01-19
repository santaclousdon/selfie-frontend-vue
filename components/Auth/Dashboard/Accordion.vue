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
    </section>
</template>

<script>

export default {
    name: 'Accordion',
    data() {
        return {
            name: 'Emily',
            pendingImage: require('../../../assets//images/pending.png'),
            rejectedImage: require('../../../assets/images/rejected.png'),
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
    mounted() { }
}
</script>
<style scoped >
section {
    padding-bottom: 0%;
}

.accordion-active div.active-faq .container .row {
    background-color: #673CF6;
}

.iq-accordion .iq-accordion-block {
    width: 100%;
    height: 100%;
    background: white;
}

.active-faq {
    border-radius: 8px 8px 0px 0px;
}

div.active-faq .container .row {
    background-color: #673CF6;
    color: white;
    font-size: 29px;
    font-family: Darker Grotesque;
    font-weight: 700;
    word-wrap: break-word
}

.content-title h2 {
    color: #222222;
    font-size: 50px;
    font-family: Darker Grotesque;
    font-weight: 800;
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
    border-radius: 100px;
    color: white;
    padding: 2px 5px;
    cursor: pointer;
}

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
    word-wrap: break-word;
}

.step-box {
    padding: 30px 30px 0px 30px;
    border: 1px #EDEFFD solid;
    border-radius: 8px;
}

.pendingImage {
    background: #673CF6;
    border-radius: 50%;
    padding: 3px 7px 7px 7px;
}

.rejectedImage {
    background: #E35D5D;
    border-radius: 50%;
    padding: 5px 7px 7px 7px;
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

.step-status {
    padding: 5px;
}

.step-content {
    border: 1px #EDEFFD solid
}
</style>