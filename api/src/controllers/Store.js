const { Store, User } = require('../models/index');
const ModelController = require('./index');
const { cloudinary } = require('../utils/cloudinary/index')

class StoreModel extends ModelController {
  constructor(model) {
    super(model);
  }
  //Specific Functions for this model
  createStore = async (req, res) => {
    if (req.body.data.idUser) {
      try {

        //Cloudinary

        const fileString = req.body.data.idImage ? req.body.data.idImage : "No image base64 string";
        const uploadedResponse = await cloudinary.uploader.upload(fileString);
        let public_id = uploadedResponse.public_id

        
        //Our DataBase

        const id = req.body.data.idUser ? req.body.data.idUser : null;
        const store = {
          storeName: req.body.data.store.storeName ? req.body.data.store.storeName : null,
          address: req.body.data.store.address ? req.body.data.store.address : null,
          description: req.body.data.store.description ? req.body.data.store.description : null,
          country: req.body.data.store.country ? req.body.data.store.country : null,
          cp: req.body.data.store.cp ? req.body.data.store.cp : null,
          state: req.body.data.store.state ? req.body.data.store.state : null,
          cloudImage: public_id ? public_id : "No image id",
        };

        //create the new Store
        const newStore = await Store.create(store);
        const storeId = newStore.id;

        //Attach the Store with the User ID
        const user = await User.findByPk(id);
        await user.addStore(storeId);

        // Final Store
        const finalStore = await Store.findByPk(storeId);

        res.send(finalStore);
      } catch (e) {
        res.send(e);
      }
    } else {
      res.status(400).send({ message: 'Wrong parameters' });
    }
  };

  getAllData = async (req, res, next) => {
    try {

      //Cloudinary        
      // const {resources} = await cloudinary.search.expression('folder:dev_setups')
      // .sort_by('public_id', 'desc').execute()
      // // .max_results(...)
      // const {publicIds} = resources.map(file => file.public_id) // array con todas las public ids


      // Our DataBase

      let data = await Store.findAll();
      res.send(data);
    } catch (e) {
      next(e);
    }
  };
}

const StoreController = new StoreModel(Store);

module.exports = StoreController;
