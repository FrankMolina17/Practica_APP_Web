document.getElementById('contactoForm').addEventListener('submit', function(e) {
    let valido = true;
    // Limpiar mensajes
    document.getElementById('error-nombre').textContent = '';
    document.getElementById('error-email').textContent = '';
    document.getElementById('error-telefono').textContent = '';
    document.getElementById('error-mensaje').textContent = '';

    // Validar nombre (solo letras y espacios)
    const nombre = document.getElementById('nombre').value.trim();
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(nombre)) {
        document.getElementById('error-nombre').textContent = 'El nombre solo debe contener letras y espacios.';
        valido = false;
    }

    // Validar email (formato básico)
    const email = document.getElementById('email').value.trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('error-email').textContent = 'Correo electrónico no válido.';
        valido = false;
    }

    // Validar teléfono (10 dígitos)
    const telefono = document.getElementById('telefono').value.trim();
    if (telefono && !/^\d{10}$/.test(telefono)) {
        document.getElementById('error-telefono').textContent = 'El teléfono debe tener 10 dígitos.';
        valido = false;
    }

    // Validar mensaje (no vacío)
    const mensaje = document.getElementById('mensaje').value.trim();
    if (mensaje.length === 0) {
        document.getElementById('error-mensaje').textContent = 'El mensaje no puede estar vacío.';
        valido = false;
    }

    if (!valido) {
        e.preventDefault();
    }
});
