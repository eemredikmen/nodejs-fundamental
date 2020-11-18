// const {mongodb,MongoClient} = require('mongodb');

const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const ObjectID = mongodb.ObjectID;

const databaseUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'node-calısmalar';


// * veri tabanı bağlantısı

mongoClient.connect(databaseUrl, { useUnifiedTopology: true, useNewUrlParser: true }, (eror, result) => {
    if (eror) { // eror true ise bağlanılmadı
        console.log('db ye bağlanamadı...');
    }
    else {
        console.log('Dbye bağlanıldı...');

    }
    const db = result.db('node-calısmalar');

    const myId = new ObjectID();

    /*
    
        // * id oluşturma tarihini verdi
    
        console.log(myId.getTimestamp());
    
        db.collection('users').insertOne({
            _id: myId,
            name: 'emre',
            age: 20,
            updateID: myId
        }).then(result => console.log(result.ops));
    
    
        
        //* veritabanı için collections oluşturduk
    
    
        db.collection('users').insertOne({
            name: 'emre',
            age: '20',
            salary: 2500
        }, (eror, sonuc) => {
            if (eror) {
                throw eror;
            } else {
                console.log(sonuc.ops);
            }
        });
    
        db.collection('users').insertOne({
            name: 'irem',
            age: '25',
            salary: 2500
        })
            .then(result => console.log(result.ops))
            .catch(err => console.error(eror));
    
    
        // * Insert Many
    
    
        db.collection('users').insertMany([{
            name: 'emre',
            age: 20,
            scholl: 'çukurova'
        },
        {
            name: 'veli',
            age: 30,
        },
        {
            age: 20,
            scholl: 'çukurova'
        },
        ])
            .then(result => console.log(result.ops))
            .catch(err => console.log(err));
    
        db.collection('urunler').insertMany([{
            ad: 'mobilya',
            urunAdi: 'masa',
            stok: 15,
        },
        {
            ad: 'teknoloji',
            urunAdi: 'casper',
            stok: 45,
        }
        ]).then(result => console.log(result.ops))
            .catch(err => console.error(err));
    
        // collection içerisindeki 'name : emre' olan fieldların uzunluğunu aldık
    */
    db.collection('users').find({ name: 'emre' }).toArray()
        .then(result => console.log(result.length));

    // * collections limit ile belirli sayıda veri çekebiliriz

    // db.collection('users').find({ name: 'emre' }, { limit: 5 }).toArray()
    //     .then(result => console.log(result));

    // // * find metodu cursor dönderdiği için limit metodunu kullanabiliriz

    // db.collection('users').find({ name: 'emre' }).limit(5).toArray()
    //     .then(result => console.log(result));

    // db.collection('users').findOne({ name: 'emre' })
    //     .then(result => console.log(result));

    // * new ObjectID diyerek bu değere göre yeni bir id oluşturduk bu veriye göre o değer saklanıyor

    // db.collection('users').findOne({ _id: new ObjectID('5ee818dbc093111930802d6a') })
    //     .then(result => console.log(result));

    // * UPDATE * //

    /*
     * update işleminde ilk basta updateMany(multiupdate) ile field alanını verdik 
     * $set ile field alanını vererek değiştirebiliriz
     * $inc sayı fiedlarını artırabiliriz
    */
    db.collection('users').updateMany({ age: "30" }, {
        $set: {
            age: 40
        },
        $inc: {
            salary: 50
        }
    })
        .then(result => console.log(result));


    //* DELETE *//

    //* verilern field alanına göre promise alark siliniyor

    db.collection('urunler').deleteMany({
        ad: 'mobilya'
    })
        .then(result => console.log(result.deletedCount));

    db.collection('urunler').deleteMany({
        ad: 'teknoloji'
    }).then(result => console.log(result.deletedCount));

})









