// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// const appendAlert = (message, type) => {
//   const wrapper = document.createElement('div')
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//   ].join('')

//   alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
//     appendAlert('Nice, you triggered this alert message!', 'success')
//   })
// }

//CHANGING THE TITLE COLOR BY CLASS
// let ctitle = document.getElementsByClassName("card-title")[0]//[kisi element ka color class se change krne ke liye]
// ctitle.style.color = "red"

//CHANGING THE TITLE COLOR BY ID
// let ctitle = document.getElementById("first-card"); //[kisi element ka color Id se change krne ke liye]
// ctitle.style.color = "blue";

//CHANGING THE TITLE COLOR BY QUERYSELECTOR
let ctitle = document.querySelectorAll(".card-title");//[iska use sbhi class ya Id ke color ko ek sa banane k liye kiya jata h]
ctitle[0].style.color = "blue";//[iska use selement k index k zriye color change kiya jata h]
ctitle[1].style.color = "red";
ctitle[2].style.color = "green";
console.log(ctitle)

document.querySelector(".this").style.color = "white"
document.querySelector(".this").style.background = "red"

//CHANGING THE TITLE COLOR BY TAG NAME
console.log(document.getElementsByTagName("a"))//tag ko kitni bar use hua h
console.log(document.querySelector(".card").getElementsByTagName("a"))//collection of html
console.log(document.getElementsByTagName("search"))//by tag name
