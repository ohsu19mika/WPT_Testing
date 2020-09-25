    //const mongodb = require('mongodb')
    const mongoClient = require('mongodb').MongoClient
    
    //const url = 'mongodb://localhost:27017/demos'
    const url ='mongodb+srv://shoppinglistdb-user:HuhGj8nht8XfKqu5@cluster0-ozu87.mongodb.net/demos?retryWrites=true&w=majority'
    // create new devices collection and add some data into it
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
    
          const devArr = []
    
          devArr.push({"device":"Webcam","manufacturer":"Skalith","purchaseDate":"23.06.2011","price":39})
          devArr.push({"device":"Monitor","manufacturer":"Roodel","purchaseDate":"26.04.2011","price":32})
          devArr.push({"device":"Network card","manufacturer":"Twitterbeat","purchaseDate":"17.05.2014","price":10})
          devArr.push({"device":"Digital camera","manufacturer":"Trilith","purchaseDate":"29.12.2013","price":21})
          devArr.push({"device":"Sound Card","manufacturer":"Tagchat","purchaseDate":"14.07.2012","price":75})
    
          collection.insertMany(devArr, (err, result) => {
            if (err) {
              console.log(err)
            } else {
              console.log('Inserted %d documents with "_id" %s', result.insertedCount, result)
            }
            db.close()
          })
        }
      }
    )