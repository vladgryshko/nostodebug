let currentUrl = window.location.href
const param = "nostodebug=true"
let newUrl = currentUrl.includes("?") ? currentUrl + "&" + param : currentUrl + "?" + param
window.location.href = newUrl