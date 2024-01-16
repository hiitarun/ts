import { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';




function Second() {
  const [data, setData] = useState<Post[]>([]);


  const [checked, setChecked] = useState([true, false]);


  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };








  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="support"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="customer_success"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  )







  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }


  const callAPI = async () => {
    const res = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    const postData: Post[] = res.data;
    setData(postData);
    console.log(postData);

  };

  useEffect(() => {
    callAPI();
  }, []);



  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'userId',
      headerName: 'User ID',
      width: 140,
      editable: false,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 350,
      editable: true,
    },
    {
      field: 'body',
      headerName: 'Body',
      width: 300,
      editable: false,
    },

  ];



  return (
        <>


      <h1>This is componet list of departments</h1>



      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <FormControlLabel
              label="customer_service"
              control={
                <Checkbox
                  checked={checked[0] && checked[1]}
                  indeterminate={checked[0] !== checked[1]}
                  onChange={handleChange1}
                />
              }
            />
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
                {children}  
          </Typography>
        </AccordionDetails>






      </Accordion>













        <h1>This is  the component 1</h1>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>





      </>

      )
    
}
      export default Second