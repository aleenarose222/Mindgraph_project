import styled from "@emotion/styled";
import { Button } from "@mui/material";

const StyledButton = styled(Button)({
    borderRadius:'100%',
    height:'30px',
    width:'30px',
    color:'black',
    backgroundColor:'#fff',
    marginLeft:"auto",
});

const RoundedButton=()=>{
    return <StyledButton>c</StyledButton>;
}
export default RoundedButton;

