import React from "react";
import { Slider,Box} from "@material-ui/core";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider, makeStyles} from "@material-ui/core/styles";

export var speed = 200;




const theme = createTheme({
  direction: "rtl",
});


const useStyles = makeStyles((theme) => ({
  slider:{
    padding: theme.spacing(2),
    fontSize: 14,
  },
}));


function handleChange(event,value){
  speed = value; 
}




function ReverseSlider () {


  const sliderDisabled = useSelector((state)=>state.headerInfo.buttonsDisabled);


  const classes = useStyles();

  return (
    <div className ={classes.slider}>
    <ThemeProvider theme={theme} >
      <Box width = {200} sx={{display: {xs: 'none', md: 'block'}}}>
        ANIMATION SPEED
        <Slider 
          defaultValue={200}
          min={10}
          max={1000}
          size ="medium"
          track="inverted"
          style={{color:'rgb(211,211,211)'}}
          onChange= {handleChange}
          disabled = {sliderDisabled}
        >
        </Slider>
      </Box>
      </ThemeProvider>
      </div>
  );
};

export default ReverseSlider;

