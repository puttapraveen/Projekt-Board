var a=document.getElementById("input_box").value;

function add_task(){
var firebaseRef=firebase.database().ref();
firebaseRef.child("Names").set(a);

}