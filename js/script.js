// Funciones para la interactividad de la página

// Función para mostrar alerta de correo enviado
function enviarCorreo() {
  alert('Correo enviado');
}

// Función para mostrar alerta de WhatsApp abierto
function abrirWhatsApp() {
  alert('WhatsApp abierto');
}

// Función para manejar el envío del formulario
function enviarMensaje(event) {
  event.preventDefault(); // Evita que el formulario se envíe realmente
  alert('Mensaje enviado');
  return false;
}

// Agregar event listeners cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
  // Event listener para el enlace de correo
  const enlaceCorreo = document.querySelector('a[href="#correo"]');
  if (enlaceCorreo) {
    enlaceCorreo.addEventListener('click', function(e) {
      e.preventDefault();
      enviarCorreo();
    });
  }

  // Event listener para el enlace de WhatsApp
  const enlaceWhatsApp = document.querySelector('a[href="#whatsapp"]');
  if (enlaceWhatsApp) {
    enlaceWhatsApp.addEventListener('click', function(e) {
      e.preventDefault();
      abrirWhatsApp();
    });
  }

  // Event listener para el formulario
  const formulario = document.querySelector('form[action="#"]');
  if (formulario) {
    formulario.addEventListener('submit', enviarMensaje);
  }
});