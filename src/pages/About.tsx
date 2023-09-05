import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        my: 10,
        textAlign: "center",
        p: 2,
        "& h4": {
          fontWeight: "bold",
          margin: "0px 0px 20px",
        },
        "& p": {
          textAlign: "justify",
          mx: "20px",
        },
        "@media (max-width:600px)": {
          mt: 0,
          "& h4": {
            fontSize: "1.5rem",
          },
          "& p": {
            fontSize: "0.5rem",
          },
        },
      }}
    >
      <Typography variant="h4">Welcome to my Resturant</Typography>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        illum, deserunt sequi enim voluptate provident voluptatum ducimus
        possimus error esse! Nostrum et alias distinctio voluptatem ratione
        porro reiciendis aliquam similique aperiam. Libero, sapiente sit iure,
        deserunt placeat ratione debitis minus fugiat fuga natus voluptate
        numquam voluptatibus magni delectus nesciunt veritatis vitae
        exercitationem sint voluptatem quod quas a! Culpa, magni atque ad
        tempora reiciendis explicabo mollitia voluptate officia blanditiis
        voluptates delectus cum cumque harum doloribus laborum consequatur hic?
        Tenetur libero saepe maiores nisi sunt voluptatem! Esse optio officiis
        expedita molestiae, quas ullam totam fugiat maxime accusamus cumque
        perspiciatis veritatis officia nesciunt.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugiat
        illum tenetur facilis blanditiis aperiam officiis assumenda minus unde
        eum cum sapiente, magnam qui iure corporis accusamus quam inventore
        distinctio voluptas quae voluptatibus neque? Quo, facilis rerum
        perferendis molestias libero voluptas? Ipsam expedita assumenda illo
        tenetur neque omnis, quam error aspernatur recusandae sit commodi
        similique quas sequi reprehenderit quo atque libero officiis qui. Eos
        quasi animi fugiat reiciendis! Explicabo nobis ad quam quae incidunt ab,
        hic, illum sed soluta mollitia modi sit adipisci. Perspiciatis repellat
        vitae hic sint, est ipsa id ipsum nostrum doloremque labore dolor,
        inventore beatae dignissimos quos.
      </p>
    </Box>
  );
};

export default About;
