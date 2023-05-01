import Banner from "../Banner/Banner";
import {Divider, Typography} from "@mui/material";
import CareerTimeline, {TimelineProps} from "../career/CareerTimeline";
import {useEffect, useState} from "react";
import {demoTimeline, getCareerTimeline} from "../career/CareerTimelineService";
import {Skill} from "../career/skills/Skill";
import SkillList from "../career/skills/SkillList";
import {demoSkills, getSkills} from "../career/skills/SkillsService";

const Home = () => {
    const [timeline, setTimeline] = useState<TimelineProps[] | undefined>();
    const [skills, setSkills] = useState<Skill[] | undefined>();
    useEffect(() => {
        getCareerTimeline().then(setTimeline).catch(() => setTimeline(demoTimeline));
        getSkills().then(setSkills).catch(() => setSkills(demoSkills));
    }, []);
    return (
        <>
            <Banner/>
            <Typography variant="h4" align="center">Career</Typography>
            {timeline && <CareerTimeline timeline={timeline}/>}
            <Divider flexItem></Divider>
            {skills && <SkillList skills={skills}/>}
        </>);
};

export default Home;