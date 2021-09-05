const { Anime } = require('../models')

const createAnime = async (req,res)=> {
  console.log(req.body);
  try{
    //making new object
  const newAnime = await new Anime(req.body)
  //store it inside database
  await newAnime.save()
  //resolve
  return res.status(201).json(newAnime)
  } catch(error){
  console.log(error)
  return res.status(500).json(error)
  }

}

const allAnime = async (req,res)=>{
  try{
    const allAnime = await Anime.find()
    return res.status(200).json(allAnime)
  }catch(error){
    console.log(error);
  }
}

// const deleteAnime = async (req, res) => {
//   try {
//     const deleted = await Anime.findByIdAndDelete(req.body.id)
//     if (!deleted) throw new Error('Anime not found')
//     return res.status(200).send('Anime deleted')
//   } catch (error) {
//     return res.status(500).json({ error: error.message })
//   }
// }
const deleteAnime = async (req, res) => {
    try {
      Anime.deleteOne({_id:req.params.id},(error)=>{
        if(error)console.log(error)
        console.log('It works');
      })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }


module.exports = {
  createAnime,
  allAnime,
  deleteAnime
}