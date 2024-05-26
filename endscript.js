let totalScore = localStorage.getItem('score');
if(!totalScore){
    totalScore=0;
}
document.getElementById("game-Score").innerText = totalScore;