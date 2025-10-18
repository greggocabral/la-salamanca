// Load data from JSON file and populate the website
async function loadData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        // Populate site information
        document.getElementById('heroTitle').textContent = data.heroTitle;
        document.getElementById('heroSubtitle').textContent = data.heroSubtitle;

        // Populate contact information
        const emailElement = document.getElementById('contactEmail');
        emailElement.textContent = data.contact.email;
        emailElement.href = `mailto:${data.contact.email}`;

        // Populate características del loteo
        if (data.caracteristicasLoteo) {
            const caracteristicasContainer = document.getElementById('caracteristicasLoteo');
            caracteristicasContainer.innerHTML = data.caracteristicasLoteo
                .map(item => `<li>${item}</li>`)
                .join('');
        }

        // Populate formas de pago
        if (data.formasPago) {
            const formasPagoContainer = document.getElementById('formasPago');
            formasPagoContainer.innerHTML = data.formasPago
                .map(item => `<li>${item}</li>`)
                .join('');
        }

        // Populate lotes
        const lotesContainer = document.getElementById('lotesContainer');
        lotesContainer.innerHTML = data.lotes.map(lote => createLoteCard(lote)).join('');

    } catch (error) {
        console.error('Error al cargar los datos:', error);
        document.getElementById('lotesContainer').innerHTML =
            '<p style="text-align: center; color: #ef4444;">Error al cargar los lotes. Por favor, intente más tarde.</p>';
    }
}

// Create HTML for a single lote card (without prices - landing page)
function createLoteCard(lote) {
    const caracteristicasHTML = lote.caracteristicas && lote.caracteristicas.length > 0
        ? `<div class="lote-caracteristicas">
             <h4>Características:</h4>
             <ul>
               ${lote.caracteristicas.map(car => `<li>${car}</li>`).join('')}
             </ul>
           </div>`
        : '';

    return `
        <div class="lote-card">
            <div class="lote-image">
                ${lote.imagen ? `<img src="${lote.imagen}" alt="${lote.nombre}" style="width: 100%; height: 100%; object-fit: cover;">` : 'Imagen no disponible'}
            </div>
            <div class="lote-content">
                <div class="lote-header">
                    <h3 class="lote-nombre">${lote.nombre}</h3>
                </div>
                <div class="lote-details">
                    ${lote.superficie ? `<div class="lote-detail-item"><strong>Superficie:</strong> ${lote.superficie}</div>` : ''}
                    ${lote.ubicacion ? `<div class="lote-detail-item"><strong>Ubicación:</strong> ${lote.ubicacion}</div>` : ''}
                </div>
                ${lote.descripcion ? `<p class="lote-descripcion">${lote.descripcion}</p>` : ''}
                ${caracteristicasHTML}
            </div>
        </div>
    `;
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    loadData();

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
