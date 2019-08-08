var firebaseConfig = {
    apiKey: "AIzaSyBQeWhFSZ1tR_F48QQZg5unQnpkHbwixKQ",
    authDomain: "my-dbase.firebaseapp.com",
    databaseURL: "https://my-dbase.firebaseio.com",
    projectId: "my-dbase",
    storageBucket: "",
    messagingSenderId: "903858839706",
    appId: "1:903858839706:web:ffbe0f4065c7ca3c"
  };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var ref = database.ref("contacts");
function getData(){
  var data = {
    fullname:document.getElementById('fname').value,
    email:document.getElementById('mail').value,
    message: document.getElementById('msge').value
  }
  ref.push(data);
}
$(document).ready(function(){
  $('#submitbtn').click(function(){
    var fullname=$('#fname').val();;
    var  email=$('#mail').val();
    var message=$('#msge').val();
    $('ul#list').append("<li id='mess'>Comment from:<strong>"+fullname+"</strong></li>") 
   $('ul#list').append("<li id='ms' >"+ message+"</li>")
  
     fullname=$('#fname').val('');;
     email=$('#mail').val('');
     message=$('#msge').val('');
  });


});