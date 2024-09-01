import {Checkbox, Container, Rating} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {green, lightBlue, pink, red, yellow} from "@mui/material/colors";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {useEffect, useState} from "react";

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const App = () => {
    const [rating, setRating]= useState(3);
    useEffect(() => {
        alert(rating)
    }, [rating]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
          <Checkbox id="male"  size="large" icon={<FavoriteBorder />}  sx={{ color: lightBlue[300], '& .MuiSvgIcon-root': { fontSize: 80 }, '&.Mui-checked': {
                  color: red[600],
              },}}/> <label htmlFor="male">male</label>
          <Checkbox id="female" size="small" sx={{ '& .MuiSvgIcon-root': { fontSize: 50 }, color:yellow [600],'&.Mui-checked': {
                  color: pink[600],
              },}} checkedIcon={<Favorite />}/>  <label htmlFor="female">female</label>
          <Checkbox id="others"  sx={{ color:green[800], '&.Mui-checked': {color: green[400]}}}   icon={<BookmarkBorderIcon />}/> <label htmlFor="others" >others</label>

          <Rating
              name="simple-controlled"
              value={rating}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(_, value)=>{setRating(value)}}
          />

      </Container>

    </>
  );
};

export default App;
