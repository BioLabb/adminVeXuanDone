import { useEffect, useState } from 'react';
import './App.css';
import { getAllVe } from './api/storeVeXuan';
import DataList from './component/DataList';
import { Box, Button, Grid, TextField } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { readAllow, writeListAllow } from './api/veXuanRealTime';
import ListAllow from './component/ListAllow';
import Login from './component/Login';

function App() {
  const [arrVe, setArrayVe] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [img, setImg] = useState("");
  const [fullName, setFullName] = useState('');
  const [id, setId] = useState('');
  const [listAllow, setListAllow] = useState([]);

  const [value, setValue] = useState('1');


  useEffect(() => {
    getAllVe()
      .then(ves => {
        setArrayVe(ves);
      });

    readAllow()
      .then(listAllow => {
        setListAllow(listAllow);
      })

  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const handleImg = (url) => {
    setImg(url);
  }

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmitAllow = (event) => {
    writeListAllow(id, fullName)
      .then((isResult) => {
        if (isResult) {
          alert("Thêm thành công");
          setId("");
          setFullName("");
          readAllow()
            .then(listAllow => {
              setListAllow(listAllow);
            })

        } else {
          alert("Thất bại")
        }
      })
  };

  const filteredRows = arrVe.filter((row) =>
    row.fullname.toLowerCase().includes(searchTerm.toLowerCase())
    || row.id.toString().includes(searchTerm.toLowerCase())
    || row.mssv.toString().includes(searchTerm.toLowerCase())
  );

  const fillListAllow = Object.values(listAllow).filter(row=>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
    || row.mssv.toString().includes(searchTerm.toLowerCase())

    )

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      {/* <Login/> */}
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
            <Tab label="Danh Sách đã mua" value="1" />
            <Tab label="Chưa chọn được vé" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Grid style={{ marginLeft: "10px", marginRight: "10px" }} container spacing={2}>
            <Grid item xs={8}>
              <p>Tìm kiếm</p>
              <TextField
                label="Nhập số vé hoặc họ tên"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ marginBottom: 0 }}
              />
            </Grid>
            <Grid item xs={8}>
              <DataList Data={filteredRows} imgCell={handleImg} />
            </Grid>
            <Grid item xs={4}>
              <img style={{ maxHeight: "500px" }} src={img} />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="2">
          <Grid style={{ marginLeft: "10px", marginRight: "10px" }} container spacing={2}>
            <Grid item xs={3}>
              <p>Cấp quyền cho những bạn chuyển khoản nhưng chưa mua được đăng ký vé</p>
              <TextField
                label="Họ và tên"
                variant="outlined"
                value={fullName}
                onChange={handleFullNameChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="mssv"
                variant="outlined"
                value={id}
                onChange={handleIdChange}
                fullWidth
                margin="normal"
              />
              <Button style={{marginRight:"5px"}} variant="contained" color="primary" onClick={handleSubmitAllow}>
                Submit
              </Button>
              <TextField
                label="Tìm kiếm"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ marginBottom: 10 }}
              />
            </Grid>
            <Grid item xs={5}>
              <ListAllow Data={fillListAllow} />
            </Grid>
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default App;
