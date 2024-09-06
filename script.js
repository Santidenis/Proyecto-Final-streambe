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
})