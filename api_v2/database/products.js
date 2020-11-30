const { database } = require('swa-api');

//this would wrap the Mongoose API with a little love
//returning the model but also letting us set the permissions for that
//model
module.exports = database.define({
  schema : {
    sku: String,
    name: String,
    colors: [
      {
        name: String
      }
    ]
  },
  methods: {
    setInStock(next){
      //this is an instance method
    }
  },
  permissions: {
    create(auth, data){

    },
    update(auth, data){

    },
    save(auth, data){

    },
    read(auth, id){

    },
    list(auth, data){

    },
    delete(auth, user){

    },
  }
});