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

    // Función para mostrar el menú contextual
    const mostrarMenuContextual = (e, mesa) => {
        const menu = document.createElement('div');
        menu.className = 'menu-contextual';
        menu.style.position = 'absolute';
        menu.style.top = `${e.clientY}px`;
        menu.style.left = `${e.clientX}px`;
        menu.style.backgroundColor = '#fff';
        menu.style.border = '1px solid #ccc';
        menu.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        menu.style.padding = '5px';
        menu.style.zIndex = '1000';
        menu.style.borderRadius = '10px'

        const eliminarOption = document.createElement('button');
        eliminarOption.textContent = 'Eliminar Mesa';
        eliminarOption.className = 'btn btn-danger btn-sm m-1';
        eliminarOption.addEventListener('click', () => {
            if (confirm(`¿Eliminar ${mesa.textContent}?`)) {
                mesa.parentNode.removeChild(mesa);
            }
            document.body.removeChild(menu);
        });

        const editarOption = document.createElement('button');
        editarOption.textContent = 'Editar Mesa';
        editarOption.className = 'btn btn-primary btn-sm m-1';
        editarOption.addEventListener('click', () => {
            const nuevoNombre = prompt('Introduce el nuevo nombre de la mesa:', mesa.textContent);
            if (nuevoNombre !== null && nuevoNombre.trim() !== '') {
                mesa.textContent = nuevoNombre;
            }
            document.body.removeChild(menu);
        });

        menu.appendChild(eliminarOption);
        menu.appendChild(editarOption);

        document.body.appendChild(menu);
        document.addEventListener('click', () => {
            if (document.body.contains(menu)) {
                document.body.removeChild(menu);
            }
        }, { once: true });
    };

    // Función para hacer que las mesas sean arrastrables
    const hacerArrastrable = (elemento) => {
        let desplazamientoX = 0, desplazamientoY = 0, mouseX = 0, mouseY = 0;

        const iniciarArrastre = (e) => {
            e.preventDefault();
            mouseX = e.clientX;
            mouseY = e.clientY;

            document.addEventListener('mousemove', arrastrar);
            document.addEventListener('mouseup', detenerArrastre);
        };

        const arrastrar = (e) => {
            e.preventDefault();
            desplazamientoX = mouseX - e.clientX;
            desplazamientoY = mouseY - e.clientY;
            mouseX = e.clientX;
            mouseY = e.clientY;

            elemento.style.top = `${elemento.offsetTop - desplazamientoY}px`;
            elemento.style.left = `${elemento.offsetLeft - desplazamientoX}px`;
        };

        const detenerArrastre = () => {
            document.removeEventListener('mousemove', arrastrar);
            document.removeEventListener('mouseup', detenerArrastre);
        };

        elemento.addEventListener('mousedown', iniciarArrastre);
    };

    // Inicializar con mesas predeterminadas
    crearMesas('piso1', posicionesPiso1, 10);
    crearMesas('piso2', posicionesPiso2, 12);

    // Mostrar solo el primer piso al inicio
    let currentFloor = 'piso1';
    document.getElementById(currentFloor).style.display = 'block';

    // Funcionalidad para alternar entre pisos
    const toggleFloorButton = document.getElementById('toggle-floor');
    toggleFloorButton.addEventListener('click', () => {
        document.getElementById(currentFloor).style.display = 'none';
        currentFloor = currentFloor === 'piso1' ? 'piso2' : 'piso1';
        document.getElementById(currentFloor).style.display = 'block';
    });

    // Funcionalidad para alternar entre modo oscuro y claro
    const toggleButton = document.getElementById('toggle-mode');
    const iconMode = document.getElementById('icon-mode');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            iconMode.classList.remove('fa-sun');
            iconMode.classList.add('fa-moon');
        } else {
            iconMode.classList.remove('fa-moon');
            iconMode.classList.add('fa-sun');
        }
    });

    // Función para agregar una nueva mesa
    const agregarMesa = () => {
        const container = document.querySelector(`#${currentFloor} .mesa-container`);
        const mesasActuales = container.querySelectorAll('.mesa').length;
        const posiciones = currentFloor === 'piso1' ? posicionesPiso1 : posicionesPiso2;

        if (mesasActuales < numMesasMax) {
            const pos = posiciones[mesasActuales];
            const mesa = document.createElement('div');
            mesa.className = 'mesa mesa-libre';
            mesa.textContent = `Mesa ${mesasActuales + 1}`;
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
        } else {
            alert('No hay más espacio disponible para nuevas mesas en este piso.');
        }
    };


})