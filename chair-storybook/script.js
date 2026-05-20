const spreads = [
  {
    left: `
      <p class="chapter">Chair opening</p>
      <h1>林小姐的故事</h1>
      <p>今天我們不急著下診斷。先把自己放在門診現場：一位 45 歲、平常負責細心帳務工作的母親，因為持續情緒低落，在家人提醒下來到精神科門診。</p>
    `,
    right: `
      <p class="chapter">Discussion goal</p>
      <h2>我們要一起釐清什麼？</h2>
      <p>這個病例會帶我們討論：憂鬱症狀如何形成、如何鑑別診斷、抗憂鬱藥如何選擇，以及當副作用與停藥疑慮出現時，臨床該如何接住病人。</p>
    `
  },
  {
    left: `
      <p class="chapter">Scene 1</p>
      <h2>從一次工作失誤開始</h2>
      <p>兩個月前，林小姐因工作上的無心失誤與同事發生爭執。之後，她的情緒不是普通疲憊，而是逐漸陷入難以擺脫的低潮、無助與空虛。</p>
      <p class="big-quote">「我好像什麼都做不好。」</p>
    `,
    right: `
      <p class="chapter">Clinical clues</p>
      <h2>先抓症狀群</h2>
      <ul class="clue-list">
        <li>持續情緒低落，超過兩個月</li>
        <li>失去原本熱衷的志工活動</li>
        <li>注意力下降、工作出錯增加</li>
        <li>強烈自責、無價值感</li>
      </ul>
      <div class="prompt-card">
        <strong>教案問題節點：問題一</strong>
        先整理憂鬱症狀，再回到鑑別診斷：還需要詢問哪些病史或安排哪些檢查？
      </div>
    `
  },
  {
    left: `
      <p class="chapter">Scene 2</p>
      <h2>睡眠、食慾與身體沉重感</h2>
      <p>她需要兩三個小時才能入睡，即使睡著也容易醒，常在清晨四、五點醒來後再也睡不著。兩個月來食慾下降，體重減少超過三公斤，每天像背著一大袋石頭在走路。</p>
    `,
    right: `
      <p class="chapter">Somatic symptoms</p>
      <h2>憂鬱不只是一種心情</h2>
      <ul class="clue-list">
        <li>入睡困難與早醒</li>
        <li>食慾下降、體重減輕</li>
        <li>疲憊、無力、精神動作變慢的主觀感受</li>
      </ul>
      <div class="prompt-card">
        <strong>教案問題節點：問題一</strong>
        身體症狀可能來自憂鬱本身，也可能來自內分泌、營養或神經系統問題；討論時先列出要排除的原因。
      </div>
    `
  },
  {
    left: `
      <p class="chapter">Scene 3</p>
      <h2>死亡想法出現了</h2>
      <p>會談中，她多次提到自己是家人的負擔，也覺得未來不可能變好。最近一週半夜睡不著時，她常想到：「如果就這樣消失，會不會大家會輕鬆些？」</p>
    `,
    right: `
      <p class="chapter">Risk first</p>
      <h2>自殺風險不能等</h2>
      <ul class="clue-list">
        <li>被動死亡意念</li>
        <li>強烈無望感與自責</li>
        <li>家庭角色失能感</li>
        <li>孩子是目前重要保護因子</li>
      </ul>
      <div class="prompt-card">
        <strong>教案問題節點：安全評估</strong>
        在進入藥物選擇前，先確認自殺意念、計畫、可近性、過去嘗試、保護因子與是否需提高照護層級。
      </div>
    `
  },
  {
    left: `
      <p class="chapter">Scene 4</p>
      <h2>診斷前，先排除</h2>
      <p>醫師進一步檢查 thyroid function、folate、vitamin B12、腦部 CT，結果皆無明顯異常。病人否認酒精或其他成癮物質使用，也否認躁症或輕躁症病史。</p>
    `,
    right: `
      <p class="chapter">Differential diagnosis</p>
      <h2>這一步在避免誤判</h2>
      <ul class="clue-list">
        <li>身體疾病造成的憂鬱症狀</li>
        <li>藥物或物質使用相關情緒症狀</li>
        <li>bipolar depression</li>
        <li>非典型憂鬱特徵與共病焦慮</li>
      </ul>
      <div class="prompt-card">
        <strong>教案問題節點：問題一到問題二</strong>
        排除 bipolar depression 後，再討論抗憂鬱劑選擇；特別注意肝功能、睡眠、食慾與自殺風險。
      </div>
    `
  },
  {
    left: `
      <p class="chapter">Scene 5</p>
      <h2>治療開始，但問題也開始</h2>
      <p>林小姐開始服用 sertraline 後，出現腹瀉、食慾下降，原本就嚴重的失眠變得更明顯。她也擔心抗憂鬱藥會成癮，甚至害怕「吃了以後就不能停」。</p>
      <div class="timeline">
        <div><strong>Week 0</strong><span>開始 SSRI 治療</span></div>
        <div><strong>Week 1</strong><span>副作用與用藥恐懼出現</span></div>
        <div><strong>Result</strong><span>自行停藥</span></div>
      </div>
    `,
    right: `
      <p class="chapter">Bridge to report</p>
      <h2>今天的討論核心</h2>
      <div class="question-grid">
        <span>SSRI 常見副作用有哪些？</span>
        <span>臨床上如何處置，避免病人太早停藥？</span>
        <span>抗憂鬱藥到底會不會成癮？</span>
        <span>如果要停藥，怎麼安全減量？</span>
      </div>
      <div class="prompt-card">
        <strong>教案問題節點：問題四</strong>
        以林小姐自行停藥作為切入：SSRI 常見副作用為何？如何處置？抗憂鬱藥是否有成癮風險？
      </div>
    `
  },
  {
    left: `
      <p class="chapter">Scene 6</p>
      <h2>治療反應有限，風險升高</h2>
      <p>經衛教後，林小姐服藥遵囑性改善，但 sertraline 治療滿六週後症狀改善有限。醫師改用 duloxetine，四週後效果仍不佳，她的無助與無望感持續惡化。</p>
      <p class="big-quote">「什麼都無法改變，根本不值得活著。」</p>
    `,
    right: `
      <p class="chapter">Emergency turn</p>
      <h2>過量服藥後的急診線索</h2>
      <ul class="clue-list">
        <li>吞下多顆 duloxetine 後意識不清</li>
        <li>體溫 39.2°C</li>
        <li>肌肉僵硬、心跳加快、血壓升高</li>
        <li>地面散落空藥品包裝</li>
      </ul>
      <div class="prompt-card">
        <strong>教案問題節點：問題五</strong>
        病人發生了什麼事？此時要如何鑑別診斷原因，並給予急性處理？
      </div>
    `
  },
  {
    left: `
      <p class="chapter">Scene 7</p>
      <h2>急性處理後，故事還沒結束</h2>
      <p>急診支持性治療後，林小姐生命徵象穩定、意識恢復，但情緒仍顯著低落，持續出現自責、羞愧與無望感。她對自殺行為後悔，卻仍認為自己是家人的負擔。</p>
    `,
    right: `
      <p class="chapter">Treatment resistance</p>
      <h2>下一步治療要重新盤點</h2>
      <ul class="clue-list">
        <li>已接受 sertraline 足量足療程</li>
        <li>已接受 duloxetine 足量足療程</li>
        <li>兩種一線抗憂鬱藥療效皆有限</li>
        <li>症狀惡化並導致嚴重自殺企圖</li>
      </ul>
      <div class="prompt-card">
        <strong>教案問題節點：問題六（選修）</strong>
        若符合 treatment-resistant depression，後續治療可以如何安排？住院、藥物增強與非藥物治療各扮演什麼角色？
      </div>
    `
  }
];

let index = 0;

const book = document.querySelector(".book");
const leftPage = document.querySelector("#left-page");
const rightPage = document.querySelector("#right-page");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const pageLabel = document.querySelector("#page-label");
const progressFill = document.querySelector("#progress-fill");

function render(direction = "") {
  const spread = spreads[index];
  leftPage.innerHTML = spread.left;
  rightPage.innerHTML = spread.right;
  prev.disabled = index === 0;
  next.disabled = index === spreads.length - 1;
  pageLabel.textContent = `${index + 1} / ${spreads.length}`;
  progressFill.style.setProperty("--progress", `${((index + 1) / spreads.length) * 100}%`);

  if (direction) {
    book.classList.remove("turning-next", "turning-prev");
    void book.offsetWidth;
    book.classList.add(direction);
    window.setTimeout(() => book.classList.remove(direction), 560);
  }
}

prev.addEventListener("click", () => {
  if (index <= 0) return;
  index -= 1;
  render("turning-prev");
});

next.addEventListener("click", () => {
  if (index >= spreads.length - 1) return;
  index += 1;
  render("turning-next");
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") next.click();
  if (event.key === "ArrowLeft") prev.click();
});

render();
