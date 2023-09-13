import MeetupDetails from "@/components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

function meetupDetails(props) {
  return <MeetupDetails 
    image = {props.meetupData.image}
    title = {props.meetupData.title}
    address = {props.meetupData.address}
    description = {props.meetupData.description}
   />;
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kfazawl.mongodb.net/MeetUps?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetupData = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetupData.map((meetup) => ({
      params: { meetupid: meetup._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  //fetch data for a single meetup

  const meetupId = context.params.meetupid;
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kfazawl.mongodb.net/MeetUps?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({_id:new ObjectId(meetupId), });
  selectedMeetup._id = selectedMeetup._id.toString();
  client.close();

  return {
    props: {
      meetupData: selectedMeetup,
    },
  };
}

export default meetupDetails;
