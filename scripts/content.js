let currentUrl = window.location.href
const param = "nostodebug=true"
let newUrl = currentUrl.includes("?") ? currentUrl + "&" + param : currentUrl + "?" + param
console.log("hello " + newUrl)
window.location.href = newUrl