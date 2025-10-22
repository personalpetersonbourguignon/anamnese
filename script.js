document.getElementById('anamneseForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const dados = Object.fromEntries(formData.entries());

  // Envio para o Google Apps Script
  https://script.google.com/macros/s/AKfycbyKARY7Jkk0FmcDMEieiRSOCE232XD_agvAU5Mp72pFsFEhbV14_X_YtTUqo3Ay4MHDpQ/exec;
  
  const response = await fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(dados),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.getElementById('mensagem').style.display = 'block';
    this.reset();
  } else {
    alert('Ocorreu um erro ao enviar. Tente novamente.');
  }
});
