import MeetupList from "@/components/meetups/MeetupList";
import { useEffect, useState } from "react";
const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first Meetup',
        image: "image url",
        address: 'Some address some city',
        description: 'This is first meetup' 
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: "image url",
        address: 'Some address some city',
        description: 'This is Second meetup' 
    },
];

function HomePage(props){
    return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps(){
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
}

export default HomePage;