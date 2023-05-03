  function writeComment() {

      var comtext=document.getElementById("comm");

     if(comtext.style.display==="block")
     comtext.style.display="none";
     else {
       comtext.style.display="block";
  }}
  function writeComment1() {

      var comtext=document.getElementById("commm");

     if(comtext.style.display==="block")
     comtext.style.display="none";
     else {
       comtext.style.display="block";
  }}
  function writeComment2() {

      var comtext=document.getElementById("commmm");

     if(comtext.style.display==="block")
     comtext.style.display="none";
     else {
       comtext.style.display="block";
  }}


function wrtiePost(){
  document.getElementById('pcont').style.display='none';
document.getElementById('post').style.display='block';
document.getElementById('bpost').style.display='inline-block';
document.getElementById('back').style.display='inline-block';

}
function backToPost(){
  document.getElementById('pcont').style.display='flex';
document.getElementById('post').style.display='none';
document.getElementById('bpost').style.display='none';
document.getElementById('back').style.display='none';
}
