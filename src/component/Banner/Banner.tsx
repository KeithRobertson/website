import {AppBar, Box, IconButton, Link, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";


const Banner = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={handleClick}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Keith Robertson
                    </Typography>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}>
                        <Link
                            href="/">
                            <MenuItem>
                                Home
                            </MenuItem>
                        </Link>
                        <Link
                            href="/library">
                            <MenuItem>
                                Library
                            </MenuItem>
                        </Link>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Banner;