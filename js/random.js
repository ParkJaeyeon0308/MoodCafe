function flipflower() {
    var x = parseInt(Math.random() * 10);
    switch(x){
      case 1: flowersrc="../image/flower1.png"; break
      case 2: flowersrc="../image/flower2.png"; break
      case 3: flowersrc="../image/flower3.png"; break
      case 4: flowersrc="../image/flower4.png"; break
      case 5: flowersrc="../image/flower5.png"; break
      case 6: flowersrc="../image/flower6.png"; break
      case 7: flowersrc="../image/flower7.png"; break
      case 8: flowersrc="../image/flower8.png"; break
      case 9: flowersrc="../image/flower9.png"; break
      default:alert("삐빅")
  
    }
    document.flowerform.face.value = '꽃 선택중';
    ID = window.setTimeout("changeflower();", 2000);
    }
    function changeflower() {
    document['flower'].src=flowersrc;
    document.flowerform.face.value = '당신의 꽃';
    }
  
    function first(){
      document['flower'].src = "../image/flowermany.jpg";
      document.flowerform.face.value = '초기화 되었습니다.';
    }
    function myFunction(){
      var element = document.getElementById("myDIV");
      element.classList.toggle("mystyle");
    }