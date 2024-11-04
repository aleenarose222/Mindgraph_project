import styled from "@emotion/styled";
import { Button } from "@mui/material";

const StyledButton = styled(Button)({
    borderRadius:'100%',
    color:'black',
    backgroundColor:'yellow',
    marginLeft:"auto",
});

const RoundedButton=()=>{
    return <StyledButton>click</StyledButton>;
}
export default RoundedButton;

