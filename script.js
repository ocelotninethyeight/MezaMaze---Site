function calculateRCJScore() {
    let detected = parseInt(document.getElementById("detected").value) || 0;
    let identified = parseInt(document.getElementById("identified").value) || 0;
    let errors = parseInt(document.getElementById("errors").value) || 0;
    let completed = document.getElementById("mazeCompleted").checked;

    // RCJ scoring model (semplificato ma realistico)
    let score = 0;

    score += detected * 10;
    score += identified * 5;
    score -= errors * 5;

    if (completed) {
        score += 20;
    }

    if (score < 0) score = 0;

    document.getElementById("resultScore").innerText =
        "Total RCJ Score: " + score;
}