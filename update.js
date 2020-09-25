const mongoClient = require('mongodb').MongoClient
    
//const url = 'mongodb://localhost:27017/nodedemos'
const url ='mongodb+srv://shoppinglistdb-user:HuhGj8nht8XfKqu5@cluster0-ozu87.mongodb.net/demos?retryWrites=true&w=majority'
mongoClient.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
},
(err, db) => {
  if (err) {
    console.log('ERROR:', err)
  } 
  else {
    console.log('CONNECTED: ', url)

    const demoDb = db.db('nodedemos')

    const collection = demoDb.collection('devices')

    // Update data in the database
    collection.updateOne({device: "Webcam"}, 
      {'$set': {purchaseDate:"02.11.2019", price:43, manufacturer: 'HP'}}) 
      .then(item => {
        console.log(item)
      })
      .catch(err => {
        console.log(err)
      }).then( ()=>{

    collection.findOne({device: "Webcam"}) 
    .then(result => {
      console.log(result)
      printResult(result)
    })
    .catch(err => {
      console.log(err)
    }).then(()=>{
        db.close()
    })})
    

    //db.close()
  }
}
)

const printResult = (device) => {
    console.log(device.device + ", " + device.manufacturer + ", " + device.purchaseDate + ", " + device.price)
}