const questionsContainer = document.getElementById('questions');
const submitBtn = document.getElementById('submit-btn');

const questions = [
    { text: "あなたは普段どのような気分ですか？", options: ["落ち着いている", "情熱的", "活動的"] },
    { text: "あなたの食の好みは？", options: ["甘いもの", "辛いもの", "軽いもの"] },
    { text: "あなたの睡眠の特徴は？", options: ["深い眠り", "短時間で目覚める", "不規則"] },
    { text: "あなたの睡眠の特徴は？", options: ["深い眠り", "短時間で目覚める", "不規則"] },
    { text: "あなたは普段どのような気分ですか？", options: ["落ち着いている", "情熱的", "活動的"] },
    { text: "あなたの食の好みは？", options: ["甘いもの", "辛いもの", "軽いもの"] },
    { text: "あなたの睡眠の特徴は？", options: ["深い眠り", "短時間で目覚める", "不規則"] },
    { text: "あなたの睡眠の特徴は？", options: ["深い眠り", "短時間で目覚める", "不規則"] },
    { text: "あなたは普段どのような気分ですか？", options: ["落ち着いている", "情熱的", "活動的"] },
    { text: "あなたの食の好みは？", options: ["甘いもの", "辛いもの", "軽いもの"] },
    { text: "あなたの睡眠の特徴は？", options: ["深い眠り", "短時間で目覚める", "不規則"] },
    { text: "あなたの睡眠の特徴は？", options: ["深い眠り", "短時間で目覚める", "不規則"] },
    { text: "あなたは普段どのような気分ですか？", options: ["落ち着いている", "情熱的", "活動的"] },
    { text: "あなたの食の好みは？", options: ["甘いもの", "辛いもの", "軽いもの"] },
    { text: "あなたの睡眠の特徴は？", options: ["深い眠り", "短時間で目覚める", "不規則"] },
    { text: "あなたの睡眠の特徴は？", options: ["深い眠り", "短時間で目覚める", "不規則"] },
    { text: "あなたは普段どのような気分ですか？", options: ["落ち着いている", "情熱的", "活動的"] },
    { text: "あなたの食の好みは？", options: ["甘いもの", "辛いもの", "軽いもの"] },
    { text: "あなたの睡眠の特徴は？", options: ["深い眠り", "短時間で目覚める", "不規則"] },
    { text: "あなたの睡眠の特徴は？", options: ["深い眠り", "短時間で目覚める", "不規則"] },
    { text: "あなたは普段どのような気分ですか？", options: ["落ち着いている", "情熱的", "活動的"] },
    { text: "あなたの食の好みは？", options: ["甘いもの", "辛いもの", "軽いもの"] },
    { text: "あなたの睡眠の特徴は？", options: ["深い眠り", "短時間で目覚める", "不規則"] },
    { text: "あなたの睡眠の特徴は？", options: ["深い眠り", "短時間で目覚める", "不規則"] },
    { text: "あなたは普段どのような気分ですか？", options: ["落ち着いている", "情熱的", "活動的"] },
    { text: "あなたの食の好みは？", options: ["甘いもの", "辛いもの", "軽いもの"] },
    { text: "あなたの睡眠の特徴は？", options: ["深い眠り", "短時間で目覚める", "不規則"] },
    { text: "あなたの睡眠の特徴は？", options: ["深い眠り", "短時間で目覚める", "不規則"] },
    { text: "あなたは普段どのような気分ですか？", options: ["落ち着いている", "情熱的", "活動的"] },
    { text: "あなたの食の好みは？", options: ["甘いもの", "辛いもの", "軽いもの"] },
    { text: "あなたの睡眠の特徴は？", options: ["深い眠り", "短時間で目覚める", "不規則"] },
    { text: "あなたの睡眠の特徴は？", options: ["深い眠り", "短時間で目覚める", "不規則"] },
    { text: "あなたの食の好みは？", options: ["甘いもの", "辛いもの", "軽いもの"] },
    { text: "あなたの睡眠の特徴は？", options: ["深い眠り", "短時間で目覚める", "不規則"] },
    { text: "あなたの睡眠の特徴は？", options: ["深い眠り", "短時間で目覚める", "不規則"] },
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








