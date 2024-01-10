async function remplir_accessoires(){
    try{
        const response = await fetch("accessoires.json");
        const accessoiresJSON = await response.json();
        const accessoires = accessoiresJSON.tableau_accessoires;

        const template = document.querySelector("#template_accessoires");
        
        for (const a of accessoires) {
            let titre = a.titre;
            let texte = a.texte;
            let image = a.image;

            let clone = document.importNode(template.content, true);

            clone.firstElementChild.innerHTML = clone.firstElementChild.innerHTML.replaceAll(/{{accessoires-image}}/g, image);
            clone.firstElementChild.innerHTML = clone.firstElementChild.innerHTML.replaceAll(/{{accessoires-titre}}/g, titre);
            clone.firstElementChild.innerHTML = clone.firstElementChild.innerHTML.replaceAll(/{{accessoires-texte}}/g, texte);
            
            document.getElementById("grid-container").appendChild(clone);
          }
      }

      catch(error){
        console.error("erreur",error);
      }
}

bb