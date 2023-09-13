import { Fragment } from "react";
import classes from "../../components/meetups/MeetupDetails.module.css";

function meetupDetails() {
  return (
    <section className={classes.detail}>
      <img src="image source" alt=" A first Meetup" />
      <h1> A first meetup </h1>
      <address>Some street some city. </address>
      <p> The meetup description </p>
    </section>
  );
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid: 'm1',
        },
      },
      {
        params: {
            meetupid: 'm2',
        }
      },
    ],
  };
}
export async function getStaticProps(context) {
  //fetch data for a single meetup

  const meetupId = context.params.meetupid;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image: "first meet up",
        title: "First Meetup",
        address: "Some street , some city",
        description: " This is a first meetup",
      },
    },
  };
}

export default meetupDetails;
