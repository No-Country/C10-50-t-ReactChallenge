

router.get("/", async (req, res) => {
    
    try {
     const respuesta = await bulkCreate()
      res.status(200).send(respuesta);
  } catch (error) {
    res.status(400).send(error.message);
  }
  });