const word = document.querySelector(".words");

const words = [
  {
    sentence: "당신의 코드는 정말 LGTM하네요!",
  },
  {
    sentence: "AFK하지 말고 계속 코딩하세요.",
  },
  {
    sentence: "IIRC대로면, 이 코드는 좋은 코드네요!",
  },
  {
    sentence: "저 그 코드 ACK했어요...",
  },
];

const random_word = words[Math.floor(Math.random() * words.length)];
word.innerText = random_word.sentence;
