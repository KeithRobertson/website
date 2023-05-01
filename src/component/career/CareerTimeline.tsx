import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";

export interface TimelineProps {
    description: string;
    year: string;
}

const CareerTimeline = (careerTimeline: { timeline: TimelineProps[] }) => {
    return (<Timeline position="alternate">
        {careerTimeline.timeline.map(timeline =>
            <TimelineItem key={timeline.description}>
                <TimelineOppositeContent color="text.secondary">
                    {timeline.year}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>{timeline.description}</TimelineContent>
            </TimelineItem>)}
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
                2009
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>University of Edinburgh - Computer Science</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
                2013
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>Kana Software - Graduate Software Engineer</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
                2014
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>Kana Software - Software Engineer</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
                2020
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>Verint Systems - Senior Software Engineer</TimelineContent>
        </TimelineItem>
    </Timeline>);
}

export default CareerTimeline;