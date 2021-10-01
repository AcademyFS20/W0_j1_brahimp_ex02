var btn = document.querySelectorAll('button');
//console.log(btn)
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', () => {
    window.open("https://www.w3schools.com","_blank");
  }
  )
}



