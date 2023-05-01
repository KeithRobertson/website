import axios from "axios";
import {Skill} from "./Skill";

export const getSkills = (): Promise<Skill[]> => {
    return new Promise((resolve, reject) => {
        return axios.create({baseURL: 'https://krobertson.co.uk/career'}).get('/skills').then(response => resolve(response.data)).catch(reject);
    })
};

export const demoSkills : Skill[] = [
    {
        name: 'React',
        category: 'Front end'
    },    {
        name: 'Material UI',
        category: 'Front end'
    },
    {
        name: 'Java',
        category: 'Back end'
    },
    {
        name: 'Gradle',
        category: 'Back end'
    },    {
        name: 'Spring',
        category: 'Back end'
    },
    {
        name: 'Jenkins',
        category: 'Devops'
    }];
