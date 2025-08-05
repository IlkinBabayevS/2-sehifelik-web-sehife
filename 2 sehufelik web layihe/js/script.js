function getResponse() {
  const userInput = document.getElementById("userInput").value;
  const responseText = document.getElementById("responseText");

  if (userInput.trim() === "") {
    responseText.textContent = "Zəhmət olmasa bir sual yazın.";
    return;
  }

  // Sadə "fake" AI cavabı (demo məqsədilə)
  responseText.textContent = `Sualınız: "${userInput}" — Maraqlı sualdır! Gələcəkdə bu barədə daha çox danışacağıq.`;
}
