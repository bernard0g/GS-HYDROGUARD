
// menu hambúrguer simples
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('menu').classList.toggle('show');
});

// validação de formulário
document.getElementById('alerta-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  if (nome && email) {
    document.getElementById('form-msg').innerText = 'Cadastrado com sucesso!';
  } else {
    document.getElementById('form-msg').innerText = 'Preencha todos os campos!';
  }
});

// slides simples
let slideIndex = 0;
const tempoDaTropa = 3000; // tempo de transição em milissegundos
const slides = document.querySelectorAll('.slide');
setInterval(function () {
  slides.forEach(function (s) { s.classList.remove('active'); });
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}, tempoDaTropa); // troca de slides a cada 3 segundos

// quiz com as 10 perguntas sobre o tema
const perguntas = [
  { q: "A IA pode prever enchentes?", c: true },
  { q: "O uso de sensores pode antecipar catástrofes?", c: true },
  { q: "As enchentes só acontecem em áreas rurais?", c: false },
  { q: "Alertas em tempo real ajudam a salvar vidas?", c: true },
  { q: "Aplicativos de alerta funcionam offline?", c: true },
  { q: "Big Data não é útil em desastres naturais?", c: false },
  { q: "Satélites detectam áreas de risco?", c: true },
  { q: "O Brasil possui cobertura total de monitoramento?", c: false },
  { q: "A falta de infraestrutura agrava os impactos?", c: true },
  { q: "Modelagem urbana não ajuda na prevenção?", c: false }
];

// criação do quiz
const quizContainer = document.getElementById('quiz-container');
perguntas.forEach(function (pergunta, i) {
  const container = document.createElement('div');
  container.className = 'quiz-item';

  const perguntaTexto = document.createElement('span');
  perguntaTexto.innerText = pergunta.q;

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.dataset.index = i;

  container.appendChild(perguntaTexto);
  container.appendChild(input);
  quizContainer.appendChild(container);
});

// validação do quiz
document.getElementById('quiz-submit').addEventListener('click', function () {
  let score = 0;
  const inputs = quizContainer.querySelectorAll('input');
  inputs.forEach(function (input) {
    const i = input.dataset.index;
    if (input.checked == perguntas[i].c) score++;
  });
  document.getElementById('quiz-result').innerText = `Você acertou ${score} de 10 perguntas.`;
});

// troca de tema
document.querySelectorAll('.tema').forEach(function (botao) { // troca as cores do site com base no botão clicado usando variáveis CSS
  botao.addEventListener('click', function () { 
    const cor = botao.dataset.cor;

    if (cor === "claro") { // tema claro
      document.documentElement.style.setProperty('--fundo', '#ffffff');
      document.documentElement.style.setProperty('--texto', '#000000');
      document.documentElement.style.setProperty('--azul', '#007bff');
      document.documentElement.style.setProperty('--borda', '#cccccc');
      document.documentElement.style.setProperty('--card', '#f5f5f5');
      document.documentElement.style.setProperty('--input-bg', '#e9e9e9');
      document.documentElement.style.setProperty('--botao-bg', '#007bff');
      document.documentElement.style.setProperty('--botao-txt', '#ffffff');
    } else if (cor === "verde") { // tema verde
      document.documentElement.style.setProperty('--fundo', '#001f1f');
      document.documentElement.style.setProperty('--texto', '#aaffaa');
      document.documentElement.style.setProperty('--azul', '#00ffaa');
      document.documentElement.style.setProperty('--borda', '#004d4d');
      document.documentElement.style.setProperty('--card', '#003333');
      document.documentElement.style.setProperty('--input-bg', '#004444');
      document.documentElement.style.setProperty('--botao-bg', '#00ffaa');
      document.documentElement.style.setProperty('--botao-txt', '#001f1f');
    } else {
      // tema padrao
      document.documentElement.style.setProperty('--fundo', '#0d1117');
      document.documentElement.style.setProperty('--texto', '#c9d1d9');
      document.documentElement.style.setProperty('--azul', '#58a6ff');
      document.documentElement.style.setProperty('--azul-claro', '#89d4ff');
      document.documentElement.style.setProperty('--borda', '#30363d');
      document.documentElement.style.setProperty('--card', '#161b22');
      document.documentElement.style.setProperty('--input-bg', '#161b22');
      document.documentElement.style.setProperty('--botao-bg', '#58a6ff');
      document.documentElement.style.setProperty('--botao-txt', '#ffffff');
    }
  });
});