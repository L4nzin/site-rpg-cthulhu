document.addEventListener('DOMContentLoaded', () => {
    const conInput = document.getElementById('con-val');
    const tamInput = document.getElementById('tam-val');
    const podInput = document.getElementById('pod-val');
    const calculateButton = document.getElementById('calculate-derived');
    const resultPv = document.getElementById('result-pv');
    const resultPm = document.getElementById('result-pm');
    const resultSan = document.getElementById('result-san');

    if (calculateButton) { // Garante que estamos na página correta
        calculateButton.addEventListener('click', () => {
            const con = parseInt(conInput.value);
            const tam = parseInt(tamInput.value);
            const pod = parseInt(podInput.value);

            if (isNaN(con) || isNaN(tam) || isNaN(pod)) {
                alert('Por favor, insira valores válidos para CON, TAM e POD.');
                return;
            }

            // Calcula PV (Pontos de Vida): (CON + TAM) / 10, arredondado para baixo
            const pv = Math.floor((con + tam) / 10);
            resultPv.textContent = pv;

            // Calcula PM (Pontos de Magia): POD / 5
            const pm = Math.floor(pod / 5);
            resultPm.textContent = pm;

            // Calcula SAN (Sanidade Inicial): POD x 5
            const san = pod * 5;
            resultSan.textContent = san;

            console.log(`Calculado: PV=${pv}, PM=${pm}, SAN=${san}`);
        });
    }
});
