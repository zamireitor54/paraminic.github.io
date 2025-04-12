document.addEventListener('DOMContentLoaded', function() {
    // Configuración de la fecha para el countdown
    const reunionDate = new Date('2025-05-15T18:00:00'); // Ajusta esta fecha a cuando se volverán a ver
    
    // Contenido para cada día
    const dailyContent = {
        antes: {
            title: "Antes de que comience la semana",
            message: "Antes de que empiece esta semana sin ti, quería decirte que eres lo primero en lo que pienso cada mañana y lo último en mi mente antes de dormir. Esta semana será difícil sin ti, pero cada día que pase nos acerca más al momento de volver a vernos.",
            theme: "Eres mi pensamiento constante",
            photo: "anntes.jpg",
            photoCaption: "Nuestro último momento juntos... hasta pronto",
            audioSrc: "antesdellunes.mp3",
            audioTranscript: "Hola mi amor, antes de que empiece esta semana sin ti, quería dejarte este mensaje para que sepas que aunque no estemos juntos físicamente, estás en cada latido de mi corazón. Te extraño desde ya y no veo la hora de volver a llamarte."
        },
        lunes: {
            title: "Lunes de Añoranza",
            message: "Hoy amanecí con ganas de ti. Es lunes y, no sé, siempre me pongo más sensible. Me haces falta, me haces muchísima falta. Aunque estemos lejos, no dejo de pensar en ti. Imagino que estamos bajo el mismo cielo, que el viento que siento también te toca a ti. Te juro que cada lunes se me hace más fácil porque siento que cada semana que pasa es una menos para volver a verte.",
            theme: "Te pienso todo el día, te extraño aún más.",
            photo: "lunes.jpg",
            photoCaption: "Esa primera foto... me mata tu sonrisa.",
            audioSrc: "lunes.mp3",
            audioTranscript: "Amor... este lunes se siente raro sin ti. Me desperté con tu imagen en mi cabeza, y solo quiero abrazarte. Me haces falta, de verdad. Pero a pesar de la distancia, siento que estás cerquita, como si me acompañaras en cada cosa. Te amo y estoy contando los días para verte de nuevo. Hoy, como siempre, eres mi primer pensamiento."
        },
        martes: {
            title: "Martes de Juegos",
            message: "¿Te acuerdas cuando nos metíamos a jugar Roblox? No sé si lo decimos mucho, pero eso me encanta. Me encanta pasar tiempo contigo, aunque sea en un juego. Me gusta cómo te emocionas, cómo te ríes cuando algo sale mal. En serio, hasta ahí se nota lo especial que eres. Todo lo que compartimos, hasta lo más simple, se vuelve importante para mí porque estás tú.",
            theme: "Reír contigo es lo mejor que hay.",
            photo: "perritoroblox.jpg",
            photoCaption: "Nuestros momentos en Roblox... sí, son recuerdos reales para mí.",
            audioSrc: "martes.mp3",
            audioTranscript: "Hola mi amor. Estaba pensando en lo mucho que me gusta jugar contigo. Aunque estemos lejos, esos ratos son lo máximo. Me río contigo, me emociono contigo, me siento cerca de ti. Eres mi compañera favorita para todo, y no veo la hora de jugar algo, pero esta vez juntos, en persona. Te adoro."
        },
        miercoles: {
            title: "Miércoles Especial - ¡Un Mes Juntos!",
            message: "Un mes, amor. ¡Un mes ya! Y te juro que se siente como si hubieran pasado años, pero de esos bonitos. Cada día contigo ha sido algo nuevo, algo que me llena, algo que me hace feliz. No sé cómo explicarlo, pero me haces bien. Gracias por ser tú, por dejarme entrar en tu vida, por este mes que ha sido el mejor de todos.",
            theme: "Un mes que se siente eterno (en el mejor sentido).",
            photo: "Domingo.jpg",
            photoCaption: "Nuestro primer mes... y el primero de muchos.",
            audioSrc: "miercoles.mp3",
            audioTranscript: "Mi vida, feliz mes. No sabes lo feliz que me siento de estar contigo. Este mes ha sido lo mejor que me ha pasado en mucho tiempo. Me haces reír, pensar, sentir... me haces ser mejor. Gracias por estar aquí, por confiar en mí, por todo. Te amo con locura. Vamos por muchos más."
        },
        jueves: {
            title: "Jueves de Miradas",
            message: "Tus ojos... no sé cómo explicarlo, pero tienen algo. Es como que me dicen todo sin hablar. Cuando te miro, me da paz. Me siento bien. Me gusta cómo me miras, cómo tus ojos se ríen conmigo, cómo me hacen sentir que todo va a estar bien. Me encantaría perderme en ellos ahora mismo.",
            theme: "Tus ojos, mi lugar favorito.",
            photo: "miercoles.jpg",
            photoCaption: "Esa mirada tuya, tan tuya, tan mía.",
            audioSrc: "jueves.mp3",
            audioTranscript: "Hoy solo quiero hablarte de tus ojos. Son mágicos. Me dicen cosas que nadie más ve. Cuando te miro, todo lo demás se apaga. Son hermosos, sí, pero lo que más amo es lo que transmiten. Amor, fuerza, ternura. Todo. Me hacen sentir en casa. Te amo, y tus ojitos... uff, ni se diga."
        },
        viernes: {
            title: "Viernes de Admiración",
            message: "No hay un solo día en que no admire algo de ti. Tu forma de pensar, lo fuerte que eres, cómo ayudas a otros sin esperar nada. Eres única, ¿lo sabías? Siempre estás brillando, incluso cuando crees que no. Y eso me inspira, me enamora, me hace sentir orgulloso de tenerte.",
            theme: "Eres todo lo que admiro en una persona.",
            photo: "viernes.jpg",
            photoCaption: "Esa sonrisa... dice todo lo que eres: luz.",
            audioSrc: "viernes.mp3",
            audioTranscript: "Amor, hoy estuve pensando en lo increíble que eres. Siempre estás dándolo todo, incluso cuando nadie lo nota. Y eso vale mucho. Te admiro tanto, en serio. No solo por lo que haces, sino por cómo eres. No cambies nunca. Eres una persona maravillosa, y me siento afortunado de amarte."
        },
        sabado: {
            title: "Sábado de Confidencias Nocturnas",
            message: "Las noches contigo, aunque sea por llamada o chat, son otra cosa. Me encanta cómo nos abrimos, cómo hablamos de todo sin filtros. Me siento tan conectado a ti en esos momentos. Siento que eres mi persona, la que me entiende, la que me escucha sin juzgar. Es mágico.",
            theme: "Nuestras charlas, mi parte favorita del día.",
            photo: "noche.jpg",
            photoCaption: "Conversaciones que valen oro bajo las estrellas.",
            audioSrc: "sabado.mp3",
            audioTranscript: "Buenas noches, amor. Solo quería decirte que amo nuestras charlas nocturnas. Son como un refugio para mí. Me gusta cómo podemos hablar de todo, reírnos, llorar, soñar... contigo todo es más fácil. Gracias por estar, por quedarte, por confiar. Te amo cada día más."
        },
        domingo: {
            title: "Domingo de Eternidad",
            message: "A veces me pongo a pensar en el futuro, y siempre estás tú ahí. No sé qué pase, pero sé que quiero vivir todo contigo. Lo bueno, lo difícil, lo inesperado. Porque lo que siento por ti es fuerte, es real, es de esos amores que no se acaban. Y eso es lo que quiero darte: un amor que dure para siempre.",
            theme: "Lo nuestro es para siempre, pase lo que pase.",
            photo: "superdomingos.jpg",
            photoCaption: "Nuestro amor no tiene final. Solo un siempre.",
            audioSrc: "domingo.mp3",
            audioTranscript: "Mi amor... este domingo me puse a pensar en ti, en nosotros, en lo que siento. Y no encontré final. Porque lo nuestro es infinito, como esas cosas que no se pueden explicar. Solo sé que te amo más de lo que pensé posible, y que te voy a seguir amando mañana, y el día después, y todos los que vengan."
        }
    };
    // Generar corazones flotantes
    function createFloatingHearts() {
        const hearts = document.getElementById('hearts');
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = (Math.random() * 6 + 3) + 's';
                heart.style.opacity = Math.random() * 0.5 + 0.3;
                heart.style.transform = 'scale(' + (Math.random() * 0.6 + 0.5) + ') rotate(45deg)';
                hearts.appendChild(heart);
                
                // Eliminar el corazón después de la animación
                setTimeout(() => {
                    heart.remove();
                }, 8000);
            }, i * 800);
        }
    }

    // Crear estrellas para el fondo
    function createStars() {
        const stars = document.getElementById('stars');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.width = star.style.height = Math.random() * 3 + 1 + 'px';
            star.style.left = Math.random() * 100 + 'vw';
            star.style.top = Math.random() * 100 + 'vh';
            star.style.animationDelay = Math.random() * 5 + 's';
            stars.appendChild(star);
        }
    }



  // Fecha desde cuando comenzó el amor infinito (puedes poner la que quieras)
  const startDate = new Date('2024-04-01T00:00:00'); // Ajusta a tu gusto

  function updateLoveCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const contadorInfinito = (days * 86400 + hours * 3600 + minutes * 60 + seconds).toLocaleString();

    document.getElementById('countdownTimer').innerHTML =
      `Te amo infinito ❤️ <br> ${contadorInfinito} segundos amándote`;

    setTimeout(updateLoveCounter, 1000);
  }

  updateLoveCounter();


    // Cargar el contenido para un día específico
    function loadDayContent(day) {
        const content = dailyContent[day];
        if (!content) return;
        
        // Mostrar el contenedor de mensaje con animación
        const messageContainer = document.getElementById('messageContainer');
        messageContainer.classList.remove('visible');
        
        setTimeout(() => {
            // Actualizar el título del día
            document.getElementById('messageDayTitle').textContent = content.title;
            
            // Actualizar el texto del mensaje
            document.getElementById('messageText').textContent = content.message;
            
            // Actualizar el tema del día
            document.getElementById('messageTheme').textContent = content.theme;
            
            // Manejar la foto
            const photoContainer = document.getElementById('photoContainer');
            if (content.photo) {
                const photoImage = document.getElementById('photoImage');
                photoImage.src = content.photo;
                document.getElementById('photoCaption').textContent = content.photoCaption;
                photoContainer.style.display = 'block';
            } else {
                photoContainer.style.display = 'none';
            }
            
            // Manejar el audio
            const audioContainer = document.getElementById('audioContainer');
            if (content.audioSrc && content.audioTranscript) {
                // Cargar el archivo de audio correspondiente
                const audioElement = document.getElementById('audioMessage');
                audioElement.src = content.audioSrc;
                document.getElementById('audioTranscript').textContent = content.audioTranscript;
                audioContainer.style.display = 'block';
            } else {
                audioContainer.style.display = 'none';
            }
            
            // Cargar elementos especiales basados en el día
            loadSpecialFeatures(day);
            
            // Mostrar el contenedor con animación
            messageContainer.classList.add('visible');
            
            // Generar algunos corazones para celebrar
            createFloatingHearts();
        }, 500);
    }

    // Cargar características especiales basadas en el día
    function loadSpecialFeatures(day) {
        const specialContainer = document.getElementById('specialFeatureContainer');
        specialContainer.innerHTML = '';
        
        switch(day) {
            case 'martes':
                // Sección de Roblox
                const robloxSection = document.createElement('div');
                robloxSection.classList.add('roblox-section');
                robloxSection.innerHTML = `
                    <h3 class="roblox-title"><i class="fas fa-gamepad"></i> Nuestras Aventuras en Roblox</h3>
                    <p class="roblox-message">Cada momento contigo en Roblox es una aventura. 
                    Me encanta cómo nos divertimos juntos, superando desafíos y creando recuerdos inolvidables. 
                    Tu risa cuando algo sale mal y tu emoción cuando logramos algo... es simplemente perfecto.</p>
                `;
                specialContainer.appendChild(robloxSection);
                break;
                
            case 'jueves':
                // Sección de Ojos
                const eyesSection = document.createElement('div');
                eyesSection.classList.add('eyes-section');
                eyesSection.innerHTML = `
                    <h3><i class="fas fa-eye"></i> La Ventana a Tu Alma</h3>
                    <p class="eyes-message">Tus ojos son lo más hermoso que he visto en mi vida. 
                    Podría perderme en ellos para siempre. Son el reflejo de tu alma pura y tu corazón bondadoso.</p>
                `;
                specialContainer.appendChild(eyesSection);
                break;
                
            case 'sabado':
                // Sección de Charlas Nocturnas
                const nightTalksSection = document.createElement('div');
                nightTalksSection.classList.add('night-talks-section');
                
                // Crear estrellas para el fondo de esta sección
                const starsBg = document.createElement('div');
                starsBg.classList.add('stars-bg');
                for (let i = 0; i < 50; i++) {
                    const star = document.createElement('div');
                    star.classList.add('star');
                    star.style.width = star.style.height = Math.random() * 3 + 1 + 'px';
                    star.style.left = Math.random() * 100 + '%';
                    star.style.top = Math.random() * 100 + '%';
                    star.style.animationDelay = Math.random() * 5 + 's';
                    starsBg.appendChild(star);
                }
                nightTalksSection.appendChild(starsBg);
                
                const nightContent = document.createElement('div');
                nightContent.classList.add('night-talks-content');
                nightContent.innerHTML = `
                    <h3 class="night-talks-title"><i class="fas fa-moon"></i> Nuestras Noches Juntos</h3>
                    <p class="night-talks-message">En la tranquilidad de la noche, cuando todo se silencia, 
                    nuestras voces encuentran su melodía perfecta. Esos momentos en que el mundo parece detenerse
                    y solo existimos tú y yo, compartiendo nuestros pensamientos más profundos, nuestros sueños,
                    nuestros miedos... son los momentos que más atesoro.</p>
                `;
                nightTalksSection.appendChild(nightContent);
                specialContainer.appendChild(nightTalksSection);
                break;
        }
    }

    // Añadir galería de fotos
    function setupGallery() {
        const galleryContainer = document.getElementById('galleryContainer');
        
        // Aquí deberías poner tus fotos reales en lugar de los placeholders
        const galleryPhotos = [
            { src: "1.jpg", caption: "El dia que solo pensaba en besarte " },
            { src: "2.jpg", caption: "Cuando me dijiste que era lindo" },
            { src: "3.jpg", caption: "Cuando te cause ternura" },
            { src: "4.jpg", caption: "Una de mis primeras fotos" },
            { src: "5.jpg", caption: "Queria que me vieras" },
            { src: "6.jpg", caption: "Mostrandome mis brackets" },
            { src: "7.jpg", caption: "Estaba tan feliz de verte" },
            { src: "8.jpg", caption: "Sensuall para ti" },
            { src: "9.jpg", caption: "Abejita" },
            { src: "10.jpg", caption: "Oeluqueado para mi babe" }
        ];
        
        galleryPhotos.forEach((photo, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.innerHTML = `
                <img src="${photo.src}" alt="Foto ${index+1}" class="gallery-img">
                <div class="gallery-caption">${photo.caption}</div>
            `;
            
            // Añadir evento para abrir foto en modal
            galleryItem.addEventListener('click', () => {
                openPhotoModal(photo.src, photo.caption);
            });
            
            galleryContainer.appendChild(galleryItem);
        });
    }

    // Función para abrir el modal de fotos
    function openPhotoModal(src, caption) {
        // Crear el modal si no existe
        let modal = document.getElementById('photoModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'photoModal';
            modal.classList.add('modal');
            
            const modalContent = document.createElement('div');
            modalContent.classList.add('modal-content');
            
            const closeBtn = document.createElement('span');
            closeBtn.classList.add('close-modal');
            closeBtn.innerHTML = '&times;';
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
            
            const modalImg = document.createElement('img');
            modalImg.id = 'modalImage';
            modalImg.classList.add('modal-image');
            
            const modalCaption = document.createElement('div');
            modalCaption.id = 'modalCaption';
            modalCaption.classList.add('modal-caption');
            
            modalContent.appendChild(closeBtn);
            modalContent.appendChild(modalImg);
            modalContent.appendChild(modalCaption);
            modal.appendChild(modalContent);
            
            document.body.appendChild(modal);
            
            // Cerrar el modal cuando se hace clic fuera de la imagen
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
        
        // Actualizar la imagen y el texto del modal
        document.getElementById('modalImage').src = src;
        document.getElementById('modalCaption').textContent = caption;
        
        // Mostrar el modal
        modal.style.display = 'block';
    }

    // Inicializar la página
    function init() {
        // Configurar los botones de los días
        document.querySelectorAll('.day-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const day = this.getAttribute('data-day');
                loadDayContent(day);
            });
        });
        
        // Configurar la galería
        setupGallery();
        
        // Iniciar el contador
        updateCountdown();
        
        // Crear estrellas para el fondo
        createStars();
        
        // Generar corazones flotantes periódicamente
        setInterval(createFloatingHearts, 10000);
        
        // Pequeña animación inicial
        setTimeout(createFloatingHearts, 1000);
    }
    
    // Iniciar todo
    init();
});