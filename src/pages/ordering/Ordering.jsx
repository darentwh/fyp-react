import * as React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './Ordering.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import Autocomplete from '@mui/material/Autocomplete';

const optionsCountries = ['Singapore', 'Malaysia'];
const optionsItem = ['34-720A','950XL', '975XL2', 'RK1-720A','RK14-975XLC'];

export default function Ordering(){
    function callApi() {
        var requestOptions = {
            method: 'PUT',
            body: JSON.stringify({customerName:{valueName},contactNumber:{valueContactNumber},dateOrder:{value1},dateReceive:{value2},deliveryCountry:{valueCountry},deliveryAddress:{valuePostalCode},item:{valueItem},quantity:{valueQuantity}})
        }
        fetch('https://rtcbcz6encwcuxtjnq4mfxz3dy0cauth.lambda-url.us-east-1.on.aws/', requestOptions)
          .then(data => data.json()) // Parsing the data into a JavaScript object
          .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
      }
    const handleSubmit = () => {
        console.log({valueName},{valueContactNumber},{orderDate:value1['$d']},{value2},{valueCountry},{valueItem});
        callApi()
    }
    const [value1, setValue1] = React.useState('');
    const handleChange1 = (newValue) => {
        setValue1(newValue);
    };
    const [value2, setValue2] = React.useState('');
    const handleChange2 = (newValue) => {
        setValue2(newValue);
    };
    const [valueName, setValueName] = React.useState('');
    const [valueContactNumber, setValueContactNumber] = React.useState('');
    const [valueQuantity, setValueQuantity] = React.useState('');
    const [valuePostalCode, setValuePostalCode] = React.useState('');
    const [valueCountry, setValueCountry] = React.useState(optionsCountries[0]);
    const [inputValueCountry, setInputValueCountry] = React.useState(optionsCountries[0]);
    const [valueItem, setValueItem] = React.useState(optionsItem[0]);
    const [inputValueItem, setInputValueItem] = React.useState(optionsCountries[0]);
    
    return(
        <div className='ordering'>
            <div className='orderTitle'>Order Form ✍🏻</div>
            <div className='featuredItem'>
                <div className='featured2'>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <div>
                                <TextField
                                required
                                id="outlined-required"
                                label="Customer Name"
                                value={valueName}
                                onChange={(event) => {setValueName(event.target.value)}}
                                />
                            </div>
                            <div>
                                <TextField
                                required
                                id="outlined-required"
                                label="Contact Number"
                                value={valueContactNumber}
                                onChange={(event) => {setValueContactNumber(event.target.value)}}
                                />
                            </div>
                        </Box>
                    </div>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <div>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DesktopDatePicker
                                        label='Order Date'
                                        inputFormat="DD/MM/YYYY"
                                        value={value1}
                                        onChange={handleChange1}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </div>
                            <div>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DesktopDatePicker
                                        label='Required Date'
                                        inputFormat="DD/MM/YYYY"
                                        value={value2}
                                        onChange={handleChange2}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </div>
                        </Box>
                    </div>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <div>
                                <Autocomplete
                                    value={valueCountry}
                                    onChange={(event, newValue) => {
                                        setValueCountry(newValue);
                                    }}
                                    inputValue={inputValueCountry}
                                    onInputChange={(event, newInputValue) => {
                                        setInputValueCountry(newInputValue);
                                    }}
                                    id="controllable-states-demo"
                                    options={optionsCountries}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Destination Country" />}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Delivery Address Postal Code"
                                    value={valuePostalCode}
                                    onChange={(event) => {setValuePostalCode(event.target.value)}}
                                />
                            </div>
                        </Box>
                    </div>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <div>
                                <Autocomplete
                                    value={valueItem}
                                    onChange={(event, newValue) => {
                                        setValueItem(newValue);
                                    }}
                                    inputValue={inputValueItem}
                                    onInputChange={(event, newInputValue) => {
                                        setInputValueItem(newInputValue);
                                    }}
                                    id="controllable-states-demo"
                                    options={optionsItem}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Item Code" />}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Item Quantity"
                                    value={valueQuantity}
                                    onChange={(event) => {setValueQuantity(event.target.value)}}
                                />
                            </div>
                        </Box>
                    </div>
                </div>
                <div className="submitButton">
                    <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </div>
    )
}