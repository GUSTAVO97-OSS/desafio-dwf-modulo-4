function contactComponent(el) {
    const componentEl = document.createElement('div');
    componentEl.innerHTML = `
    <section class="contact">
    <h2 class="contact__title">Escribime</h2>
    <form class="contact__form">
        <label>
            <span class="contact__label">Nombre</span>
            <input id="nombre" class="contact__input" type="text">
        </label>
        <label>
            <span class="contact__label">Email</span>
            <input id="email" class="contact__input" type="text">
        </label>
        <label>
            <span id="mensaje" class="contact__label">Mensaje</span>
            <textarea class="contact__input"></textarea>
        </label>
        <div class="contact__submit-cont">
            <button class="contact__submit-button">Enviar</button>
        </div>
    </form>
    </section>`;
    
        const form = componentEl.querySelector('.contact__form');
        form.addEventListener('submit', function(e){
        e.preventDefault();
        console.log('el formulario se envió');
    
    const name = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#mensaje').value;
    
    const data = {
        to: email,
        message: message
    }
     return fetch('https://apx-api.vercel.app/api/utils/dwf', {
         method: 'post',
         headers: {"content-type": "application/json"},
         body: JSON.stringify(data),
        }).then((response)=> {
         return response.text();
        }).then((text)=> {
         console.log(text);
        }).catch((error)=> {
         console.error(error);
        })
        });
    
    el.appendChild(componentEl);
    }