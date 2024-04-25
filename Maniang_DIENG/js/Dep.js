document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.href;
    var menuLinks = document.querySelectorAll('.menu li a');
    
    menuLinks.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
});


function validateForm() {
    var prenom = document.getElementById('prenom').value;
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var telephone = document.getElementById('telephone').value;
    var message = document.getElementById('message').value;
    var prenomError = document.getElementById('prenomError');
    var nomError = document.getElementById('nomError');
    var emailError = document.getElementById('emailError');
    var telephoneError = document.getElementById('telephoneError');
    var messageError = document.getElementById('messageError');
    var valid = true;
  
    prenomError.textContent = '';
    nomError.textContent = '';
    emailError.textContent = '';
    telephoneError.textContent = '';
    messageError.textContent = '';
  
    if (!isValidName(prenom)) {
      prenomError.textContent = 'Le prénom doit contenir entre 2 et 30 lettres.';
      valid = false;
    }
  
    if (!isValidName(nom)) {
      nomError.textContent = 'Le nom doit contenir entre 2 et 30 lettres.';
      valid = false;
    }
  
    if (!isValidEmail(email)) {
      emailError.textContent = 'Format d\'email invalide.';
      valid = false;
    }
  
    if (telephone.length !== 9 || isNaN(telephone)) {
      telephoneError.textContent = 'Le numéro de téléphone doit contenir 9 chiffres.';
      valid = false;
    } else {
      var prefixesAutorises = ['77', '76', '70', '78', '75'];
      var prefixe = telephone.substring(0, 2);
      if (!prefixesAutorises.includes(prefixe)) {
        telephoneError.textContent = 'Le préfixe du numéro de téléphone est invalide.';
        valid = false;
      }
    }
  
    if (message.length < 10) {
      messageError.textContent = 'Le message doit contenir au moins 10 caractères.';
      valid = false;
    }
  
    if (valid) {
        // Afficher un message de confirmation
        alert("Votre message a été envoyé avec succès !");
        // Réinitialiser le formulaire
        document.getElementById("contactForm").reset();
    }
  
    return valid;
}

function isValidName(name) {
    return name.length >= 2 && name.length <= 30 && /^[a-zA-Z\s]*$/.test(name);
}

function isValidEmail(email) {
    return email.includes('@');
}
