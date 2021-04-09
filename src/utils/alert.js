import Swal from "sweetalert2"
const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 2000,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

export default Toast;