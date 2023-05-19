import React from "react";
import { Button, Table, TableRow, TableCell } from "@mui/material";
import "./NavBar.css";

function MainPage() {
  return (
    <div className="mainPageContainer">
      <Table className="headerborder">
        <TableRow>
          <TableCell className="headerBorder">
            <div className="headerButtons">
              <Button
                className="headerButton"
                onClick={() => {
                  window.location.pathname = "/";
                }}
              >
                HOME
              </Button>
              <Button className="headerButton">ABOUT</Button>
              <Button className="headerButton">LOCATION</Button>
              <Button className="headerButton">SOCIALS</Button>
            </div>
          </TableCell>
          <TableCell className="headerBorder">
            <Button
              className="headerButtonAdmin"
              onClick={() => {
                window.location.pathname = "/login";
              }}
            >
              ADMIN
            </Button>
          </TableCell>
        </TableRow>
      </Table>
    </div>
  );
}

export default MainPage;
