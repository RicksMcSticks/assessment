let fortuneArray = ["I see a baby in your future!", "You will see a man today!", "Someone is watching you!0_0", "I see through the fortune that you will become handsome one day!", "RUN WHEN YOU SEE IT!"];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        res.status(200).send(fortuneArray);
        
       
      
    },
    getFortunes: (req, res) => {

        fortunes = ["I see a baby in your future!", "You will see a man today!", "Someone is watching you!0_0", "I see through the fortune that you will become handsome one day!", "RUN WHEN YOU SEE IT!"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
},

    

    addFortune: (req, res) => {
        let {name} = req.body

        console.log(name)

        fortuneArray.push(name)

        res.status(200).send(fortuneArray)
    },
   
    deleteFortune: (req, res) => {
        let index = req.params.id -1

        fortuneArray.splice(index, 1)

        res.status(200).send(fortuneArray)
    }
}

