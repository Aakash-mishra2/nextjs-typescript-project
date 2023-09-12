import MeetupList from "@/components/meetups/MeetupList";
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

function HomePage(){
    return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;