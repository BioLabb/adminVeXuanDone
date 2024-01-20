import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";

export default function DataList({ Data, imgCell }) {
  const [clickedRow, setClickedRow] = useState(null);

  const options = {
    timeZone: "Asia/Ho_Chi_Minh",
    hour12: false,
    weekday: "long", // 'long' để hiển thị tên ngày trong tuần
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const handleRowClick = (rowId, urlimg) => {
    setClickedRow(rowId);
    imgCell(urlimg);
  };
  const handleClickUrlImg = (urlimg) => {
    imgCell(urlimg);
  };
  return (
    <TableContainer style={{ maxHeight: 600, overflow: "auto" }}>
      <Table>
        <TableHead>
          <TableCell align="right">Vé</TableCell>
          <TableCell align="right">Họ Tên</TableCell>
          <TableCell align="right">Mssv</TableCell>
          <TableCell align="right">Sdt</TableCell>
          <TableCell align="right">Ngày mua</TableCell>
        </TableHead>
        <TableBody>
          {Data.map((row) => {
            return (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor:
                    clickedRow === row.id ? "lightblue" : "white",
                }}
                onClick={() => handleRowClick(row.id, row.img)}
              >
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.fullname}</TableCell>
                <TableCell align="right">{row.mssv}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{
                    //  formatTimestampToDate(row.date)
                }</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const formatTimestampToDate = (timestamp) => {
  const dateObject = timestamp.toDate();
  return dateObject.toLocaleString('vi-VN', { /* options của bạn */ });
};