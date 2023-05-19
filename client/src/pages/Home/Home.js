import React from "react";
import {
  Card,
  TextField,
  Table,
  TableRow,
  TableCell,
  Button,
  Typography,
} from "@mui/material";

function Home() {
  console.log("hello");
  return (
    <div style={{overflow: 'hidden'}}>
    <Table>
      <TableRow style={{display:'flex', justifyContent:'center'}}>
        <Card style={{height: '500px', width:'1800px', marginLeft: '-25px', backgroundImage: 'URL(https://cdn.britannica.com/13/234013-050-73781543/rice-and-chorizo-burrito.jpg)'}}>
            <Typography style={{color: 'white', display: 'flex', justifyContent:'center', alignItems:'center', height:'100%', marginLeft:'-150px', fontSize:'150px'}}>LARS SNACKBAR</Typography>
        </Card>
      </TableRow>
    </Table>
    </div>
  );
}

export default Home;
