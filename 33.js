// Notes of DOM Collection=>
// 1.They are read-only

// Siblings=>
	// same parent ke children ko sibling khte
console.log(document.body.firstChild)
a= document.body.firstChild
console.log(a.parentNode)//[ye tbhi return krega jab koi node h]
console.log(a.parentElement)//[ye kvl valid html ko return krega]
console.log(a.firstChild.nextSibling)