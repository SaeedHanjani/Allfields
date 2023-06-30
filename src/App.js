import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import { useState } from "react";
import "./App.css";

function App() {
  const [formValues, setFormValues] = useState([]);
  const [toggle, setToggle] = useState(false);

  const handleChange = (e, index) => {
    const values = [...formValues];
    values[index].value = e.target.value;
    setFormValues(values);
  };

  const handleAddField = (e) => {
    e.preventDefault();
    const values = [...formValues];

    setFormValues(values);
  };

  const addBtnClick = (e) => {
    e.preventDefault();
    setToggle(true);
  };

  const education = ["Diploma", "BD", "Master", "DBA"];
  const intresting = ["Math", "Physics", "Sports", "Traveling"];
  return (
    <div className="App">
      <form>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <br />
        <TextField id="outlined-basic" label="Family" variant="outlined" />

        <br />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <br />
        <TextField id="outlined-basic" label="Address" variant="outlined" />
        <br />
        <TextField id="outlined-basic" label="Tel" variant="outlined" />
        <br />
        <TextField
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          id="outlined-basic"
          label="Mobile"
          variant="outlined"
        />
        <br />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={education}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Education" />}
        />
        <br />

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
        <br />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={intresting}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Intresting Subjects" />
          )}
        />
        <br />
        <FormControlLabel control={<Switch />} label="Has Job" />
        <br />
        <Button variant="contained">Save</Button>
      </form>
    </div>
  );
}
export default App;
