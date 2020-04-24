$("h1").click(function(){
    $("h1").css("color", "red")
})

$("button").click(function(){
    $("h1").css("color","purple")
})

$(document).keypress(function(event){
    
    $("h1").text(event.key)
})

$("h1").on("mouseover", function(){
    $("h1").css("color","black")
})

$("h1").before("<button>NEW</button>")

$("h1").after("<button>NEW</button>")