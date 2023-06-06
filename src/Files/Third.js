import { Component } from 'react';
import ThirdChild from './ThirdChild';


class Third extends Component {
  
    state={
      name:"",
      rating:"",
      dept:"",
      click:true,
       data:[]
     }

     handleChange=(event)=>{
      this.setState({[event.target.name]:event.target.value})
     }

     toggle=()=>{
      this.setState({click:!this.state.click})
     }

     handleClick=()=>{
      let obj={
        name:this.state.name,
        rating:this.state.rating,
        dept:this.state.dept
      }
      this.state.data.push(obj);
      this.setState({data:this.state.data,click:false,name:"",rating:"",dept:""})
      console.log(this.state.data)
     }
   
     render(){
         return (
      <>
        {this.state.click ?
      <>
          <h1>EMPLOYEE FEEDBACK FORM</h1>
      <label>NAME:-</label>
      <input className='one box' type="text" name="name" onChange={this.handleChange} placeholder="Enter ur Name" value={this.state.name}/>
      <label>RATING:-</label>
      <input className='two box' type="number" name="rating" onChange={this.handleChange}  placeholder="Enter ur Rating"  value={this.state.rating}/> 
      <label>DEPT:-</label>
      <input className='three box' type="text" name="dept" onChange={this.handleChange}  placeholder="Enter ur Dept"  value={this.state.dept}/>   
      <button onClick={this.handleClick}>Submit</button>
      </>
      :

      <ThirdChild value={this.state.data}  tf={this.toggle}/>
     }
      
      </>
     );
  }
}
export default Third;
