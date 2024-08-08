function showOptions() {
    const optionsHtml = `
        <button onclick="showDetails('rentas')">Rentas</button>
        <button onclick="showDetails('educacion')">Educación</button>
        <button onclick="showDetails('salud')">Salud</button>
        <button onclick="showDetails('electromecanica')">Electromecánica</button>
        <button onclick="showDetails('licencia')">Licencia de Conducir</button>
        <button onclick="showDetails('ayuda')">Ayuda Social</button>
        <button onclick="showDetails('juzgado')">Juzgado Vial</button>
        <button onclick="showDetails('reclamos')">Reclamos</button>
      
    `;
    document.getElementById('messages').innerHTML = `
    <div>
    <h4 class="message bot-message fw-bold py-4">Selecciona una opción:</h4>
</div>
    `;
    document.getElementById('options').innerHTML = optionsHtml;
}

function showDetails(option) {
    let detailsHtml = '';

    switch (option) {
        case 'rentas':
            detailsHtml = `
                <div class="details ">
                
                    <h3 class="message bot-message fw-bold py-4 mb-2"><strong>Oficina de Rentas</strong></h3>
                    <p>Horario: Lunes a Viernes, 8:00 - 16:00</p>
                    <p>Dirección: Av. Central 123</p>
                    <p>Teléfono: (261) 1234-5678</p>
                </div>
            `;
            break;
        case 'educacion':
            detailsHtml = `
                <div class="details">
                    <p><strong>Educación</strong></p>
                    <p>Horario: Lunes a Viernes, 8:00 - 16:00</p>
                    <p>Dirección: Av. Educativa 456</p>
                    <p>Teléfono: (261) 8765-4321</p>
                </div>
            `;
            break;
        case 'salud':
            detailsHtml = `
                <div class="details">
                    <p><strong>Salud</strong></p>
                    <p>Horario: Lunes a Viernes, 8:00 - 16:00</p>
                    <p>Dirección: Av. Salud 789</p>
                    <p>Teléfono: (261) 1357-2468</p>
                </div>
            `;
            break;
        case 'electromecanica':
            detailsHtml = `
                <div class="details">
                    <p><strong>Electromecánica</strong></p>
                    <p>Horario: Lunes a Viernes, 8:00 - 16:00</p>
                    <p>Dirección: Av. Mecánica 101</p>
                    <p>Teléfono: (261) 2468-1357</p>
                </div>
            `;
            break;
        case 'licencia':
            detailsHtml = `
                <div class="details">
                    <p><strong>Licencia de Conducir</strong></p>
                    <p>Horario: Lunes a Viernes, 8:00 - 16:00</p>
                    <p>Dirección: Av. Licencia 202</p>
                    <p>Teléfono: (261) 3579-4680</p>
                </div>
            `;
            break;
        case 'ayuda':
            detailsHtml = `
                <div class="details">
                    <p><strong>Ayuda Social</strong></p>
                    <p>Horario: Lunes a Viernes, 8:00 - 16:00</p>
                    <p>Dirección: Av. Social 303</p>
                    <p>Teléfono: (261) 4680-5791</p>
                </div>
            `;
            break;
        case 'juzgado':
            detailsHtml = `
                <div class="details">
                    <p><strong>Juzgado Vial</strong></p>
                    <p>Horario: Lunes a Viernes, 8:00 - 16:00</p>
                    <p>Dirección: Av. Juzgado 404</p>
                    <p>Teléfono: (261) 5791-6802</p>
                </div>
            `;
            break;
        case 'reclamos':
            detailsHtml = `
                <div class="details">
                    <p><strong>Reclamos</strong></p>
                    <p>Horario: Lunes a Viernes, 8:00 - 16:00</p>
                    <p>Dirección: Av. Reclamos 505</p>
                    <p>Teléfono: (261) 6802-7913</p>
                </div>
            `;
            break;
        default:
            detailsHtml = `
                <div class="details">
                    <p>Opción no válida.</p>
                </div>
            `;
            break;
    }

    document.getElementById('messages').innerHTML = detailsHtml + `
        <div class="message fw-bold ">
            <p>Si tienes alguna otra consulta, vuelve al menú principal o llama al 0800-555-2578.</p>
            <h5 class="text-primary fw-bold">MUCHAS GRACIAS POR CONTACTARNOS</h5>
            <button class=" button" onclick="showOptions()">Volver al menú principal</button>
            <a href="./index.html"> <button>Terminar</button></a>
        </div>
    `;
   
}
