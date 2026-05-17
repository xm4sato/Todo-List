import { TextField, type FormHelperTextProps, type TextFieldVariants } from "@mui/material";
import { useState, type PropsWithChildren, type ProviderProps } from "react";
import type { errorText } from "../Features/Menu/Types";



interface TextFieldUI {
    multiline? : boolean;
    label : string;
    variant? : TextFieldVariants;
    error? : boolean;
    helperText? : errorText | string;
    Onchange : (e : any) => void
}


function TextFieldUI(children : TextFieldUI) {

    return(<>
    <TextField
      
     onChange={(e) => children.Onchange(e.target.value)}
      id="standard-basic"
      label={children.label}
      multiline={children.multiline || false}
      variant={children.variant}
      error={children.error}
      helperText={children.helperText}
      sx={{
      display : "flex",
      justifyContent : "right",   
        margin : "10px 0",
        "& label": {
          left: "auto",
          right: 0,
          transformOrigin: "right",
        },
        "& .MuiInput-root": {
          textAlign: "right",
          direction: "rtl",
        },
        // تحريك الخط السفلي ليبدأ من اليمين
        "& .MuiInput-underline:after": {
          transformOrigin: "right",
        },
       
      }}
    />
    </>)
}


export default TextFieldUI
