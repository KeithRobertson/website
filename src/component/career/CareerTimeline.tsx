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
    </Timeline>);
}

export default CareerTimeline;