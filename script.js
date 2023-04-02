let valuedisplays = document.querySelectorAll(".num");
let intrerval =4000;

valuedisplays.forEach((valuedisplay) => {
  let startvalue = 0;
  let endValue = parseInt(valuedisplay.getAttribute("data-val"));
  let duration = Math.floor(intrerval / endValue);
  let counter = setInterval(function(){
    startvalue +=1;
    valuedisplay.textContent = startvalue;
    if(startvalue == endValue){
      clearInterval(counter);
    }
  },duration
  );
});