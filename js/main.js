let calcSalary=document.querySelector("button.click")
calcSalary.addEventListener("click",function(){
    let fullName = document.querySelector("input[name=fullName]").value
    let fatherName = document.querySelector("input[name=fatherName]").value
    let motherName = document.querySelector("input[name=motherName]").value
    let age = Number(document.querySelector("input[name=age]").value)
    let codeMelli = Number(document.querySelector("input[name=codeMelli]").value)
    let degree = document.querySelector("select[name=degree").value
    let address = document.querySelector("input[name=address").value
    let rel = document.querySelector("input[name=rel").value
    let gender = document.querySelector("input[name=gender").value
    let colorEyes = document.querySelector("input[name=colorEyes").value
    let colorHair = document.querySelector("input[name=colorHair").value
    let footSize = document.querySelector("input[name=footSize").value
    let height = document.querySelector("input[name=height").value
    let weight = document.querySelector("input[name=weight").value

    let root=document.querySelector("div#root")
    root.innerHTML=`<h2>fullName :${fullName}<br/>fatherName :${fatherName}<br/>motherName :${motherName}<br/>Age :${age}<br/>codeMelli :${codeMelli}<br/>degree :${degree}<br/>address :${address}<br/>rel :${rel}<br/>gender :${gender}<br/>color-eyes :${colorEyes}<br/>color-hair :${colorHair}<br/>footSize :${footSize}<br/>Height :${height}<br/>Weight :${weight}<br/>`
})