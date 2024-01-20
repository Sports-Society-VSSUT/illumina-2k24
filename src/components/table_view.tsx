"use client";
import {useEffect,useState} from "react";
import {
    Table,
    TableBody,
    TableRow,
    TableCell,
    Stack,
    TableContainer,
  } from "@mui/material";
import TableComponent from "./table";
import eventData from "@/lib/data/table1";
import eventData2 from "@/lib/data/table2";

const EventTable = () => {
    const [isFlexRow, setIsFlexRow] = useState<boolean>(false);
  
    useEffect(() => {
      const handleResize = () => {
        const screenWidth = window.innerWidth;
        setIsFlexRow(screenWidth > 1200);
      };
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    return (
      <TableContainer style={{ padding: "5%" }}>
        <Stack
          direction={isFlexRow ? "row" : "column"}
          spacing={4}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <TableComponent day={"Day1"} eventData={eventData} />
          <TableComponent day={"Day2"} eventData={eventData2} />
        </Stack>
      </TableContainer>
    );
  };

  export default EventTable;