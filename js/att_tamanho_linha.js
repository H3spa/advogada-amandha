function paddingContent(){
    const content = document.querySelector('.content'); // Seleciona o elemento
    const estiloComputadoContent = window.getComputedStyle(content); // Obtém os estilos computados
    
    const paddingLeftContent = parseFloat(estiloComputadoContent.getPropertyValue('padding-left'));
    const paddingRightContent = parseFloat(estiloComputadoContent.getPropertyValue('padding-right'));

    return paddingLeftContent + paddingRightContent;
}

function paddingProcessoAtendimento(){
    const processoAtendimento = document.querySelector('.processo-atendimento'); // Seleciona o elemento
    const estiloComputadoProcessoAtendimento = window.getComputedStyle(processoAtendimento); // Obtém os estilos computados
    
    const paddingLeftProcessoAtendimento = parseFloat(estiloComputadoProcessoAtendimento.getPropertyValue('padding-left'));
    const paddingRightProcessoAtendimento = parseFloat(estiloComputadoProcessoAtendimento.getPropertyValue('padding-right'));
    return paddingLeftProcessoAtendimento + paddingRightProcessoAtendimento;
}

function transformPassos(){
    const passosCima = document.querySelector(".passos-cima");
    const passosCimaStyle = window.getComputedStyle(passosCima);
    const matrixCima = new WebKitCSSMatrix(passosCimaStyle.transform);
    const transformCima = Math.abs(matrixCima.e);

    const passosBaixo = document.querySelector(".passos-baixo");
    const passosBaixoStyle = window.getComputedStyle(passosBaixo);
    const matrixBaixo = new WebKitCSSMatrix(passosBaixoStyle.transform);
    const transformBaixo = Math.abs(matrixBaixo.e);
    return transformCima + transformBaixo
}

function get_width_passo(){
    const passo = document.querySelector('.passo')
    const passoStyle = window.getComputedStyle(passo)
    const passoWidth = parseFloat(passoStyle.getPropertyValue('width'))
    return passoWidth
}

function update_tamanhoLinha() {
    const porcentagemExtra = 0.0033; // para ficar mais bonito
    const larguraDispositivo = window.innerWidth;
    const tamanhoLinha = (larguraDispositivo - paddingContent() - paddingProcessoAtendimento() - transformPassos() - get_width_passo()) * (1 + porcentagemExtra);

    const linha = document.querySelector('.processo-atendimento hr');
    linha.style.width = `${tamanhoLinha}px`;
}

update_tamanhoLinha()

window.addEventListener('resize', update_tamanhoLinha)