
//function that change the first button's text
function changeButtononeContext(element){
  var buttonone = element.className;
  if(buttonone ==="first"){
    element.innerHTML = "Add Border";
    element.className ="notfirst";
  }else{
    element.innerHTML = "Remove Border";
    element.className ="first";
  }
}
//function that change the second button's text
function changeButtontwoContext(element){
  var buttontwo = element.className;
  if(buttontwo ==="second"){
    element.innerHTML = "Make List Items Red";
    element.className ="notfirst";
  }else{
    element.innerHTML = "Make List Items Green";
    element.className ="second";
  }
}
//function that make border
function makeBorder(element){
  var border = element.className;
  if(border === "border")
    element.className = "noborder";

  else{
    element.className = "border";
  }
}
//function that change the color
function toggleColor(element){
  var color = element.className;
  if(color === "red")
  {element.className = "green";
  }
  else{
    element.className = "red";
  }
}

//this sets buttone
var buttonone = document.getElementById("first");
  buttonone.addEventListener("click",function(){
    //this change the context of the button
    var context = document.getElementById("first");
    changeButtononeContext(context);

    //this change the border of the paragraph
    var paragraph0 = document.getElementById("noborder0");
    makeBorder(paragraph0);
    var paragraph1 = document.getElementById("noborder1");
    makeBorder(paragraph1);
    var paragraph2 = document.getElementById("noborder2");
    makeBorder(paragraph2);
    var paragraph3 = document.getElementById("noborder3");
    makeBorder(paragraph3);
})
//this sets button two
var buttontwo = document.getElementById("second");
  buttontwo.addEventListener("click",function(){
    //this change the context of the button
    var context = document.getElementById("second");
    changeButtontwoContext(context);

    //this change the list item's color
    var list0 = document.getElementById("notgreen0");
    toggleColor(list0);
    var list1 = document.getElementById("notgreen1");
    toggleColor(list1);


})