function addServicesCard(params = {}) {
    const template = document.querySelector('#services__template');
    const servicesContainer = document.querySelector('.services__container');
    template.content.querySelector('.services__img').src = params.image;
    template.content.querySelector('.services__sub-title').textContent = params.title;
    template.content.querySelector('.services__paragraph').textContent = params.paragraph;

    const clone = document.importNode(template.content, true);
    servicesContainer.appendChild(clone);
}

function getDataBaseServices() {
    return fetch('https://cdn.contentful.com/spaces/1d60e1ciwpqn/environments/master/entries?access_token=Rji7eHIWJB6RwwDm2L1m35YgpJDSktCtH_od6cdtdvs&content_type=servicesCard').then((res)=> {
        return res.json();
    }).then((data)=> {
        const collection = data.items.map((item)=> {
            const image = getByIdImage(item.fields.imgnn.sys.id, data);
            const imageUrl = image.fields.file.url;
            return {
                image: imageUrl,
                title: item.fields.titulo,
                paragraph: item.fields.descripcion,
            }
        });
        return collection;
    });
}

function fitterServices() {
    const dataBase = getDataBaseServices().then((data)=> {
        for (const item of data) {
            addServicesCard(item);
        }
    });
    return dataBase;
}

function getByIdImage(id, data) {
    const idEncontrado = data.includes.Asset.find((item)=> {
        return item.sys.id == id;
    });
    return idEncontrado;
}

function main() {
    headerComponent(document.querySelector('.header__component'));
    headerMenu();
    footerComponent(document.querySelector('.footer__component'));
    fitterServices();
    getDataBaseServices();
}
main();