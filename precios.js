// Load data from JSON file and populate the precios page
async function loadPreciosData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        // Populate lotes list with prices
        const lotesListContainer = document.querySelector('.lotes-list');
        if (lotesListContainer && data.lotes) {
            lotesListContainer.innerHTML = data.lotes.map(lote => `
                <div class="lote-item disponible">
                    <h3>${lote.nombre}</h3>
                    <p class="precio">${lote.precio}</p>
                    <p class="superficie">${lote.superficie}</p>
                </div>
            `).join('');
        }

        // Populate formas de pago
        if (data.formasPago) {
            const formasPagoContainer = document.querySelector('.info-pago-section .info-list');
            if (formasPagoContainer) {
                formasPagoContainer.innerHTML = data.formasPago
                    .map(item => `<li>${item}</li>`)
                    .join('');
            }
        }

        // Populate características del loteo
        if (data.caracteristicasLoteo) {
            const caracteristicasContainer = document.querySelector('.info-pago-section .info-card:last-child .info-list');
            if (caracteristicasContainer) {
                caracteristicasContainer.innerHTML = data.caracteristicasLoteo
                    .map(item => `<li>${item}</li>`)
                    .join('');
            }
        }

    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadPreciosData();
});
