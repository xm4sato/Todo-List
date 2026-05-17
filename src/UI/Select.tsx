import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectClassKey } from "@mui/material/Select";
import type { SxProps } from "@mui/material";

type item = { itemID: number; itemValue: string | number; itemTitle: string };

interface SelectBoxChildrens {
  label: string;
  Selectedvalue : string | number;
  BoxSx?: SxProps;
  MenuItems: item[];
   Onchange : (e: any) => void

}
// { minWidth: 120 }
export default function SelectBoxUI(
  children: SelectBoxChildrens,
): React.JSX.Element {

 
  return (
    <Box sx={children.BoxSx}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{children.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={children.Selectedvalue || ""}
          label="Age"
          onChange={(e) => children.Onchange(e)}
        >
          {children.MenuItems.map((item: item) => {
            return <MenuItem value={item.itemValue}>{item.itemTitle}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
