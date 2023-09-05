import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MenuList } from "../Data/Data";
import { Box, CardActionArea } from "@mui/material";
const Menu = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {MenuList.map((menu) => (
        <Card sx={{ maxWidth: 345 ,margin:4}}>
          <CardActionArea>
            <CardMedia
              sx={{ height: 140 }}
              component={"img"}
              image={menu.image}
              title="Dosa"
              alt={menu.name}
            />
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {menu.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {menu.description}
            </Typography>
          </CardContent>
          <CardActions>
          
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
export default Menu;
