const Mongoose          = require("../Model/Item");
const ItemSchemma       = Mongoose.model("Item");

var ItemController = function(){

    this.addItem = (Data) => {
        return new Promise((resolve, reject) => {
            console.log(Data);
            /**
             * find item name already existing the data base.
             */

            ItemSchemma.find({itemName:Data.itemName}).exec()
            .then((data) => {
                if(data.length === 0 ){

                    

                    var newItem = new ItemSchemma({
                        itemName : Data.itemName,
                        categoryId : Data.categoryId,
                        price : Data.price,
                        deliveryInformation : Data.deliveryInformation,
                        isRestricedItem :true
                    });

                    newItem.save()
                    .then(() => {
                        resolve({"status":"201","message":"Item Created"});
                        
                    })
                    .catch((err) => {
                        console.log("************************");
                        reject({"status":"404","message":"Err "+err});
                    });
                }
                
                else{
                    resolve({"status":"200","message":"Already Exists "+Data.itemName+" item"});
                }
            })
            .catch((err) => {
                reject({"status":"500","message":"Error "+err});
            }) 
        })
    }



    this.getAllItem = () => {
        return new Promise((resolve,reject) => {
            ItemSchemma.find().exec()
            .then((data) => {
                resolve({"status":"200","message":data});
            })
            .catch((err) => {
                reject({"status":"500","message":"Err" +err});
            })
        })
    }
}

module.exports = new ItemController();