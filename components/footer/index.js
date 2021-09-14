function footerComponent(el) {
    const componentEl = document.createElement('div');
    componentEl.innerHTML = `
    <section class="footer">
            <footer class="footer__container">
                <h2 class="footer__logo">Ramiro</h2>
    
                <div class="footer__container-networks">
    
                    <h3 class="footer__title-networks">Instagram</h3>
                    <img src="./images/instagram (4).png" alt="instagram" class="footer__networks-img">
        
                    <h3 class="footer__title-networks">Linkedin</h3>
                    <img src="./images/linkedin (1).png" alt="linkedin" class="footer__networks-img">
        
                    <h3 class="footer__title-networks">Github</h3>
                    <img src="./images/github.png" alt="github" class="footer__networks-img">
    
                </div>
            </footer>
        </section>
    `
    const footer = componentEl.querySelector('.footer__container');
    el.appendChild(footer);
    }