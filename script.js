function startMagic(){
  let name = document.getElementById("nameInput").value;
  let result = document.getElementById("result");

  if(name.trim() === ""){
    result.innerHTML = "⚠️ Please enter your name";
    return;
  }

  result.innerHTML = `🎉 Happy New Year ${name}! 🎉<br>✨ May all your dreams come true ✨`;

  for(let i=0;i<30;i++){
    createFirework();
  }
}

function createFirework(){
  let spark = document.createElement("div");
  spark.classList.add("spark");

  spark.style.left = Math.random() * window.innerWidth + "px";
  spark.style.top  = Math.random() * window.innerHeight + "px";
  spark.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;

  document.body.appendChild(spark);

  setTimeout(()=>{
    spark.remove();
  },1000);
}
