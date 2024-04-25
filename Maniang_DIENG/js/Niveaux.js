document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.href;
    var menuLinks = document.querySelectorAll('.menu li a');
    
    menuLinks.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
});



function toggleForm() {
    var form = document.getElementById("ajoutForm");
    form.style.display = form.style.display === "none" ? "block" : "none";
  }

  function validateForm() {
    var nom = document.getElementById("nom").value;
    var description = document.getElementById("description").value;

    if (nom.length < 8 || nom.length > 30) {
      alert("Le nom doit contenir entre 8 et 30 caractères.");
      return false;
    }

    if (description.length < 50) {
      alert("La description doit contenir au moins 50 caractères.");
      return false;
    }

    // Ajout de l'enseignement au tableau
    var table = document.querySelector(".mj");
    var newRow = table.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = "<h4 style='margin: auto;'>" + nom + "</h4>";
    cell2.innerHTML = "<p class='ok'>" + description + "</p>";

    // Réinitialiser le formulaire
    document.getElementById("nom").value = "";
    document.getElementById("description").value = "";

    // Cacher le formulaire
    toggleForm();

    return false; // Empêcher la soumission du formulaire
  }

 
    function addEnseignement() {
      var nom = document.getElementById("nom").value;
      var description = document.getElementById("description").value;

      // Création d'une nouvelle ligne dans le tableau avec les données saisies
      var newRow = document.createElement("tr");
      newRow.innerHTML = "<td><h4 style='margin: auto;'>" + nom + "</h4></td><td><p class='ok'>" + description + "</p></td>";
      document.getElementById("enseignements").appendChild(newRow);

      toggleForm(); // Cacher le formulaire après l'ajout
    }






    function toggleForm2() {
        var form = document.getElementById("ajoutForm2");
        form.style.display = form.style.display === "none" ? "block" : "none";
      }
    
      function validateForm2() {
        var nom = document.getElementById("nom2").value;
        var description = document.getElementById("description2").value;
    
        if (nom.length < 8 || nom.length > 30) {
          alert("Le nom doit contenir entre 8 et 30 caractères.");
          return false;
        }
    
        if (description.length < 50) {
          alert("La description doit contenir au moins 50 caractères.");
          return false;
        }
    
        // Ajout de l'enseignement au tableau
        var table = document.querySelector(".mk");
        var newRow = table.insertRow(-1);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        cell1.innerHTML = "<h4 style='margin: auto;'>" + nom + "</h4>";
        cell2.innerHTML = "<p class='ok'>" + description + "</p>";
    
        // Réinitialiser le formulaire
        document.getElementById("nom").value = "";
        document.getElementById("description").value = "";
    
        // Cacher le formulaire
        toggleForm2();
    
        return false; // Empêcher la soumission du formulaire
      }
    
     
        function addEnseignement() {
          var nom = document.getElementById("nom").value;
          var description = document.getElementById("description").value;
    
          // Création d'une nouvelle ligne dans le tableau avec les données saisies
          var newRow = document.createElement("tr");
          newRow.innerHTML = "<td><h4 style='margin: auto;'>" + nom + "</h4></td><td><p class='ok'>" + description + "</p></td>";
          document.getElementById("enseignements").appendChild(newRow);
    
          toggleForm2(); // Cacher le formulaire après l'ajout
        }




        

    function toggleForm3() {
        var form = document.getElementById("ajoutForm3");
        form.style.display = form.style.display === "none" ? "block" : "none";
      }
    
      function validateForm3() {
        var nom = document.getElementById("nom3").value;
        var description = document.getElementById("description3").value;
    
        if (nom.length < 8 || nom.length > 30) {
          alert("Le nom doit contenir entre 8 et 30 caractères.");
          return false;
        }
    
        if (description.length < 50) {
          alert("La description doit contenir au moins 50 caractères.");
          return false;
        }
    
        // Ajout de l'enseignement au tableau
        var table = document.querySelector(".ml");
        var newRow = table.insertRow(-1);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        cell1.innerHTML = "<h4 style='margin: auto;'>" + nom + "</h4>";
        cell2.innerHTML = "<p class='ok'>" + description + "</p>";
    
        // Réinitialiser le formulaire
        document.getElementById("nom").value = "";
        document.getElementById("description").value = "";
    
        // Cacher le formulaire
        toggleForm3();
    
        return false; // Empêcher la soumission du formulaire
      }
    
     
        function addEnseignement() {
          var nom = document.getElementById("nom").value;
          var description = document.getElementById("description").value;
    
          // Création d'une nouvelle ligne dans le tableau avec les données saisies
          var newRow = document.createElement("tr");
          newRow.innerHTML = "<td><h4 style='margin: auto;'>" + nom + "</h4></td><td><p class='ok'>" + description + "</p></td>";
          document.getElementById("enseignements").appendChild(newRow);
    
          toggleForm3(); // Cacher le formulaire après l'ajout
        }


        function telechargerEtOuvrirExcel() {
            // Remplacez le chemin par le chemin réel de votre fichier Excel sur votre système local
            var cheminFichier = 'img/maquette.xlsx';
            // Créer un élément d'ancrage invisible
            var a = document.createElement('a');
            a.href = cheminFichier;
            a.download = cheminFichier.substr(cheminFichier.lastIndexOf('/') + 1);
            // Ajouter l'élément à la page
            document.body.appendChild(a);
            // Simuler un clic sur l'élément d'ancrage pour déclencher le téléchargement
            a.click();
            // Supprimer l'élément d'ancrage de la page
            document.body.removeChild(a);
            // Ouvrir le fichier téléchargé dans un nouvel onglet
            window.open(cheminFichier, '_blank');
          }


 

          
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.ok');

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
