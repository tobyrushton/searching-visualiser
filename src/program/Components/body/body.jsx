import React, {Component} from 'react';
import './body.css';
import { connect } from 'react-redux';
import { resetArray } from '../Functions/reset';
import { randomNum } from '../Functions/randomNum';
import { colorReset } from '../Functions/colorReset';
import { setArray, setSearchNumber } from '../../../redux/reducers/arrayInfo';
import Resize from './Bars/Bars';

class Body extends Component {

  componentDidMount() {
    this.props.setArray(resetArray(this.props.arrayInfo.height,this.props.arrayInfo.arrayLength));
    setTimeout(()=>{
      this.searchNumber();
    },100)
  } 

  componentDidUpdate(){
    if(this.props.arrayInfo.searchCheck) this.searchNumberCheck();
  }
  



  searchNumber(){
    this.props.setSearchNumber(this.props.arrayInfo.array[randomNum(0,this.props.arrayInfo.arrayLength-1)]);
  }

  searchNumberCheck(){
    if(this.props.arrayInfo.array.length === 0) return;
    if(this.props.arrayInfo.searchNumber === 0) return;
    if(!this.props.arrayInfo.array.includes(this.props.arrayInfo.searchNumber))
    {
      this.searchNumber();
      colorReset(this.props.arrayInfo.arrayLength);
    }
    
  }

  render(){
    return      (
          <Resize />
    );
  }
 }

 const mapStateToProps = (state) => {
   return {
     arrayInfo: state.arrayInfo,
     headerInfo: state.headerInfo,
   }
 }

const mapDispatchToProps = () => {
  return {
    setArray,
    setSearchNumber
  }
}

export default connect(mapStateToProps,mapDispatchToProps())(Body)
