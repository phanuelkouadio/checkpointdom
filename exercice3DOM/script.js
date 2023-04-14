question1

function showHxContent(num){
    let hx="title"+num;
    let div=document.getElementById(hx);
        if(div.style.display==="none"){
            div.style.display="block";
        }else{
            div.style.display="none";
        }
}


question2


function hideAllDivs() {
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.display = "none";
    }
  }


question3


function alertTitle() {
    var num = document.getElementById("title").value;
    var hx = "h1:nth-of-type(" + num + ")";
    var title = document.querySelector(hx).textContent;
    alert(title);
  }

  

  question4

  function deleteTitle() {
    var num = document.getElementById("title").value;
    var hx = "h1:nth-of-type(" + num + ")";
    var title = document.querySelector(hx);
    while (title.firstChild) {
      title.removeChild(title.firstChild);
    }
  }


  question5

  function defineTitle() {
    var titleInput = document.getElementById("title");
    var currentTitle = document.getElementById("title").nextSibling;
    if (currentTitle && currentTitle.nodeType === Node.TEXT_NODE) 
      titleInput.parentNode.removeChild(currentTitle);
    }
    var newTitle = document.createTextNode("Nouveau titre");
    titleInput.parentNode.insertBefore(newTitle, titleInput.nextSibling);
  
  



