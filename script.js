/*

**Descrizione:**
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
**Bonus:**
Aggiungere alla pagina un’immagine, presa anch’essa da un data.

*/


const app = new Vue ({

  el: "#app",

  data: {

    messaggio: "Ecco a voi un Falcon Rocket!",
    immagine : "https://upload.wikimedia.org/wikipedia/commons/1/1d/Launch_of_Falcon_9_carrying_ORBCOMM_OG2-M1_%2816601442698%29.jpg"

  }
})