import MeetupList from "@/components/meetups/MeetupList";
import { useEffect, useState } from "react";
import { MongoClient } from "mongodb";


function HomePage(props){
    return <MeetupList meetups={props.meetups} />
}

// export async function getServerSideProps(context){
//     //fetch data from an API
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }

export async function getStaticProps(){
    // fetch data from an API
    const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kfazawl.mongodb.net/MeetUps?retryWrites=true&w=majority`);
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const AllMeetups = await meetupsCollection.find().toArray();
   
    client.close();

    return {
        props: {
            meetups: AllMeetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 2
    };
}

export default HomePage;