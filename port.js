var barclicked=document.querySelectorAll(".navbar a");
// console.log(barclicked);
for(var i=0;i<barclicked.length;i++){
    barclicked[i].addEventListener("click",function(event){
        event.preventDefault();
        var targetsectionID=this.textContent.trim().toLowerCase();
        // console.log(targetsectionID);
        var targetsection=document.getElementById(targetsectionID);
        // console.log(targetsection);
        // var targetsectioncoordinates=targetsection.getBoundingClientRect();
        var interval=setInterval(function(){
            var targetsectioncoordinates=targetsection.getBoundingClientRect();
              if(targetsectioncoordinates.top<=0){
                clearInterval(interval);
                return;
               
                
            }
            window.scrollBy(0,50);
        },20);                         
    });
} 
var progressBars=document.querySelectorAll('.skill-name>div');
var skillContainer=document.getElementById('skill-container');
window.addEventListener('scroll',checkScroll);
var animationdone=false;

function intialisebars(){
  for(let bar of progressBars){
    bar.style.width= 0+'%';
  }
}
intialisebars();
function fillbars(){
  for(let bar of progressBars){
    let targetwidth = bar.getAttribute('data-bar-width');
    let currentwidth=0;
    let inter=setInterval(function(){
      if(currentwidth>targetwidth){
        clearInterval(inter);
        return;
      }
      currentwidth++;
      bar.style.window=currentwidth+'%';
    },5);
  }
}

function checkScroll(){
  var coordinates=skillContainer.getBoundingClientRect();
  if( !animationdone && coordinates.top<window.innerHeight){
    animationdone=true;
    console.log('visible')  
    fillbars();
  }
}

