import styled from "@emotion/styled";
import { Button } from "@mui/material";

const StyledButton = styled(Button)({
    borderRadius:'50%',
    color:'black',
    backgroundColor:'blue',
});

const RoundedButton=()=>{
    return <StyledButton>click</StyledButton>;
}
export default RoundedButton;

