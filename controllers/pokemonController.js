const express = require('express');
const router = express.Router();

const Pokemon = require('../models').Pokemon;


router.get("/", (req, res) => {
  Pokemon.findAll().then((pokemon) => {
    res.render("index.ejs", { 
      pokemon:pokemon,
      
     }); 
  })
  });


router.get("/new", (req, res) => {
res.render("new.ejs");
});

router.get("/:id/", (req, res) => {
  Pokemon.findByPk(req.params.id).then((pokemon)=>{
    res.render("show.ejs", {
    pokemon:pokemon,
  });
   });
  })
router.post("/", (req, res) => {
    Pokemon.create(req.body).then ((newPokemon) =>{
      res.redirect("/pokemon");
    });
    
  });

  router.get("/:id/edit", function(req, res) {
      Pokemon.findByPk(req.params.id).then((pokemon) =>{
      res.render("edit.ejs", {
        pokemon:pokemon,
    }); 
    });
  })


  router.put('/:id', (req, res) => {
    Pokemon.update(req.body,{
      where:{id:req.params.id},
      returning:true,
    }).then((pokemon) => {
      res.redirect("/pokemon");
      
  });

});
  

router.delete("/:id", (req, res) => {
  Pokemon.destroy({where: { id:req.params.id}}).then(() =>{
    res.redirect("pokemon");
  
  })
});


module.exports = router;