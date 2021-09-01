const { Anime } = require('../models')

const createAnime = async (req,res)=> {
  try{
    //making new object
  const newAnime = await new Anime(req.body)
  //store it inside database
  await newAnime.save()
  //resolve
  return res.status(202).json(newAnime)
  } catch(error){
  console.log(error)
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


module.exports = {
  createAnime,
  allAnime
}