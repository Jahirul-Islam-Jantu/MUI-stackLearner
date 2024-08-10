import {Checkbox, Container} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {green, lightBlue, pink, red, yellow} from "@mui/material/colors";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const App = () => {
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

      </Container>

    </>
  );
};

export default App;
