var count = 0; matter = 0;
function Doll(){
  document.doll.src = "image/buttonback.png";
  doll = prompt("인형을 리페인팅 할때는 공장에서 만든 얼굴을 지우는데 지우는 도구는?", "♥");
  if((doll) == "아세톤"){
    alert("Ding Dong Dang");
    count++; 
  }
  else{
    alert("DDANG!!!!");
  }
  matter++;
}
function Cake(){
  document.cake.src = "image/buttonja.png";
  cake = prompt("마카롱을 만들때 쫀뜩하게 만들기 위해 하는 기법은 무엇입니까?", "♥")
  if(cake == "마카로나쥬"){
    alert("Ding Dong Dang");
    count++; 
  }
  else{
    alert("DDANG!!!!");
  }
  matter++;
}
function Paint(){
  document.paint.src = "image/buttonra.png";
  paint = prompt("디즈니 공주들 중에 가장 첫번째 나온 공주는 누구인가요?", "♥")
  if(paint == "신데렐라"){
    alert("Ding Dong Dang");
    count++; 
  }
  else{
    alert("DDANG!!!!");
  }
  matter++;
}
function Munhack(){
  document.munhack.src = "image/buttonred.png";
  munhack = prompt("문학 책 중 OO과 함께 사라지다에서 OO은 무엇인가요?", "♥")
  if(munhack == "바람"){
    alert("Ding Dong Dang");
    count++; 
  }
  else{
    alert("DDANG!!!!");
  }
  matter++;
}
function Drink(){
  document.drink.src = "image/buttonsin.png";
  drink = prompt("카페라떼에서 위에 하얀 거품은 무엇 인가요?", "♥")
  if(drink == "우유거품"){
    alert("Ding Dong Dang");
    count++; 
  }
  else{
    alert("DDANG!!!!");
  }
  matter++;
}