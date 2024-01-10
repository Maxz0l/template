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

async function chargerTemperature(ville){
  try {
    //const apiKey = "";
    console.log(apiKey);
    const apiUrl = https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&units=metric;
    const response = await fetch(apiUrl);
    const data = await response.json();
    const temp = data.main.temp;

    return temp;
  } 
  catch (error) {
    console.error("Erreur", error);
  }
}