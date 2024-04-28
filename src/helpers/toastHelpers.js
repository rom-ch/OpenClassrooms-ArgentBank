export const generateBackgroundColor = (type) => {
  switch (type) {
    case "SUCCESS":
      return "bg-green-500";
    case "INFO":
      return "bg-sky-500";
    case "WARNING":
      return "bg-orange-400";
    case "ERROR":
      return "bg-red-500";
  }
};

export const toastPosition = (position) => {
  switch (position) {
    case "top-right":
      return "top-2 right-2";
    case "top-left":
      return "top-2 left-2";
    case "bottom-right":
      return "bottom-2 right-2";
    case "bottom-left":
      return "bottom-2 left-2";
    default:
      return;
  }
};

export const toastAnimation = (position) => {
  switch (position) {
    case "top-right":
      return " animate-toastInRight";
    case "top-left":
      return "animate-toastInLeft";
    case "bottom-right":
      return "animate-toastInRight";
    case "bottom-left":
      return "animate-toastInLeft";
    default:
      return;
  }
};
