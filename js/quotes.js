const fun_facts = [
  {
    fun_fact: "전 세계에 약 700개의\n프로그래밍 언어가 있습니다.",
  },
  {
    fun_fact: "코딩 작업의 약 70%는\n기술과 전혀 관련이 없습니다.",
  },
  {
    fun_fact: "세계 최초의 컴퓨터 프로그래머는\n저명한 여성 수학자였습니다.",
  },
  {
    fun_fact: "최초의 컴퓨터 바이러스는\n1982년에 만들어졌습니다.",
  },
  {
    fun_fact: "최초의 프로그래밍 언어는\n포트란이라고 불렸습니다.",
  },
  {
    fun_fact: "HTML은\n프로그래밍 언어가 아닙니다.",
  },
  {
    fun_fact: "최초의 컴퓨터 게임은\n1961년에 만들어졌습니다.",
  },
  {
    fun_fact: "버그라는 용어는\n실제로 곤충에서 영감을 받았습니다.",
  },
  {
    fun_fact: "많은 프로그래밍 언어가\n동일한 구조를 가지고 있습니다.",
  },
  {
    fun_fact: "최초의 컴퓨터는\n전기를 사용하지 않았습니다.",
  },
  {
    fun_fact:
      "앨런 튜링은 튜링 테스트를\n만들었습니다. 잘 알려진 예는 CAPTCHA입니다.",
  },
  {
    fun_fact: "7세 이하의 어린이도\n코딩을 배울 수 있습니다.",
  },
  {
    fun_fact: "가장 어린 파이썬 프로그래머는\n아르함 옴 탈사니아로, 6세입니다.",
  },
  {
    fun_fact: "컴퓨터 프로그래머는 가장\n빠르게 성장하는 직업 중 하나입니다.",
  },
];

const fact = document.querySelector("#fun_fact span");
const todaysFact = fun_facts[Math.floor(Math.random() * fun_facts.length)];

fact.innerText = todaysFact.fun_fact;
