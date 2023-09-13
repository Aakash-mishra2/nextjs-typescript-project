//api/new-meetup
import { MongoClient } from 'mongodb';
require('dotenv').config();

async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body;
    const { title, image, address, description } = data;
    const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kfazawl.mongodb.net/MeetUps?retryWrites=true&w=majority`);
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();

    res.status(201).json({ message: 'Meetup Inserted!'});
    }
}


export default handler;