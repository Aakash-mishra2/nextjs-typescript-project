    import { Fragment } from "react";
    import classes from '../../components/meetups/MeetupDetails.module.css'; 

    function meetupDetails(){
        return (
            <section className={classes.detail}>
                <img 
                    src='image source'
                    alt=' A first Meetup'
                />
                <h1> A first meetup </h1>
                <address>Some street some city. </address>
                <p> The meetup description </p>
            </section>
        )
    }

    export default meetupDetails;