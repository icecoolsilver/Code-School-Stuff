console.log("hello world");

let theBase = document.querySelectorAll('.portfolio-grid-item')

//console.log(theBase)

let UIlink = document.querySelector("#ui")
let ALLlink = document.querySelector("#all")
let productlink = document.querySelector("#product")

//console.log(productlink)

function featureditem(selecteditem){
   // console.log(selecteditem)

    for(let i=0; i<theBase.length; i++){

        console.log(theBase[i].classList.value)

        if(selecteditem=="all"){theBase[i].style.display="block"}
        else if(!theBase[i].classList.value.includes(selecteditem)){

            theBase[i].style.display="none"
        }else{theBase[i].style.display="block"
    }
    }
}


productlink.addEventListener("click", function(e){
    e.preventDefault()
    featureditem(e.target.id)
})
ALLlink.addEventListener("click", function(e){
    e.preventDefault()
    featureditem(e.target.id)
})
UIlink.addEventListener("click", function(e){
    e.preventDefault()
    featureditem(e.target.id)
})