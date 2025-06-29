const questionsContainer = document.getElementById('questions');
const submitBtn = document.getElementById('submit-btn');

const questions = [
    { text: "肌質", options: ["乾燥", "赤みがある", "脂性肌"] },
    { text: "肌質", options: ["シワが多い", "ホクロ・ソバカスが多い", "白い"] },
    { text: "髪質", options: ["年齢とともに白髪・脱毛", "若い頃から白髪・薄毛", "黒髪"] },
    { text: "髪質", options: ["伸びにくい", "赤毛", "艶がある"] },
    { text: "皮下脂肪", options: ["少ない", "普通", "多い"] },
    { text: "太りやすさ", options: ["太りにくい", "普通", "太りやすい"] },
    { text: "骨格", options: ["骨ばっている", "普通", "骨格は太い方"] },
    { text: "関節", options: ["ポキポキなる", "どちらでもない", "丈夫"] },
    { text: "筋肉", options: ["胸・お尻の筋肉が少ない", "普通", "全体的に筋肉が薄い"] },
    { text: "その他の身体の特徴", options: ["血管・腱が浮く", "体・口・ワキの匂いが気になる", "どちらでもない"] },
    { text: "便通", options: ["便秘しやすい", "下痢しやすい", "便秘も下痢もしない"] },
    { text: "便の状態", options: ["硬いことが多い", "軟らかいいことが多い", "普通"] },
    { text: "ガス", options: ["たまりやすい", "たまらない", "いつも満腹感がある"] },
    { text: "汗", options: ["ほとんどかかない", "よくかく", "動きに応じて多少出る"] },
    { text: "食欲", options: ["不規則", "時間がくればお腹がすく", "食欲のない時も時々ある"] },
    { text: "消化力", options: ["不規則", "食欲旺盛", "弱い"] },
    { text: "睡眠", options: ["寝つきが悪い", "遅く寝ても定刻に起きられる", "過眠傾向"] },
    { text: "睡眠の質", options: ["不眠・眠りが浅い", "熟睡できる", "必要以上に寝てしまう"] },
    { text: "話し方", options: ["よくしゃべり早口", "理論的な話し方", "あまりしゃべらず・ゆっくり話す"] },
    { text: "声質", options: ["かすれ声・小さい声", "普通", "張りのある声・声は大きい方"] },
    { text: "体力", options: ["スタミナ不足", "普通だが過激な運動はできない", "スタミナはある方"] },
    { text: "兄弟の数", options: ["０～１人", "１～２人", "３人以上"] },
    { text: "その他の生理的な特徴", options: ["運動神経が発達している", "読書が好き", "運動はあまり好きではない"] },
    { text: "決断", options: ["直観が効く", "熟慮型", "ゆっくり型"] },
    { text: "考え方", options: ["楽観的", "熟慮型", "寛容で忍耐力がある"] },
    { text: "神経", options: ["緊張しやすい", "神経質・イライラしやすい", "心配性"] },
    { text: "愛着", options: ["新しいことに興味をもつ", "誠実型", "愛情深く執着しやすい"] },
    { text: "執念", options: ["熱しやすく冷めやすい", "あと一歩で挫折する", "粘り強い"] },
    { text: "その他の性格の特徴", options: ["気分がかわりやすい", "批判的になりやすい", "はずかしがりや"] },    
    { text: "交友関係", options: ["好き嫌いが激しい", "人付き合いは少ない方", "友人が多い方"] },
    { text: "情報処理", options: ["覚えるのが早い", "理解力はある", "覚えるのは遅い"] },
    { text: "記憶力", options: ["忘れるのが早い", "記憶力はある方", "いつまでも覚えている"] },
    { text: "集中力", options: ["ない方", "普通", "よい方"] },
    { text: "買い物", options: ["流行に敏感", "高級志向", "派手な物は選ばない"] },
    { text: "浪費", options: ["無駄遣いしやすい", "適当に使う", "無駄遣いせず貯める"] },
]

questions.forEach((question, index) => {
    const div = document.createElement('div');
    div.innerHTML = `<p>${index + 1}. ${question.text}</p>`;
    question.options.forEach((option, i) => {
        div.innerHTML += `<label>
            <input type="radio" name="q${index}" value="${i}">${option}
        </label><br>`;
    });
    questionsContainer.appendChild(div);
});



submitBtn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('input[type="radio"]:checked');
    if (inputs.length < questions.length) {
       alert("全ての質問に回答してください！");
       return;
   }


    let scores = { vata: 0, pitta: 0, kapha: 0 };

    inputs.forEach(input => {
        const value = parseInt(input.value);
        if (value === 0) scores.vata++;
        else if (value === 1) scores.pitta++;
        else scores.kapha++;
    });

    // 診断結果をURLパラメータに格納して結果ページへ遷移
    const queryParams = new URLSearchParams(scores).toString();
    window.location.href = `result.html?${queryParams}`;
});








