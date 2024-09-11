const 정답 = "APPLE";

let index = 0;
// let은 수정 가능한 변수
let attempts = 0;

function appStart() {
  const handleEnterKey = () => {
    for (let i = 0; i < 5; i++) {
      const block = document.querySelector(
        `.board-column[data-index='${attempts}${i}']`
      );

      const 입력한_글자 = block.innerText;
      const 정답_글자 = 정답[i];

      if (입력한_글자 === 정답_글자) block.style.backgroundColor = "#6AAA64";
      else if (정답.includes(입력한_글자))
        block.style.backgroundColor = "#C9B458";
      else block.style.backgroundColor = "#787C7E";

      block.style.color = "white";
    }
  };

  const handleKeydown = (event) => {
    // 값을 반환하고 함수 밖으로 나온다. 밑에 함수가 실행이 안됨.

    const key = event.key.toUpperCase(); // 키 입력시 대문자로 입력
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(
      `.board-column[data-index='${attempts}${index}']`
    );

    if (index === 5) {
      if (event.key === "Enter") handleEnterKey();
      else return;
    } else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      index++;
      // 모두 같은 표현이라 볼 수 있음
      //index += 1;
      //index = index + 1;
    }
  };

  window.addEventListener("keydown", handleKeydown);
}

appStart();
