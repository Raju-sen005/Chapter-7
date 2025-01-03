// Chapter-7 Practice -set
// P-1

//[first element ka color js se change krne k liye]
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";
//[first or last element ka color js se change krne k liye]
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "White";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "White";
//[kisi bhi tag name ka background js se change krne k liye]
Array.from(document.getElementsByTagName("nav")).forEach((element) => {
  element.style.background = "red";
});
