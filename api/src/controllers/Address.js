const { Address, User } = require('../models/index')
const ModelController = require('./index')

class AddressModel extends ModelController {
    constructor(model) {
        super(model);
    }
    //Specific Functions for this model
    createAddress = async (req, res) => {
        if (req.body.id) {
            try {
                //id of User
                const id = req.body.id ? req.body.id : null;
                const address = {
                    directions: req.body.directions,
                };
                //Create the Address
                const newAddress = await Address.create(address);
                const addressId = newAddress.id;
                //Search the User and attach the Address
                const user = await User.findByPk(id);
                await user.addReview(addressId);
                res.send(newAddress);
            } catch (e) {
                res.send(e);
            }
        } else {
            res.status(400).send({ message: 'Wrong parameters' });
        }
    };
}

const AddressController = new AddressModel(Address)

module.exports = AddressController