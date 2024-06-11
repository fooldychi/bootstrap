

$("#navbtn").click(function(){
    $("#navicon").toggleClass('fa-times')
    $("#navicon").toggleClass('fa-navicon')
    $("#collapse").slideToggle("slow");
})


window.onscroll=()=>{
    if(window.scrollY>0){
        $("#nav").addClass('active');
        $("#collapse").fadeOut("slow");
    }
    else{
        $("#nav").removeClass('active')
    }
}