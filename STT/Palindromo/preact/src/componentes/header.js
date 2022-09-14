import { AppBar, Typography } from "@mui/material";
import theme from "../theme.ts";

export function Header(){

    return (
        <AppBar position='static' enableColorOnDark>
        <div style={{margin: theme.spacing(3)}}>
          <Typography variant='h3' >Palíndromos</Typography>
        </div>
        </AppBar>
    );
};
