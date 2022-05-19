/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
$('#portfolioModal1').on('show.bs.modal', function () {
    const portfoliocontent = document.getElementById('portFolioModalContent1');
    const elementListPhp = [
        {
            title: 'Jeu Siam',
            keys: ['PHP, HTML/CSS', 'Ajax', 'Base de donnée (SQL)', 'BootStrap'],
            images: ['siam1.PNG', 'siam2.PNG', 'siam3.PNG', 'siam4.PNG'],
            description: `Jeu jouable en ligne possédant donc un système de connection.
            Le jeu est pour expliquer briévement un jeu de qui mix les régles du Baggamon et des Echecs 
            Il est donc jouer tour à tour, pour faire cela il nous faut crée une partie et selectionnez les régles de la partie
            ,qu'une personne nous rejoigne et de la démarre la partie
            Vous pouvez jouez votre tour si c'est le votre, puis attendre que votre adversaire fasse son tour, lorsque cela arrivera, vous recevrez une 
            notification que vous pouvez jouer, jusqu'a qu'un vainqueur sois decider, ces parties seront retrouvables dans l'espace historique du compte.
            Vous pouvez jouer plusieurs partie à la fois, dans une durée de temps illimité.`,
            rendus: null
        },
        {
            title: 'Bibliotheque',
            keys: ['PHP', 'HTML/CSS', 'Jquery', 'Base de données (SQLite)', 'BootStrap', 'Rapport en Markdown'],
            images: ['bibliotheque1.PNG', 'bibliotheque2.png', 'bibliotheque3.PNG', 'bibliotheque4.PNG', 'bibliotheque5.PNG'],
            description: `Site de commande et de prêt de livres,
            ce site possède donc un systéme de connection pour les visiteurs, une bibliothéque généré par une base de donnée,
            un systéme de recherche de livres et une demande de prêt.
            Coté admin, on peut gerer les utilisateurs, gerer les prêts et gerer les livres en y ajoutant et supprimant des livres.`,
            rendus: null
        },
    ]
    let htmlContent = writePortfolioModal('php', elementListPhp);
    if (portfoliocontent !== null)
        portfoliocontent.innerHTML = htmlContent;
})
let rockPaperScissorsRendu = rockPaperScissors();
$('#portfolioModal2').on('show.bs.modal', function () {
    const portfoliocontent = document.getElementById('portFolioModalContent2');
    const elementListPhp = [
        {
            title: 'Projet Thalassa',
            keys: ['JS', 'HTML/CSS', 'Code Sprint'],
            images: ['thalassa1.PNG'],
            description: `Il s'agit de cadre de dessin capturant le clique de l'utilisateur pour dessiner des lines
            d'autres cadres sont disponibles pour copier le dessin d'origine et l'inverser `,
            rendus: null
        },
        {
            title: 'Pierre Feuille Ciseaux',
            keys: ['JS', 'HTML/CSS', 'Jquery'],
            images: ['rockPaperScissors.PNG'],
            description: `Un simple jeu de pierre feuille ciseaux jouable contre un ordinateur `,
            rendus: rockPaperScissorsRendu
        },
        {
            title: 'Breakout',
            keys: ['JS', 'HTML/CSS', 'Jquery'],
            images: ['breakout1.PNG', 'breakout2.PNG'],
            description: `Le jeu classique Breakout `,
            rendus: null
        },
    ]
    let htmlContent = writePortfolioModal('js', elementListPhp);
    if (portfoliocontent !== null)
        portfoliocontent.innerHTML = htmlContent;
})

$('#portfolioModal3').on('show.bs.modal', function () {
    const portfoliocontent = document.getElementById('portFolioModalContent3');
    const elementListPhp = [
        {
            title: 'Snake',
            keys: ['Java'],
            images: ['snake1.PNG', 'snake2.PNG'],
            description: `Jeu snake simple,le serpent est de couleur aléatoire et des pieges peuvent apparaitre`,
            rendus: null
        },
    ]
    let htmlContent = writePortfolioModal('c', elementListPhp);
    if (portfoliocontent !== null)
        portfoliocontent.innerHTML = htmlContent;
})
$('#portfolioModal4').on('show.bs.modal', function () {
    const portfoliocontent = document.getElementById('portFolioModalContent4');
    const elementListPhp = [
        {
            title: 'Snake',
            keys: ['Java'],
            images: ['snake1.PNG', 'snake2.PNG'],
            description: `Jeu snake simple,le serpent est de couleur aléatoire et des pieges peuvent apparaitre`,
            rendus: null
        },
    ]
    let htmlContent = writePortfolioModal('java', elementListPhp);
    if (portfoliocontent !== null)
        portfoliocontent.innerHTML = htmlContent;
})
$('#portfolioModal5').on('show.bs.modal', function () {
    const portfoliocontent = document.getElementById('portFolioModalContent5');
    const elementListPhp = [
        {
            title: 'Snake',
            keys: ['Java'],
            images: ['snake1.PNG', 'snake2.PNG'],
            description: `Jeu snake simple,le serpent est de couleur aléatoire et des pieges peuvent apparaitre`,
            rendus: null
        },
    ]
    let htmlContent = writePortfolioModal('python', elementListPhp);
    if (portfoliocontent !== null)
        portfoliocontent.innerHTML = htmlContent;
})
$('#portfolioModal6').on('show.bs.modal', function () {
    const portfoliocontent = document.getElementById('portFolioModalContent6');
    
    const elementListPhp = [
        {
            title: 'Session de connection',
            keys: ['Dart', 'Flutter', 'Firebase'],
            images: ['dartconnection1.PNG', 'dartconnection2.PNG', 'dartconnection3.PNG'],
            description: `Systeme de connection lié a une base de donnée Firebase, avec des conditions general à accepter lors de la premiere
            connection `,
            rendus: null
        },
        {
            title: 'News sur Windows',
            keys: ['Dart', 'Flutter', 'Fluent', 'API'],
            images: ['dartnews1.PNG', 'dartnews2.PNG'],
            description: `C'est une application sur Windows qui recupere, trie, et affiche les nouvelles recentes à partir d'un API`,
            rendus: null
        },
        {
            title: 'Hotels',
            keys: ['Dart', 'Flutter'],
            images: ['darthotels.PNG'],
            description: `Une application vitrine d'hotel `,
            rendus: null
        },
        {
            title: 'Space shooter',
            keys: ['Dart', 'Flutter','Flame'],
            images: ['spaceshooter1.PNG','spaceshooter2.PNG'],
            description: `Un jeu spaceshooter disponible à la fois sur mobile et sur le web, le jeu reste simple malgré une difficulté graduellement 
            progressive en fonction du score `,
            rendus: null
        },
    ]
    let htmlContent = writePortfolioModal('dart', elementListPhp);
    if (portfoliocontent !== null)
        portfoliocontent.innerHTML = htmlContent;
})

function writePortfolioModal(themeTitle, elementList) {
    let htmlString = `

    <div class="modal-header border-0">
    <i class="fa-brands fa-`+ themeTitle + ` fa-5x"></i>
        <button class="btn-close" type="button" data-bs-dismiss="modal"aria-label="Close"></button>
    </div>
    <div class="modal-body text-center pb-5">
        <div class="row justify-content-center">
            <div class="col-lg-11">
                <div id="carousel`+ themeTitle + `" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                    
                        <button type="button" data-bs-target="#carousel`+ themeTitle + `" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 0"></button> 
                        `;
    for (let index = 1; index < elementList.length; index++) {
        htmlString += '<button type="button" data-bs-target="#carousel' + themeTitle + '" data-bs-slide-to=' + index + ' aria-current="true" aria-label="Slide' + index + '"></button>';
    }
    htmlString += `
        </div> 
            <div class="carousel-inner">
                <div class="carousel-item active">`;
    htmlString += writePortFolioBody(themeTitle, elementList[0].title, elementList[0].keys, elementList[0].images, elementList[0].description, elementList[0].rendus);
    htmlString += `</div>`
    for (let index = 1; index < elementList.length; index++) {
        htmlString += '<div class="carousel-item">'
        htmlString += writePortFolioBody(themeTitle, elementList[index].title, elementList[index].keys, elementList[index].images, elementList[index].description, elementList[index].rendus);
        htmlString += `</div>`
    }
    htmlString += `
                    </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel`+ themeTitle + `" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Précédent</span> </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carousel`+ themeTitle + `" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Suivant</span> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    `;
    return htmlString
}

function writePortFolioElementHeader(ElementTitle) {
    return `
    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">`+ ElementTitle + `</h2>
    <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div> 
    </div>
    `;
}
function writePortFolioDescription(description, formattedTitle) {
    let htmlString = ` 
        <div class="tab-pane fade" id="navdescription`+ formattedTitle + `" role="tabpanel">
        `+ description + `
        </div>`
    return htmlString
}

function writePortfolioElementImgCarousel(imgs, formattedTitle, themeTitle) {
    let htmlString = `
    <div class="tab-pane fade bottomSlider" id="navcarousel`+ formattedTitle + `" role="tabpanel">
                <div class="carousel">
                    <input type="radio" name="slides" checked="checked" id="slide-`+ formattedTitle + `1">
                        `
    var nb = 2;
    for (let index = 1; index < imgs.length; index++) {
        htmlString += '<input type="radio" name="slides" id="slide-' + formattedTitle + nb + '">'
        nb++;
    }
    htmlString += '<ul class="carousel__slides">';
    imgs.forEach(element => {
        htmlString += `
        <li class="carousel__slide">
            <figure>
                <div class="card">
                    <img src="assets/img/portfolio/`+ themeTitle + `/` + element + `" alt="">
                </div>
            </figure>
        </li> `
    });
    htmlString += `
    </ul>
    <ul class="carousel__thumbnails">`
    nb = 1;
    imgs.forEach(element => {
        imglinkbuilder = element.split('.');
        imglinkbuilder[0] = imglinkbuilder[0].concat('Th.');
        imglink = imglinkbuilder[0].concat(imglinkbuilder[1]);
        htmlString += `
        <li><label for="slide-`+ formattedTitle + nb + `"><img src="assets/img/portfolio/` + themeTitle + `/` + imglink + ` " alt=""></label></li>`
        nb++;
    });
    htmlString += `</ul >
                </div>
    </div>`
    return htmlString;
}
function writePortFolioRendu(rendus, formattedTitle) {
    let htmlString = '';
    if (rendus !== null) {
        htmlString += ` 
    <div class="tab-pane fade" id="navrendus`+ formattedTitle + `" role="tabpanel">
    `+ rendus + `
    </div>`
    }
    return htmlString

}
function writePortFolioTabPanel(key, imgs, description, rendus, formattedTitle, themeTitle) {
    let htmlString = ` 
    <div class="tab" role="tabpanel">
        <div class="nav nav-tabs" id="nav-tab`+ formattedTitle + `" role="tablist">
            <ul class="nav nav-tabs" role="tablist">
                <li class="presentation"> <a class="nav-link" data-bs-toggle="tab" data-bs-target="#navmotcle`+ formattedTitle + `" type="button" role="tab"aria-selected="true"> <span><i class="fa fa-key fa-2xl"></i></span><p>Mot clés </p></a></li>
                <li class="presentation"> <a class="nav-link" data-bs-toggle="tab" data-bs-target="#navcarousel`+ formattedTitle + `" type="button" role="tab" aria-selected="true"><span><i class="fa fa-magnifying-glass fa-2xl"></i></span> <p>Aperçus </p></a></li>
                <li class="presentation"> <a class="nav-link" data-bs-toggle="tab" data-bs-target="#navdescription`+ formattedTitle + `" type="button" role="tab" aria-selected="true"><span><i class="fa fa-clipboard fa-2xl"></i></span> <p>Description</p></a></li>
                `
    if (rendus !== null) {
        htmlString += `
                    <li class="presentation disabled"> <a class="nav-link" data-bs-toggle="tab" data-bs-target="#navrendus`+ formattedTitle + `" type="button" role="tab" aria-selected="true"><span><i class="fa fa-hand-holding fa-2xl"></i></span> <p>Rendu</p></a></li>
                `} else {
        htmlString += `<li class="presentation "> <a class="nav-link disabled" data-bs-toggle="tab" data-bs-target="" type="button" role="tab" aria-selected="true"><span><i class="fa fa-hand-holding fa-2xl"></i></span> <p>Rendu</p></a></li>
                `}
    htmlString += `
            </ul>
        </div> 
        <div class="tab-content tabs" id="nav-tabContent`+ formattedTitle + `">
    `
    htmlString += writePortfolioElementKeys(key, formattedTitle)
    htmlString += writePortfolioElementImgCarousel(imgs, formattedTitle, themeTitle)
    htmlString += writePortFolioDescription(description, formattedTitle)
    htmlString += writePortFolioRendu(rendus, formattedTitle)
    htmlString += '</div></div></div>'
    return htmlString
}

function writePortfolioElementKeys(key, formattedTitle) {
    let htmlString = ` 
        <div class="tab-pane fade show active" id="navmotcle`+ formattedTitle + `" role="tabpanel">
        <ul class="list-group" >
    `
    key.forEach(element => {
        htmlString += '<li class="list-group-item"> ' + element + ' </li>'
    });
    htmlString += `
        </ul>
    </div>`
    return htmlString;
}

function writePortFolioBody(themeTitle, elementTitle, key, imgs, description, rendus) {
    var formattedTitle = elementTitle.replace(/\s+/g, '');
    let htmlString = `
    <div class="modal-body text-center pb-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
    `
    htmlString += writePortFolioElementHeader(elementTitle);
    htmlString += writePortFolioTabPanel(key, imgs, description, rendus, formattedTitle, themeTitle);
    htmlString += '</div></div></div>'
    return htmlString;
}

function copy(text, target) {
    setTimeout(function () {
        $('#copied_tip').remove();
    }, 800);
    $(target).append("<div class='tip' id='copied_tip'>Copié!</div>");
    var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input)
    return result;
}
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

const elts = {
    text1: document.getElementById("morphingtext1"),
    text2: document.getElementById("morphingtext2")
};

// The strings to morph between. You can change these to anything you want!
const texts = [
    "Developpeur WEB",
    "Developpeur Mobile",
    "Futur Ingenieur",
];

// Controls the speed of morphing.
const morphTime = 1;
const cooldownTime = 1.5;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

// A lot of the magic happens here, this is what applies the blur filter to the text.
function setMorph(fraction) {
    // fraction = Math.cos(fraction * Math.PI) / -2 + .5;

    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

// Animation loop, which is called every frame.
function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}
animate();
var colors = new Array(
    [62,35,255],
    [60,255,60],
    [255,35,98],
    [45,175,230],
    [255,0,255],
    [255,128,0]);
  
  var step = 0;
  //color table indices for: 
  // current color left
  // next color left
  // current color right
  // next color right
  var colorIndices = [0,1,2,3];
  
  //transition speed
  var gradientSpeed = 0.002;
  
  function updateGradient()
  {
    
    if ( $===undefined ) return;
    
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];
  
  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";
  
  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";
  
   $('#gradient').css({
     background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
    step += gradientSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      
      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      
    }
  }
  
  setInterval(updateGradient,10);

