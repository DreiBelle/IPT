import React from 'react'
import { Button, Table, TableRow, TableCell } from '@mui/material';
import "./NavBar.css"

function MainPage() {
    return (
        <div className="mainPageContainer">
            <header className="headerMainPage">
                <Table>
                    <TableRow>
                        <TableCell style={{width: '50%', verticalAlign: 'middle'}}>
                            <h1 className="logo">LARS SNACKBOX</h1>
                        </TableCell>
                        <TableCell style={{width: '50%'}}>
                            <div className="headerButtons">
                                <Button className="headerButton">HOME</Button>
                                <Button className="headerButton">MENU</Button>
                                <Button className="headerButton">ABOUT</Button>
                                <Button className="headerButton">ADMIN</Button>
                            </div>
                        </TableCell>
                    </TableRow>
                </Table>
            </header>
        </div>
    )
}

export default MainPage;