document.getElementById('anamneseForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const dados = Object.fromEntries(formData.entries());

  // Envio para o Google Apps Script
  const scriptURL = https://script.google.com/macros/s/AKfycbz3k54uqHQ2GdlTadt2xycPW4lsekInr14x1vsTESL93ZrEEqlGhPpugUQmQl9YiEuCkw/exec;
  
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
