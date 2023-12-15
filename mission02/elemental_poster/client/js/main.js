/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const navigation = getNode(".navigation");
const visualImage = getNode(".visual img");
const body = getNode("body");
const nickName = getNode(".nickName");
const charVoice = getNode(".charVoice");

function handleClick(e) {
  let li = e.target.closest("li");
  if (!li) return;
  let index = li.dataset.index;

  const list = Array.from(navigation.children);
  list.forEach(li => removeClass(li, "is-active"));

  setImage(index);
  setBgColor(index);
  setNameText(index);
  setCharVoice(index);
  addClass(li, "is-active");
}

function setImage(index) {
  const dataName = data[index - 1].name.toLowerCase();
  visualImage.src = `./assets/${dataName}.jpeg`;
  visualImage.alt = data[index - 1].alt;
}

function setBgColor(index) {
  body.style.background = `linear-gradient(to bottom, ${
    data[index - 1].color
  })`;
}

function setNameText(index) {
  nickName.textContent = data[index - 1].name;
}

function setCharVoice(index) {
  const dataName = data[index - 1].name.toLowerCase();
  charVoice.src = `./assets/audio/${dataName}.mp3`;
  charVoice.play();
}

navigation.addEventListener("click", handleClick);
