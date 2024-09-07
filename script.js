document.addEventListener('DOMContentLoaded', () => {
    const numMesasMax = 20; // Número máximo de mesas para cada piso

    // Distribución inicial para el Piso 1 y Piso 2
    const posicionesPiso1 = [
        { top: '20px', left: '20px' }, { top: '20px', left: '185px' }, { top: '20px', left: '350px' },
        { top: '180px', left: '20px' }, { top: '180px', left: '185px' }, { top: '180px', left: '350px' },
        { top: '340px', left: '20px' }, { top: '340px', left: '185px' }, { top: '340px', left: '350px' },
        { top: '500px', left: '20px' }, { top: '500px', left: '185px' }, { top: '500px', left: '350px' },
        { top: '660px', left: '20px' }, { top: '660px', left: '185px' }, { top: '20px', left: '515px' },
        { top: '20px', left: '680px' }, { top: '180px', left: '515px' }, { top: '180px', left: '680px' },
        { top: '340px', left: '515px' }, { top: '340px', left: '680px' }
    ];

    const posicionesPiso2 = [
        { top: '20px', left: '350px' }, { top: '180px', left: '20px' }, { top: '180px', left: '185px' },
        { top: '180px', left: '350px' }, { top: '340px', left: '20px' }, { top: '340px', left: '185px' },
        { top: '340px', left: '350px' }, { top: '500px', left: '20px' }, { top: '500px', left: '185px' },
        { top: '500px', left: '350px' }, { top: '660px', left: '20px' }, { top: '660px', left: '185px' },
        { top: '660px', left: '350px' }, { top: '20px', left: '515px' }, { top: '20px', left: '680px' },
        { top: '180px', left: '515px' }, { top: '180px', left: '680px' }, { top: '340px', left: '515px' },
        { top: '340px', left: '680px' }, { top: '500px', left: '515px' }
    ];

    // Función para crear mesas en el contenedor
    const crearMesas = (pisoId, posiciones, numMesas) => {
        const container = document.querySelector(`#${pisoId} .mesa-container`);
        container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas mesas
        for (let i = 0; i < numMesas; i++) {
            const pos = posiciones[i];
            const mesa = document.createElement('div');
            mesa.className = 'mesa mesa-libre';
            mesa.textContent = `Mesa ${i + 1}`;
            mesa.style.top = pos.top;
            mesa.style.left = pos.left;
            mesa.addEventListener('dblclick', () => {
                mesa.classList.toggle('mesa-ocupada');
                mesa.classList.toggle('mesa-libre');
            });
            mesa.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                mostrarMenuContextual(e, mesa);
            });
            hacerArrastrable(mesa);
            container.appendChild(mesa);
        }
    };
})