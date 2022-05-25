const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
};

const theme = localStorage.getItem('theme')
  || (tmp = Object.keys(themeMap)[0],
      localStorage.setItem('theme', tmp),
      tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
}

// document.getElementById('themeButton').onclick = toggleTheme;
var vid = document.getElementById("mivideo");
setInterval(btnsHidden, 500);
function btnsHidden() {
  if (vid.currentTime <= 15) {
    document.getElementsByClassName("btns")[0].style.display = "inline-table";
    document.getElementsByClassName("btns2")[0].style.display = "none";
    document.getElementsByClassName("btns3")[0].style.display = "none";
    document.getElementsByClassName("btns4")[0].style.display = "none";
  }else if(vid.currentTime > 15 && vid.currentTime <= 104){
    document.getElementsByClassName("btns")[0].style.display = "none";
    document.getElementsByClassName("btns2")[0].style.display = "inline-table";
    document.getElementsByClassName("btns3")[0].style.display = "none";
    document.getElementsByClassName("btns4")[0].style.display = "inline-table";
  }else if(vid.currentTime > 105 && vid.currentTime <= 155){
    document.getElementsByClassName("btns")[0].style.display = "none";
    document.getElementsByClassName("btns2")[0].style.display = "none";
    document.getElementsByClassName("btns3")[0].style.display = "inline-table";
    document.getElementsByClassName("btns4")[0].style.display = "inline-table";
  }

}
function setMenuPrincipal() { 
  vid.currentTime=5;
}
 function setFrondEnd() { 
  vid.currentTime=14;
} 
function sethtml() { 
  vid.currentTime=25;
} 
function setcss() { 
  vid.currentTime=35;
} 
function setjs() { 
  vid.currentTime=45;
} 
function setBoostrap() { 
  vid.currentTime=55;
} 
function setBackEnd() { 
  vid.currentTime=65;
} 
function setPhP() { 
  vid.currentTime=75;
} 
function setLaravel() { 
  vid.currentTime=85;
} 
function setvue() { 
  vid.currentTime=95;
} 
function setMysql() { 
  vid.currentTime=105;
} 
function setJava() { 
  vid.currentTime=115;
} 

