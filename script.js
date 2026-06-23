let answered = false;
const questions = [
  {
  question: "Birch還元で用いる代表的な試薬は？",
  answer: ["Na / liq. NH3", "Na NH3", "Na 液体アンモニア", "ナトリウム 液体アンモニア"],
  category: "Birch還元",
  explanation: "芳香環はBirch還元で1,4-シクロヘキサジエンへ部分還元する反応。",
  image: "reaction_img/Birch Reduction.png"
},
{
  question: "Birch還元で電子供与基を持つベンゼンを還元すると、置換基は二重結合上 ，飽和炭素上のどちらにに残る？",
  answer: "二重結合上",
  category: "Birch還元",
  explanation: "中間体のラジカルが置換基の根元にこないため、置換基は二重結合上に残る。",
  image: "reaction_img/Birch Reduction.png"
},
{
  question: "Birch還元で電子求引基を持つベンゼンを還元すると、置換基は二重結合上 ，飽和炭素上のどちらにに残る？",
  answer: "飽和炭素上",
  category: "Birch還元",
  explanation: "中間体のラジカルが置換基の根元に来るため、置換基は飽和炭素上に残る。",
  image: "reaction_img/Birch Reduction.png"
},
{
  question: "Brownヒドロホウ素化で最初にアルケンへ付加する元素は？",
  answer: ["ホウ素", "B"],
  category: "Brownヒドロホウ素化",
  explanation: "ホウ素に結合している水素はすべてアルキルに置換される",
  image: "reaction_img/Brown Hydroboration.png"
},
{
  question: "Brownヒドロホウ素化したのち過酸化水素と塩基を作用させると得られる生成物はマルコフニコフ則に従うか？",
  answer: ["従わない", "アンチマルコフニコフ"],
  category: "Brownヒドロホウ素化",
  explanation: "アンチマルコフニコフ的にアルコールが生成される．",
  image: "reaction_img/Brown Hydroboration.png"
},
{
  question: "Cannizzaro反応は塩基性条件下で進行するか？",
  answer: ["進行する","はい"],
  category: "Cannizzaro反応",
  explanation: "",
  image: "reaction_img/Cannizzaro Reaction.png"
},
{
  question: "Cannizzaro反応は何と何が1:1で得られるか？",
  answer: ["アルコールとカルボン酸"],
  category: "Cannizzaro反応",
  explanation: "",
  image: "reaction_img/Cannizzaro Reaction.png"
},
{
  question: "Cannizzaro反応が起こるためにアルデヒドがもつ条件は何か？",
  answer: ["α水素を持たないアルデヒド", "α水素をなし","アルファ水素なし","アルファ水素を持たない"],
  category: "Cannizzaro反応",
  explanation: "α水素を持つ場合はアルドール反応が起こるため，Cannizzaro反応は進行しない．",
  image: "reaction_img/Cannizzaro Reaction.png"
},
{
  question: "Claisen転位は何員環遷移状態を経由する？",
  answer: ["6員環遷移状態" , "六員環"],
  category: "Claisen転位",
  explanation: "",
  image: "reaction_img/Claisen Rearrangement.png"
},
{
  question: "Curtius転位では炭素数は変化する？",
  answer: "変化しない",
  category: "Curtius転位",
  explanation: "ただの転位だからね",
  image: "reaction_img/Curtius Rearrangement.png" 
},
{
  question: "Curtius転位は言い換えると「[]--転位」？",
  answer: "[3,3]シグマトロピー転位",
  category: "Curtius転位",
  explanation: "軌道考えろよ",
  image: "reaction_img/Curtius Rearrangement.png" 
},
{
  question: "Beckmann転位は何の転位反応？",
  answer: "オキシム",
  category: "Beckmann転位",
  explanation: "「オキシム」炭素二重結合窒素その先に酸素，C=N-OR",
  image: "reaction_img/Beckmann Rearrangement.png"
},
{
  question: "Beckmann転位で環状ケトオキシムを用いると何が生成する？",
  answer: "ラクタム",
  category: "Beckmann転位",
  explanation: "みんな大好きε-カプロラクタムとか作れる",
  image: "reaction_img/Beckmann Rearrangement.png"
},
{
  question: "Barton-McCombie脱酸素化はラジカル反応であるか？",
  answer: ["ラジカル反応である","はい"],
  category: "Barton-McCombie脱酸素化",
  explanation: "ラジカル開始剤はn-Bu3SnH,AIBN",
  image: "reaction_img/Barton-McCombie Deoxygenation.png" 
},
{
  question: "Barton-McCombie脱酸素化はなにを脱離基として反応させるか？",
  answer: ["チオカルボニル" , "ザンテート", "キサンテート",],
  category: "Barton-McCombie脱酸素化",
  explanation: "アルコールをチオカルボニル化させたもの．",
  image: "reaction_img/Barton-McCombie Deoxygenation.png" 
},
{
  question: "アルコールからチオカルボニルの合成において水素化ナトリウムは何の役割を果たすか？",
  answer: "脱プロトン化剤",
  category: "Barton-McCombie脱酸素化",
  explanation: "その後二硫化炭素，ハロゲン化アルキル(ヨウ化メチルなど)を作用させることでチオカルボニルが得られる。",
  image: "reaction_img/Barton-McCombie Deoxygenation.png" 
},
{
  question: "SeO2酸化はアリル位選択的酸化反応であるか？",
  answer: "はい",
  category: "SeO2酸化",
  explanation: "アリル位を位置選択的にアルコール化できる．t-BuOOHなどの酸化剤を用いることでセレンを触媒量にまで減らせる．",
  image: "reaction_img/SeO2.png"
},
{
  question: "Dakin酸化では芳香族アルデヒドを何へ変換するか？",
  answer: ["芳香族アルコール", "フェノール"],
  category: "Dakin酸化",
  explanation: "過酸を用いるためBaeyer-Villiger酸化と似ている．",
  image: "reaction_img/Dakin Oxidation.png"
},
{
  question: "Friedel-Craftsアシル化で生成する求電子種の名称は？",
  answer: "アシリウムイオン",
  category: "Friedel-Crafts反応",
  explanation: "酸塩化物のハロゲンが取れる",
  image: "reaction_img/Friedel-Crafts Acylation.png"
},
{
  question: "Friedel-Craftsアシル化用いるAlCl3は酸か塩基か？",
  answer: "ルイス酸",
  category: "Friedel-Crafts反応",
  explanation: "酸ハロゲン化物と反応してアシリウムイオンを生成する．",
  image: "reaction_img/Friedel-Crafts Acylation.png"
},
{
  question: "1-クロロプロパンでFriedel-Craftsアルキル化を起こすと芳香環に導入される官能基は何か？",
  answer: ["イソプロピル基","1-メチルエチル基"],
  category: "Friedel-Crafts反応",
  explanation: "もっとも安定なカルボカチオンを経由して反応する",
  image: "reaction_img/Friedel-Crafts Alkylation.png"
},
{
  question: "Fischerインドール合成で生成する複素環は何と何が合わさった化合物か？",
  answer: "ベンゼン環とピロール",
  category: "Fischerインドール合成",
  explanation: "ピロールは五員環で一個窒素の芳香族性持ち",
  image: "reaction_img/Fischer Indole Synthesis.png"
},
{
  question: "Fischerインドール合成は何と何からインドール環を合成するか？",
  answer: "アルデヒド,ケトンとアリールヒドラジン",
  category: "Fischerインドール合成",
  explanation: "ヒドラジンはH2N-NH2",
  image: "reaction_img/Fischer Indole Synthesis.png"
},
{
  question: "Fischerインドール合成で生成する中間体の名前は？",
  answer: "ヒドラゾン",
  category: "Fischerインドール合成",
  explanation: "C=N-N",
  image: "reaction_img/Fischer Indole Synthesis.png"
},
{
  question: "Eschweiler-Clarkeメチル化ではなにをメチル化するか？",
  answer: "第一級，第二級アミン",
  category: "Eschweiler-Clarkeメチル化",
  explanation: "",
  image: "reaction_img/Eschweiler-Clarke Methylation.png"
},
{
  question: "Eschweiler-Clarkeメチル化で用いる試薬を答えよ(二つ)",
  answer: "ギ酸 ホルムアルデヒド",
  category: "Eschweiler-Clarkeメチル化",
  explanation: "",
  image: "reaction_img/Eshweiler-clarke methylation.png"
},
{
  question: "Favorskii転位はαハロケトンへのアルコキシド等の攻撃で反応が進行するアルコキシドが攻撃する場所はどこか？",
  answer: "α水素",
  category: "Favorskii転位",
  explanation: "シクロプロパノン中間体が形成され，さらに，アルコキシドなどが攻撃して反応が進行する．環状なら縮環する．",
  image: "reaction_img/Favorskii Rearrangement.png"
},
{
  question: "1,3-双極子付加環化反応は「[○+○]環化反応」？」",
  answer: "[3+2]環化反応",
  category: "1,3-双極子付加環化",
  explanation: "協奏的,立体特異的に進行する．立体配置はフロンティア軌道論で予測できる.",
  image: "reaction_img/1,3-Dipolar Cycloaddition.png"
},
{
  question: "1,3-双極子(1,3-dipole)は何個のπ電子を含むか？",
  answer: "4π電子",
  category: "1,3-双極子付加環化",
  explanation: "ex)N=N+=N- (アジド), O=N+=O- (ニトロソ化合物), C=C=O (イソシアネート),O=O+-O- (オゾン)など.これらとアルキン,アルケンのような親双極子と付加環化反応を起こす．",
  image: "reaction_img/1,3-Dipolar Cycloaddition.png"
},
{
  question: "Dieckmann縮合は言い換えると何縮合かであるか？",
  answer: ["分子内Claisen縮合","分子内クライゼン縮合"],
  category: "Dieckmann縮合",
  explanation: "クライゼン縮合はエステル同士のアルドール縮合みたいなもん",
  image: "reaction_img/Dieckmann Condensation.png"
},
{
  question: "Ene反応は協奏的反応であるか？",
  answer: ["はい","協奏的反応である"],
  category: "Ene反応",
  explanation: "オレフィンとアリル化合物のシグマトロピー反応",
  image: "reaction_img/Ene Reaction.png"
},
{
  question: "Ene反応Diels-Alder反応と異なりジエンのπ電子の代わりに何が関与しているか？",
  answer: ["アリル位のsp3炭素のσ電子","aリル位のシグマ電子"],
  category: "Ene反応",
  explanation: "オレフィンとアリル化合物のシグマトロピー反応",
  image: "reaction_img/Ene Reaction.png"
},
{
  question: "Prins反応でアルケンと反応する化合物は？",
  answer: "アルデヒド",
  category: "Prins反応",
  explanation: "別名:カルボニルエン反応",  
  image: "reaction_img/Ene Reaction.png"
},
{
  question: "Ene反応でオレフィンの代わりにカルボニル化合物を用いた場合の反応名を答えよ？",
  answer: ["Prins反応","カルボニルエン反応"],
  category: "Prins反応",
  explanation: "別名:カルボニルエン反応.ホモアリルアルコールを与える．",  
  image: "reaction_img/Prins Reaction.png"
},
{
  question: "Erlenmeyer-Plochl合成で生成するアズラクトンは何の前駆体として利用される？",
  answer: "アミノ酸誘導体",
  category: "Erlenmeyer-Plochl合成",
  explanation: "",
  image: "reaction_img/Erlenmeyer-Plochl Synthesis.png"
},
];

let currentAnswer = "";
let correctCount = 0;
let totalCount = 0;
let currentQuestion = null;
let remainingQuestions = [...questions];

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/　/g, "");
}
function getAnswers() {
  return Array.isArray(currentQuestion.answer)
    ? currentQuestion.answer
    : [currentQuestion.answer];
}
function checkAnswer() {
  if (answered) return;

  const userAnswer = normalize(
    document.getElementById("userAnswer").value
  );

  if (userAnswer === "") {
    document.getElementById("result").textContent =
      "答えを入力してください。";
    return;
  }

  const answers = getAnswers();
  const normalizedAnswers = answers.map(a => normalize(a));

  const isCorrect = normalizedAnswers.some(answer =>
    answer === userAnswer || answer.includes(userAnswer)
  );

  if (isCorrect) {
    correctCount++;
    document.getElementById("result").textContent = "〇 正解！";
  } else {
    document.getElementById("result").textContent =
      "× 不正解　正解：" + answers[0];
  }

  totalCount++;
  updateScore();
  showExplanation();
  answered = true;
}

function showExplanation() {
  document.getElementById("explanation").textContent =
    currentQuestion.explanation
      ? "解説：" + currentQuestion.explanation
      : "解説はまだ登録されていません。";

  const img = document.getElementById("explanationImage");

  if (currentQuestion.image) {
    img.src = currentQuestion.image;
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
}

function showAnswer() {
  const answers = getAnswers();

  document.getElementById("answer").textContent =
    "正解：" + answers.join(" / ");

  showExplanation();
}

function nextQuestion() {
  if (remainingQuestions.length === 0) {
    remainingQuestions = [...questions];
  }

  const randomIndex = Math.floor(
    Math.random() * remainingQuestions.length
  );

  const selected = remainingQuestions[randomIndex];

  currentQuestion = selected;
  currentAnswer = Array.isArray(selected.answer)
   ? selected.answer[0]
   : selected.answer;

  document.getElementById("question").textContent =
    selected.question;

  document.getElementById("answer").textContent = "";
  document.getElementById("result").textContent = "";
  document.getElementById("userAnswer").value = "";

  document.getElementById("explanation").textContent = "";
  document.getElementById("explanationImage").style.display = "none";

  remainingQuestions.splice(randomIndex, 1);

  answered = false;
}

function updateScore() {
  const rate =
    totalCount === 0
      ? 0
      : Math.round((correctCount / totalCount) * 100);

  document.getElementById("score").textContent =
    `正答率: ${rate}% (${correctCount}/${totalCount})`;
}

document.getElementById("userAnswer")
  .addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      if (!answered) {
        checkAnswer();
      } else {
        nextQuestion();
      }
    }
  });

nextQuestion();
