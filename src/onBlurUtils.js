import Swal from "sweetalert2";

export const validateSelection = (value, message) => {
  if (!value) {
    Swal.fire({
      icon: "warning",
      title: "Selection Missing",
      text: message,
    });
  }
};
