import Banner from "../Banner/Banner";
import {Typography} from "@mui/material";
import CareerTimeline, {TimelineProps} from "../career/CareerTimeline";
import {useEffect, useState} from "react";
import {demoTimeline, getCareerTimeline} from "../career/CareerTimelineService";

const Home = () => {
    const [timeline, setTimeline] = useState<TimelineProps[] | undefined>();
    useEffect(() => {
        getCareerTimeline().then(setTimeline).catch(() => setTimeline(demoTimeline));
    }, []);
    return (
        <>
            <Banner/>
            <Typography variant="h4" align="center">Career</Typography>
            {timeline && <CareerTimeline timeline={timeline}/>}
        </>);
};

export default Home;