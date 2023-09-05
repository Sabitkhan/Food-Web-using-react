import { Call, Mail, SupportAgent } from "@mui/icons-material";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <>
      <Box
        sx={{
          m: 5,

          "& h4": {
            fontWeight: "bold",
            mb: 1,
            fontSize:"1rem"
          },
          "@media (max-width:600px)": {
            "& p": {
              textAlign: "justify",
              fontSize:".5rem"
            },
          },
        }}
      >
        <Typography variant="h4">CONTACT US</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          commodi voluptate natus voluptates velit nihil, esse eos, expedita
          laborum doloremque ea repellendus ipsa, placeat quod unde libero
          facere adipisci beatae!
        </p>
      </Box>
      <Box
        margin={5}
        width={"600px"}
        sx={{
          "@media (max-width:600px)": {
            width: "280px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="Contact Table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{ bgcolor: "black", color: "white" }}
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgent htmlColor="green" sx={{ pt: 1 }} />{" "}
                  0937-1233214123
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Mail htmlColor="skyblue" sx={{ pt: 1 }} /> Lorem@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Call htmlColor="skyblue" sx={{ pt: 1 }} /> 03482343231
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Contact;
