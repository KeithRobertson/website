import {Skill} from "./Skill";
import {Divider, List, ListItem, ListItemText, ListSubheader, Stack, Typography} from "@mui/material";

const SkillList = (skillsProp: { skills: Skill[] }) => {
    const skills = skillsProp.skills;
    return (
        <>
            <Typography variant="h5" align="center">Skills</Typography>
            <Stack
                spacing={12}
                direction='row'
                divider={<Divider orientation="vertical" flexItem></Divider>}
                sx={{
                    'justify-content': 'center'
                }}>
                {Array.from(new Set(skills.map(skill => skill.category))).map(category => {
                    return (<List subheader={
                        <ListSubheader>
                            {category}
                        </ListSubheader>
                    }>
                        {skills.filter(skill => skill.category === category).map(skill => {
                            return (<ListItem>
                                <ListItemText primary={skill.name}/>
                            </ListItem>)
                        })}
                    </List>);
                })}
            </Stack>
        </>);
};

export default SkillList;