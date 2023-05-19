import React from 'react'
import { Button, Table, TableRow, TableCell } from '@mui/material';
import "./NavBar.css"

function MainPage() {
    return (
        <div className="mainPageContainer">
                <Table className='headerborder'>
                        <TableCell style={{width: '50%'}}>
                            {/* <div className="headerButtons">
                                <Button className="headerButton">HOME</Button>
                                <Button className="headerButton">ABOUT</Button>
                                <Button className="headerButton">LOCATION</Button>
                                <Button className="headerButton">SOCIALS</Button>
                                <Button className="headerButton">ADMIN</Button>
                            </div> */}
                        </TableCell>
                </Table>
        </div>
    )
}

export default MainPage;