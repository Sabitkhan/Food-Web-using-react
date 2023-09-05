import { Box, Button, CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { MenuList } from "../Data/Data";
const Menu = () => {
  const Alert = () => {
    alert("Order is Success");
  };
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {MenuList.map((menu) => (
        <Card sx={{ maxWidth: 345, margin: 4 }}>
          <CardActionArea>
            <CardMedia
              sx={{ height: 400 }}
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
            <Typography variant="h6" color={"GrayText"} mt={2}>
              Price: {menu.price}$
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={Alert}>Order Now</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
export default Menu;
