document.getElementById('anamneseForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const dados = Object.fromEntries(formData.entries());

  // Envio para o Google Apps Script
  const scriptURL = 'https://script.google.com/macros/s/AKfycbw9Xjm-0nRZvr8PmBLVlwtBVD6jyT-vCwNUb3OjLsGTqwh7uNmFk9x8pgEwRSkM9RHZCg/exec';
  
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
