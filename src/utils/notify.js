import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (name) =>
  toast(`Вы добавили в корзину: ${name}`, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

export default notify;
