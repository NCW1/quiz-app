function checkAnswer() {
	const answer = document.getElementById("answer-input").value;

	if (answer.toLowerCase() == "paris") {
		document.getElementById("result").innerHTML = "Correct!";
	}
	else {
		document.getElementById("result").innerHTML = "Incorrect!";
	}
}

function checkResult() {
	const ans = document.getElementById("ans-input").value;

	if (ans.toLowerCase() == "yes") {
		document.getElementById("outcome").innerHTML = "🥹 Aww you too!";
	}
	else {
		document.getElementById("outcome").innerHTML = "😔 Why are you so mean?! It's true though 😪";
	}
}