import {Checkbox, Container} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";



const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
          <Checkbox id="male" defaultChecked size="large"/> <label htmlFor="male">male</label>
          <Checkbox id="female" size="small" />  <label htmlFor="female">female</label>
          <Checkbox id="others"/> <label htmlFor="others">others</label>

      </Container>

    </>
  );
};

export default App;
