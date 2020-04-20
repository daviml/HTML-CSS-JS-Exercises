let numberOfDrumBtn = document.querySelectorAll(".drum").length

for (let i = 0; i < numberOfDrumBtn; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        alert("clicado")
    })

}






