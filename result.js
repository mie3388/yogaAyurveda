const canvas = document.getElementById("resultChart");

// 画面幅に応じてキャンバスの最大幅・高さを設定
function resizeCanvas() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 500) {
        console.log("Using wide layout");
        canvas.style.maxWidth = "500px";
        canvas.style.width = "500px";
        

    } else {
        console.log("Using narrow layout");
        canvas.style.maxWidth = screenWidth + "px";
        canvas.style.width = screenWidth + "px";
       
    }
}




// サイズ調整はチャート描画前に
resizeCanvas();



const params = new URLSearchParams(window.location.search);
const scores = {
    vata: parseInt(params.get("vata")) || 0,
    pitta: parseInt(params.get("pitta")) || 0,
    kapha: parseInt(params.get("kapha")) || 0
};

const description = document.getElementById('description');



// 診断結果を表示
new Chart(document.getElementById("resultChart"), {
    type: "bar",
    data: {
        labels: ["ヴァータ", "ピッタ", "カファ"],
        datasets: [{
            label: "あなたの体質スコア",
            data: [scores.vata, scores.pitta, scores.kapha],
            backgroundColor: ["blue", "red", "green"],
            maxBarThickness: 75, // ここで棒の幅を指定（お好みで調整可能）
            responsive: true,
            maintainAspectRatio: false
        }]
    }
});



window.addEventListener("resize", () => {
    resizeCanvas();
    chart.resize();
});




// 体質分類判定ロジック

if (scores.vata > (scores.pitta + scores.kapha)) 
    {description.innerText = "あなたは【ヴァータ（風）】タイプです。創造的で活発、変化を好む傾向があります！";} 
else if (scores.pitta > ( scores.vata + scores.kapha)) 
    {description.innerText = "あなたは【ピッタ（火）】タイプです。情熱的で集中力があり、リーダーシップを発揮できます！";} 
else if (scores.kapha > ( scores.vata + scores.pitta)) 
    {description.innerText = "あなたは【カファ（水）】タイプです。安定性があり、忍耐強く愛情深い性質を持っています！";} 
else if ((scores.vata + scores.pitta ) > scores.kapha && scores.vata>scores.kapha && scores.pitta>scores.kapha) 
    {description.innerText = "あなたは【ヴァータ・ピッタ】タイプです。行動力が抜群で、活発かつ情熱的な性質を持っています！";} 
else if ((scores.pitta + scores.kapha ) > scores.vata && scores.pitta>scores.vata && scores.kapha>scores.vata) 
    {description.innerText = "あなたは【ピッタ・カパ】タイプです。安定性と情熱のバランスが成功の鍵となります！";} 
else if ((scores.vata + scores.kapha ) > scores.pitta && scores.vata>scores.pitta && scores.kapha>scores.pitta) 
    {description.innerText = "あなたは【ヴァータ・カパ】タイプです。冷えやすさと相反する性質の調整が課題となります！";} 
else {description.innerText = "あなたは【サマプラクリティ】タイプです。バランスが良いものの、変化しやすい傾向があります！";}




