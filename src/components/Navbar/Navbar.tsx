import { AppBar, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

export interface INavbar {}

const Navbar: FC<INavbar> = () => (
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              DM Developer
            </Typography>
        </Toolbar>
    </AppBar>
)

 export default Navbar