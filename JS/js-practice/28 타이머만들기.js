/* function sayHello() {
  console.log("안녕하세요!!");
}*/

//주기적으로 출력
//setInterval(sayHello, 1000); //1초는 1000

//1번만 출력됨
//setTimeout(sayHello, 1000);

// function setTime() {
//   const time = new Date();
//   const 분 = time.getMinutes().toString();
//   const 초 = time.getSeconds().toString();
//   const timeH1 = document.querySelector(".time");

//   timeH1.innerText = `${분.padStart(2, "0")}:${초.padStart(2, "0")}`;
// }

// `${}` 백틱을 쓰게 되면 안에 변수를 넣을 수 있음
//그래서 위와 같이 분초 사용하면 타이머가 활성화됨
// 기존처럼 ""를 쓰면 문자로 인색해서 적은거 그대로 출력됨

//주기성
// setInterval(setTime, 1000);

//==========  padStart함수 (문자열로)

"1".padStart(2, 0);

//함수 안에 첫번째 값은 max-length
//함수 안에 두번째 값은 어떤 문자열로 채울거냐

//앞에 이 문자열이 한글자면 앞에 0을 붙여주고,
//앞에 문자열이 2개면, 그대로 표시한다.

// PadStart는 숫자를 지원해주지 않음
// 그래서 new Date().getMinutes().padStart('2',"0")
// 이런식으로 쓰는데 바로 붙이면 에러가남

// 그래서 숫자를 문자열로 바꿔줘야함 == toString 함수

const 시작_시간 = new Date();

function setTime() {
  const 현재_시간 = new Date();
  const 흐른_시간 = new Date(현재_시간 - 시작_시간);

  const 분 = 흐른_시간.getMinutes().toString();
  const 초 = 흐른_시간.getSeconds().toString();
  const timeH1 = document.querySelector(".time");
  timeH1.innerText = `${분.padStart(2, "0")}:${초.padStart(2, "0")}`;
}

setInterval(setTime, 1000);
