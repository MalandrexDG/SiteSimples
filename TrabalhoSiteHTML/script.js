document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    Swal.fire({
      icon: 'error',
      title: 'Erro',
      text: 'Por favor, preencha todos os campos.'
    });
    return;
  }

  // Aqui você pode adicionar a lógica para enviar o formulário, como uma requisição AJAX.

  Swal.fire({
    icon: 'success',
    title: 'Mensagem enviada!',
    text: 'Entraremos em contato em breve.'
  });

  // Limpar o formulário
  document.getElementById('contactForm').reset();
});