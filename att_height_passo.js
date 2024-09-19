// Aguarda o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos com a classe 'meu-item'
    const elementos = document.querySelectorAll('.passo');
    let maiorAltura = 0;

    // Percorre os elementos e encontra a maior altura
    elementos.forEach(element => {
        const altura = element.offsetHeight; // Obtém a altura do elemento
        if (altura > maiorAltura) {
        maiorAltura = altura;
        }
    });
    // atualiza a altura de cada elemento
    elementos.forEach(element => {
        element.style.height = maiorAltura + 'px';
    })
    });