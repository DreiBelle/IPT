import React from 'react'
import "./login.css"
import { Card, TextField, Table, TableRow, TableCell, Button} from '@mui/material';

function Login() {
        console.log("hello")
        return (
                <div class="flex-center">
                        <div class="cardLogin">
                                <Card style={{ backgroundColor: 'white', borderRadius: '10px', height: '40vh', display: 'flex', width: '50vh', justifyContent: 'center', alignItems: 'center'}}>
                                        <Table>
                                                <h1 style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>LARS SNACKBAR</h1>
                                                <TableRow style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <TextField style={{ width: '45vh'}} id="outlined-basic" label="Username" variant="outlined" size="medium" />
                                                </TableRow>
                                                <TableRow style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <TextField style={{ marginTop: '2vh', width: '45vh'}} id="outlined-basic" label="Password" variant="outlined" size="medium" />
                                                </TableRow>
                                                <TableRow style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Button style={{ marginTop: '2vh', width: '45vh', borderColor: 'black', color:'black'}} variant="outlined" size="large">Log in</Button>
                                                </TableRow>
                                        </Table>
                                </Card>
                        </div>
                </div>
        )
}

export default Login