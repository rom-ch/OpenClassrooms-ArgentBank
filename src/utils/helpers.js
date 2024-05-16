export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

// export function isValidEmail(email) {
//   return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
//     email,
//   );
// }

export function emptyStorages() {
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");
}

export const generateBackgroundColor = (type) => {
  switch (type) {
    case "success":
      return "bg-green-500";
    case "info":
      return "bg-sky-500";
    case "warning":
      return "bg-orange-400";
    case "error":
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
