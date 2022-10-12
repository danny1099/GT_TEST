import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CustomDialog, { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";

export interface INavbar {}

const Navbar: FC<INavbar> = () => {
    const handleClick = () => {
        dialogOpenSubject$.setSubject = true;
    };

    return (<>
        <CustomDialog>
            <div>Dialogo</div>
        </CustomDialog>
        
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    DM Developer
                </Typography>
                <IconButton color="secondary" aria-label="favorites" component="label" onClick={handleClick}>
                    <FavoriteIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    </>)
}

 export default Navbar