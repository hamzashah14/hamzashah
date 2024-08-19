var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    // Top Button
    
    let calcScrollValue = () => {
      let scrollProgress = document.getElementById("progress");
      let progressValue = document.getElementById("progress-value");
      let pos = document.documentElement.scrollTop;
      let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 360) / calcHeight);
      if(pos > 100){
        scrollProgress.style.display = "grid";
      } else {
        scrollProgress.style.display = "none";
      }
      scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
      });
      scrollProgress.style.background = `conic-gradient(from 0deg, #83b4ff 0deg, #83b4ff ${scrollValue}deg, #d7d7d7 ${scrollValue}deg)`;
    };
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;

    // Menu JavaScript

    var sidem = document.getElementById("sidemenu");

    function openmenu(){
        sidem.style.right = "0";
    }
    function closemenu(){
        sidem.style.right = "-200px";
    }

  // Preloader

var loading = document.getElementById('preloader');
function loadFunction() {
  loading.style.display = "none";
}
document.addEventListener("DOMContentLoaded", loadFunction);
