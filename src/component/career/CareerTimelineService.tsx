import axios from "axios";
import {TimelineProps} from "./CareerTimeline";

export const getCareerTimeline = (): Promise<TimelineProps[]> => {
    return new Promise((resolve, reject) => {
        return axios.create({baseURL: 'https://krobertson.co.uk/career'}).get('/timeline').then(response => resolve(response.data)).catch(reject);
    })
};

export const demoTimeline = [
    {
        description: 'University of Edinburgh - Computer Science',
        year: '2009'
    },
    {
        description: 'Kana Software - Graduate Software Engineer',
        year: '2013'
    },
    {
        description: 'Kana Software - Software Engineer',
        year: '2014'
    },
    {
        description: 'Verint Systems - Senior Software Engineer',
        year: '2020'
    }];
