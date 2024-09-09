const 내가오늘산거 = ["맥북", "아이폰", "아이패드", "에어팟맥스"];

// 배열은 상자
// 배열은 변수를 const로 선언하더라도, 값 변경은 가능하다.
// 상자가 const고 안에 내용물만 넣었다 뺐다 하는 느낌이라?

// 배열값 변경
//내가오늘산거[0] = "애플워치";

//만약에 상자를 변경해주고 싶으면 let으로 선언하면 된다.

// 배열값 추가
// 내가오늘산거.push("애플워치");

// console.log(내가오늘산거);

const 기현 = {
  성별: "남자",
  이름: "유기현",
  나이: "32",
};

//객체값 변경
// 기현.나이 = "3";

// 기현.사는곳 = "양주";

//console.log(기현.사는곳 === "양주");

// Undifined
//true : 있다
//false : 없다 0
//undefined : 존재하지 않는것, 정의조차 되지 않은것
//null

// =========================================

// 함수

// function 애플워치_가격() {
//   console.log("애플워치 55만원 입니다.");
//   console.log(
//     "근데 오늘은 할인 이벤트가 있어서 하나 더 사시면 10% 할인해 드려요"
//   );
// }

// 함수 : 같은 표현
//function 더하기() {}

// 화살표함수 예시
// const 더하기 = (a, b) => {
//   console.log("가격은", a + b, "입니다.");
// };

// console.log("애플워치랑 맥북 가격이 얼마에요?");
// 더하기(50, 200);

// console.log("맥북 얼마에요?");
// console.log("맥북 200만원 입니다.");

// console.log("애플워치 얼마에요?");
// 애플워치_가격();

// console.log("애플워치 얼마에요?");
// 애플워치_가격();

// 계산기 만들기
const 계산기 = {
  더하기: function (a, b) {
    return a + b;
  },
  빼기: function (a, b) {
    return a - b;
  },
  곱하기: function (a, b) {
    return a * b;
  },
  나누기: function (a, b) {
    return a / b;
  },
};

// console.log(계산기.더하기(1, 1));

// const 나누기_된_값 = 계산기.나누기(20, 2);
// console.log(나누기_된_값);

// function 할인된_가격(가격) {
//   if (가격 > 10000) return 가격 - 1000;
//   else return 가격;
// }

// console.log(할인된_가격(15000));
// console.log(할인된_가격(9000));
// console.log(할인된_가격(10000));

// 반복문
for (let i = 0; i < 10; i++) {
  console.log("이건 얼마냐구요!!");
}

const box = ["맥북", "아이패드", "아이폰"];

box = ["애플워치"];
box.push("애플워치");
box[1] = "애플워치";
box[3] = "아이맥";

console.log(box);
