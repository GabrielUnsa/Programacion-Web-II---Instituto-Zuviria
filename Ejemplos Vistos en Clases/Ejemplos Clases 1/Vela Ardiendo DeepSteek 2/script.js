// Aquí puedes agregar interacciones adicionales si lo deseas
// Por ejemplo, podrías hacer que la vela se apague al hacer clic en ella

const flame = document.querySelector('.flame');

flame.addEventListener('click', () => {
    flame.style.display = 'none';
});