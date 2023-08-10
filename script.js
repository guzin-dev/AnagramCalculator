function generateAnagrams(word) {
  function permute(current, remaining) {
    if (remaining.length === 0) {
      anagrams.push(current);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        const nextCurrent = current + remaining[i];
        const nextRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
        permute(nextCurrent, nextRemaining);
      }
    }
  }

  const anagrams = [];
  permute("", word);
  return new Set(anagrams);
}

function chooseWord() {
  const inputWord = document.getElementById("input").value;
  const toggleInput = document.getElementById("toggleInput");

  if (!inputWord) {
    document.getElementById("list").innerHTML = "";
    document.getElementById("word").innerHTML = "";
    return;
  }
  if (toggleInput.checked && inputWord.length > 7) return alert("Limite de caracteres exedido");
  if (!toggleInput.checked && inputWord.length > 10) return alert("Limite de caracteres exedido");
  const anagramList = generateAnagrams(inputWord);
  document.getElementById("list").innerHTML = "";

  document.getElementById("word").innerHTML = `Anagramas possíveis com a palavra ${inputWord}: ${anagramList.size}`;
  if (toggleInput.checked) {
    anagramList.forEach((item) => {
      document.getElementById("list").innerHTML += `\n${item}`;
    });
  }
}

function toggleWordLength() {
  const maxLettersElement = document.getElementById("maxLetters");
  const toggleInput = document.getElementById("toggleInput");
  if (toggleInput.checked) {
    maxLettersElement.textContent = "7";
  } else {
    maxLettersElement.textContent = "10";
  }
}
