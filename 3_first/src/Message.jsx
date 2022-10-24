import React from "react";
import Card from "@mui/material/Card";
import {Typography} from '@mui/material';
import CardContent from "@mui/material/CardContent";



const Message = ({author,text}) => {
    return (
<div className="message-text">
  <Card sx={{minWitch : 275}} >
     <CardContent>
      <Typography variant="h5" component="div" color="primary">{author}</Typography>
      <Typography variant="body2"> {text}</Typography>
     </CardContent>
  </Card>
</div>
    );
};



export default Message;