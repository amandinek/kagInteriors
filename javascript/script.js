// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
$(document).submit(function(){
$(".btn").click(function(){
    $("#id01").show();
})

})

$(document).ready(function () {
    // $("#frm-0").submit(function(event){ 
    //     event.preventDefault();
   $(".interior-design").click(function(){
    $("#frm-0").show();
   
   })
     $("#next").click(function(){
        alert('Thank you for ordering we will contact you.');
    })
})
