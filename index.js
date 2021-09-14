function addTitleWelcome(params = {}) {

    const template = document.querySelector('#home__welcome-template');
    const welcomeContainer = document.querySelector('.home__container-welcome');
    template.content.querySelector('.home__title').textContent = params.title;
    template.content.querySelector('.home__subtitle').textContent = params.presentation;
    
    const clone = document.importNode(template.content, true);
    welcomeContainer.appendChild(clone);
    };
    
    
    function addPresentation(params = {}) {
        
        const template = document.querySelector('#presentation__template');
        const presentationContainer = document.querySelector('.presentation__container');
        template.content.querySelector('.presentation__title').textContent = params.title;
        template.content.querySelector('.presentation__paragraph').textContent = params.paragraph;
        template.content.querySelector('.presentation__img').src = params.image;
        
        
        const clone = document.importNode(template.content, true);
        presentationContainer.appendChild(clone);
    };
    
    
    function addWorkCard(params = {}) {
        
        const template = document.querySelector('#services__card-template');
        const servicesCont = document.querySelector('.services__container');
        template.content.querySelector('.services__sub-title').textContent = params.title;
        template.content.querySelector('.services__paragraph').textContent = params.description;
        template.content.querySelector('.services__img').src = params.image;
        
        
        const clone = document.importNode(template.content, true);
        servicesCont.appendChild(clone);
    };
    
    
    function getDataBaseWelcome() {
        return fetch('https://cdn.contentful.com/spaces/1d60e1ciwpqn/environments/master/entries?access_token=Rji7eHIWJB6RwwDm2L1m35YgpJDSktCtH_od6cdtdvs&content_type=bienvenida').then((res)=> {
            return res.json();
        }).then((data)=> {
            const itemWelcome = data.items.map((item)=> {
                return {
                    title: item.fields.bienvenida,
                     presentation: item.fields.nombre,
                    }
                });
                return itemWelcome;
            });
        };
        
        
    function getDataBasePresentation() {
        return fetch('https://cdn.contentful.com/spaces/1d60e1ciwpqn/environments/master/entries?access_token=Rji7eHIWJB6RwwDm2L1m35YgpJDSktCtH_od6cdtdvs&content_type=presentacion').then((res)=> {
            return res.json();
        }).then((data)=> {
            const itemPresentation = data.items.map((item)=> {
                const image = getByIdImage(item.fields.foto.sys.id, data);
                const imageUrl = image.fields.file.url;
                return {
                    title: item.fields.nombre,
                    paragraph: item.fields.presentacion,
                    image: imageUrl,
                }
            });
                return itemPresentation;
        });
    };
        
        
    function getDataBaseService() {
        return fetch('https://cdn.contentful.com/spaces/1d60e1ciwpqn/environments/master/entries?access_token=Rji7eHIWJB6RwwDm2L1m35YgpJDSktCtH_od6cdtdvs&content_type=servicesCard').then((res)=> {
            return res.json();
        }).then((data)=> {
            const Collection = data.items.map((item)=> {
                const image = getByIdImage(item.fields.imgnn.sys.id, data);
                const imageUrl = image.fields.file.url;
                return {
                    title: item.fields.titulo,
                    description: item.fields.descripcion,
                    image: imageUrl,  
                }
            });
                return Collection;
        });
    };
      
    
    function getByIdImage(id, data) {
            const idEncontrado = data.includes.Asset.find((asset)=> {
                return asset.sys.id == id;
            });
                return idEncontrado;
    };
        
    
    function fitterBienvenida() {
            const dataBase = getDataBaseWelcome().then((data)=> {
                for(const item of data) {
                    addTitleWelcome(item);
            }
        });
                return dataBase;
    };
    
    
    function fitterPresentation() {
        const dataBase = getDataBasePresentation().then((data)=> {
            for(const item of data) {
                addPresentation(item);
            }
        });
                return dataBase;
    };
    
    
    function fitterService() {
        const dataBase = getDataBaseService().then((data)=> {
        for(const item of data) {
             addWorkCard(item);
        }
    });
            return dataBase 
    };
    
    
    function main() {
        fitterPresentation();
        fitterBienvenida();
        fitterService();
        
        contactComponent(document.querySelector('.form-container'));
        
        footerComponent(document.querySelector('.footer-container'));
        
        headerComponent(document.querySelector('.header__component'));
        headerMenu();
    }
    main();