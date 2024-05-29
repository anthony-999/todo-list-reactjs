import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifyAdd = () => {
  return toast.success("Add Successful!", {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

export const notifyDelete = () => {
  toast.error("Delete Successful!", {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};
