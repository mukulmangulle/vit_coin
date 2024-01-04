import { Button, Divider, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const ListGroup = () => {
  return (
    <List sx={{marginTop:"20px"}}>
        <ListItem>
            <Typography variant='body1' sx={{flexGrow:1}}>
                Something Here.....
            </Typography>
            <Button  sx={{marginRight:"10px"}}
              variant="contained" color="warning" endIcon={<EditIcon/>}>Edit</Button>
            <Button variant="contained" color="error"endIcon={<DeleteIcon/>}>Delete</Button>
       
        </ListItem>
        <Divider/>
    </List>
  );
};

export default ListGroup;