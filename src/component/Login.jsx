import { Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import { auth } from "../utils/database";
import { signInWithGoogle } from "../api/auth";
import { writeListAllow, writeVeXuan } from "../api/veXuanRealTime";
import { setVeXuanWithId } from "../api/storeVeXuan";

export default function Login() {
  const [open, setOpen] = React.useState(true);
  const [pass, setPass] = React.useState("");
  const [user, setUser] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePass = (e) => {
    setOpen(e.target.value);
  };

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const onsubmit = (e) => {
    let arr = [
    {
      "name": "Trần Nguyễn Hoài Thư",
      "mssv": 2154110421
    },
    {
      "name": "Huỳnh Châu Ngọc Hân",
      "mssv": 2057010193
    },
    {
      "name": "Nguyễn Nhật Như Yến",
      "mssv": 2354020273
    },
    {
      "name": "Nguyễn Ngô Tường Vy",
      "mssv": 2354100094
    },
    {
      "name": "Trần Viết Hảo",
      "mssv": 2154113004
    },
    {
      "name": "Lâm Chỉ Vân",
      "mssv": 2154063063
    },
    {
      "name": "Châu Thanh Vy",
      "mssv": 2255012079
    },
    {
      "name": "Nguyễn Hữu Thắng",
      "mssv": 2257012189
    },
    {
      "name": "Đỗ Thị Thu Hương",
      "mssv": 2254060012
    },
    {
      "name": "Nguyễn Hồ Thảo My",
      "mssv": 2354080053
    },
    {
      "name": "Lê Quách Tường Duy",
      "mssv": 2254030017
    },
    {
      "name": "Võ Thùy Trang",
      "mssv": 2154080521
    },
    {
      "name": "Chau Rith Tha",
      "mssv": 2254082090
    },
    {
      "name": "Trần thị thu liên",
      "mssv": 2354020086
    }
  ]

  arr.forEach((value)=>{
    writeListAllow(value.mssv,value.name);
  })
    
 };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <p className="mb-0">Đăng nhập</p>
        </DialogTitle>
        <DialogContent>
          <Stack>
            <TextField
              onChange={handleUser}
              id="standard-basic"
              label="Tài khoản"
              variant="standard"
            />
            <TextField
              onChange={handlePass}
              id="standard-basic"
              label="Mật khẩu"
              variant="standard"
            />
            <Button
              onClick={onsubmit}
              variant="contained"
              style={{ marginTop: "10px" }}
            >
              Đăng nhập
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
