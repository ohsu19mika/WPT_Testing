const mongoClient = require('mongodb').MongoClient
    
//const url = 'mongodb://localhost:27017/nodedemos'
const url ='mongodb+srv://shoppinglistdb-user:HuhGj8nht8XfKqu5@cluster0-ozu87.mongodb.net/demos?retryWrites=true&w=majority'
// Connection to devices collection and delete all data from it
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

     // deleteMany deletes all documents from the collection.
     collection.deleteMany({} , (err, results) => {
        if (err) {
          console.log(err)
        } else {
           console.log(results)
         }
         db.close()
      }
     )
    }
  }
)