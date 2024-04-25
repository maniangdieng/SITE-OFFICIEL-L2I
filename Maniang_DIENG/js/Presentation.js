document.addEventListener("DOMContentLoaded", function() {
    var currentPath = window.location.pathname; // Récupérer le chemin de l'URL actuelle
    var menuLinks = document.querySelectorAll('.presentation .container .menu li a');

    menuLinks.forEach(function(link) {
        var linkPath = new URL(link.href).pathname; // Récupérer le chemin de l'URL du lien
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});




// Presentation.js

$(document).ready(function() {
    // Cacher tous les détails initialement
    $('.details').hide();

    // Gérer le clic sur chaque option
    $('.admission li').click(function() {
        // Trouver les détails correspondants à cette option
        const details = $(this).find('.details');

        // Basculer l'affichage des détails
        details.toggle();
    });
});



/// JavaScript
function showInfo(studentId) {
    var studentInfo = document.getElementById(studentId); 
    var additionalInfo = studentInfo.querySelector('.additional-info'); 
    additionalInfo.style.display = 'block';
}

function hideInfo(studentId) {
    var studentInfo = document.getElementById(studentId); 
    var additionalInfo = studentInfo.querySelector('.additional-info'); 
    additionalInfo.style.display = 'none';
}


// JavaScript
function openModal(studentName) {
    var modal = document.getElementById("myModal");
    var modalTitle = modal.querySelector("#modal-title");
    var modalText = modal.querySelector("#modal-text");

    // Remplir le contenu de la fenêtre modale avec les informations de l'étudiant
    modalTitle.textContent = studentName;
    if (studentName === 'Maniang DIENG') {
        modalText.textContent = "Je m'appele Maniang DIENG et je suis étudiant en licence 2 L2I . Je  suis le developpeur de ce site que vous êtes entrain de consulter juste pour vous dire les compétences que j'ai pu acquerir grace a cette formation. Dans cette formation, toutes les conditions sont optimales pour faire de vous un AS de l'informatique quelque soit le domaine que vous souhaiter apprendre .Je vous conseille donc vivement de vous y inscrire !!";
    } else if (studentName === 'Yaya Drame') {
        modalText.textContent = "Etudiant en Licence 2 Ingénierie Informatique. J'ai suivi cette formation car j'ai toujours été un passionné de technologie.Pour un eformation de qualité, j'ai opté pour la L2I afinde faire vivre ma passion.Cette formation m'a permis de découvrir et d'acquerir des compétences incroyables dans le domaine de l'informatique.Alors si vous êtes un fan de tech et que vous chercher une formation, vous êtes au bon endroit !!";
    } else if (studentName === 'Bassirou MBOUP') {
        modalText.textContent = "Etudiant en Licence 1 Ingénierie Informatique. Fraichement bachelier il m'ai venu la question de savoir quelle formation choisir pour mon avenir . Etant conscient que notre futur sera basé sur l'informatique , il me fallait une formation de qualité pour m'imposer dans ce domaine et c'est ainsi que j'ai choisi la L2I .Depuis le début de ma formation, j'ai pu en apprendre enormement sur l'informatique qui etait pour moi un domaine inconnu . Donc si comme moi vous penser que l'informatique est notre avenir choisissez la L2I pour une formation de qualité.";
    }

    // Afficher la fenêtre modale
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}





    


    // Fonction pour ouvrir le formulaire
function openForm() {
    var form = document.getElementById("form");
    form.style.display = "block"; // Affiche le formulaire
    location.href = "#form"; // Fait défiler la page jusqu'au formulaire
}

// Fonction pour fermer le formulaire
function closeForm() {
    var form = document.getElementById("form");
    form.style.display = "none"; // Masque le formulaire
}



// Fonction pour fermer manuellement le formulaire
function closeFormManually() {
    closeForm(); // Appelle la fonction de fermeture du formulaire
}


document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.presentation, .admission, .Debouche, .motivation, .section5, .ok');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateSections() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', animateSections);
});









