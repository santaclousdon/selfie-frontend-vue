import Swal from "sweetalert2";
import "@sweetalert2/theme-bootstrap-4";
const $swal = {
    install: (Vue, options) => {
        Vue.config.globalProperties.$swal = Swal.mixin(options);
    },
}
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use($swal, {
        reverseButtons: true,
        confirmButtonText: "confirmText",
        cancelButtonText: "cancelText",
        confirmButtonColor: "#84bd00",
    });
});