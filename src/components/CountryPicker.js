import React from 'react'
import { FormControl, Select, MenuItem } from '@material-ui/core';

export default function CountryPicker() {
    return (
        <FormControl>
            <Select variant="outlined" value="Global" style={{background: '#fff'}}>
                <MenuItem value="Global">Global</MenuItem>
                <MenuItem value="China">China</MenuItem>
            </Select>
      </FormControl>
    )
}
