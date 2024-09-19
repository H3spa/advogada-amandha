let currentStartIndex = 0;
const areas = document.querySelectorAll('.area-direito');
const totalAreas = areas.length;
const visibleItems = 3; // Quantos itens serão visíveis ao mesmo tempo

document.querySelector('.next').addEventListener('click', () => {
    // Incrementa o índice
    currentStartIndex = (currentStartIndex + 1) % (totalAreas - visibleItems + 1);
    
    // Aplica a transformação para mover as áreas
    areas.forEach((area, index) => {
        area.style.transform = `translateX(-${currentStartIndex * 100}%)`;
    });
    console.log(currentStartIndex)
});

document.querySelector('.prev').addEventListener('click', () => {
    // Incrementa o índice
    if (currentStartIndex === 0){
        currentStartIndex = totalAreas - visibleItems
    } else {
        currentStartIndex = (currentStartIndex - 1)
    }
    
    // Aplica a transformação para mover as áreas
    areas.forEach((area, index) => {
        area.style.transform = `translateX(-${currentStartIndex * 100}%)`;
    });
    console.log(currentStartIndex)
});