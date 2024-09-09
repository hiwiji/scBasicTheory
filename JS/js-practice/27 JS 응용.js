// 태그를 가져오는 방법(아이디)
//const timeElement = document.getElementById("time");

//timeElement.style.color = "tomato";
//timeElement.style.backgroundColor = "green";
//timeElement.innerText = "01:00";

//태그를 가져오는 다른 방법(쿼리셀렉트)
const timeElement = document.querySelector(".time");
//qeurySelector는 id는 #, class는 . 으로 구분해 줌;

// function 실행될_함수() {
//   timeElement.style.color = "orange";
//   timeElement.innerText = "12:00";
// }

// timeElement.addEventListener("click", 실행될_함수);

function 색깔을_바꿔주는_함수() {
  if (timeElement.style.color === "orange") {
    timeElement.style.color = "blue";
  } else {
    timeElement.style.color = "orange";
  }
}

timeElement.addEventListener("click", 색깔을_바꿔주는_함수);

//timeElement.addEventListener("click", 클릭시_실행될_함수);
//timeElement.addEventListener("mouseover", 실행될_함수);

//window.addEventListener("copy", 실행될_함수);
//window.addEventListener("resize", 실행될_함수);

// 브라우저 제목 바꾸기
document.title = "❤️❤️❤️❤️❤️❤️";
