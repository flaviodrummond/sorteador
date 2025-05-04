const button = document.querySelector("#sortear")
const resultado = document.querySelector(".result-value")


button.addEventListener('click', function () {
    const min = Math.ceil(document.querySelector(".min").value)
    const max = Math.floor (document.querySelector(".max").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    if (min >= max) {
        alert('Valor mínimo tem que ser MENOR que o valor máximo');
        resultado.style.display = 'none';
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        // Mostra o valor sorteado
        resultado.innerHTML = result;

        // Alterna a visibilidade
        if (resultado.style.display === 'block') {
            resultado.style.display = 'none';
        } else {
            resultado.style.display = 'block';
        }
    }
});