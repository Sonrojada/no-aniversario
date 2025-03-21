// Función para crear confeti
function lanzarConfeti() {
    // Crear un canvas para el confeti
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1000';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    // Configuración del confeti
    const confettiPiezas = [];
    const colores = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'];
    const totalPiezas = 150;
    
    // Crear las piezas de confeti
    for (let i = 0; i < totalPiezas; i++) {
        confettiPiezas.push({
            x: Math.random() * canvas.width,
            y: Math.random() * -canvas.height,
            velocidadY: 3 + Math.random() * 5,
            velocidadX: -2 + Math.random() * 4,
            color: colores[Math.floor(Math.random() * colores.length)],
            forma: Math.random() > 0.5 ? 'círculo' : 'rectángulo',
            tamaño: 5 + Math.random() * 10,
            rotacion: Math.random() * 360,
            velocidadRotacion: -4 + Math.random() * 8
        });
    }
    
    // Función de animación
    function animar() {
        requestAnimationFrame(animar);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confettiPiezas.forEach(pieza => {
            pieza.y += pieza.velocidadY;
            pieza.x += pieza.velocidadX;
            pieza.rotacion += pieza.velocidadRotacion;
            
            if (pieza.y > canvas.height) {
                pieza.y = Math.random() * -100;
                pieza.x = Math.random() * canvas.width;
            }
            
            ctx.save();
            ctx.translate(pieza.x, pieza.y);
            ctx.rotate(pieza.rotacion * Math.PI / 180);
            ctx.fillStyle = pieza.color;
            
            if (pieza.forma === 'círculo') {
                ctx.beginPath();
                ctx.arc(0, 0, pieza.tamaño, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.fillRect(-pieza.tamaño / 2, -pieza.tamaño / 2, pieza.tamaño, pieza.tamaño);
            }
            
            ctx.restore();
        });
    }
    
    // Iniciar la animación
    animar();
}

// Llamar a la función cuando la página se carga
window.addEventListener('load', lanzarConfeti);