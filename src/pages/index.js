import MeetupList from "@/components/meetups/MeetupList";
import { Fragment, useEffect, useState } from "react";
import { MongoClient } from "mongodb";
import Head from "next/head";

function HomePage(props){
    console.log('Homepage rendered', props);
    return( 
    <Fragment>
    <Head>
        <title> Meetups Calender </title>
        <meta name="description" content="Plan together and relive your meetup moments with friends." />
    </Head>
    <MeetupList meetups={props.meetups}/>

    </Fragment>
    )
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
    console.log('Homepage getstatic props rendered');
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
                description: meetup.description,
            }))
        },
        revalidate: 2
    };
}

export default HomePage;