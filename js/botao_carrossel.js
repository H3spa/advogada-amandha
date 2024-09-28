let currentStartIndex = 0;
const areas = document.querySelectorAll('.conteiner-area');
const totalAreas = areas.length;
const visibleItems = 4; // Quantos itens serão visíveis ao mesmo tempo

document.querySelector('.next').addEventListener('click', () => {
    // Incrementa o índice
    currentStartIndex = (currentStartIndex + 1) % (totalAreas - visibleItems + 1);
    
    // Aplica a transformação para mover as áreas
    areas.forEach((area, index) => {
        area.style.transform = `translateX(-${currentStartIndex * 100}%) scale(1)`; // Mantém o scale em 1 aqui
    });
    console.log(currentStartIndex)
});

document.querySelector('.prev').addEventListener('click', () => {
    // Incrementa o índice
    if (currentStartIndex === 0){
        currentStartIndex = totalAreas - visibleItems;
    } else {
        currentStartIndex = (currentStartIndex - 1);
    }
    
    // Aplica a transformação para mover as áreas
    areas.forEach((area, index) => {
        area.style.transform = `translateX(-${currentStartIndex * 100}%) scale(1)`; // Mantém o scale em 1 aqui
    });
    console.log(currentStartIndex)
});
// Adicionar evento para cada container-area individualmente
areas.forEach(area => {
    area.addEventListener('mouseover', () => {
        // Verifica se a transformação já tem scale, se sim, substitui
        const currentTransform = area.style.transform.replace(/scale\([0-9.]+\)/, ''); // Remove qualquer scale anterior
        area.style.transform = currentTransform + ' scale(1.15)'; // Aplica o scale desejado
    });

    area.addEventListener('mouseout', () => {
        // Verifica se a transformação tem scale e o remove ao sair do hover
        const currentTransform = area.style.transform.replace(/scale\([0-9.]+\)/, ''); // Remove o scale ao sair
        area.style.transform = currentTransform + ' scale(1)'; // Volta ao scale original
    });
});

