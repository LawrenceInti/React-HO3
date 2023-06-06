import { Component } from "react";


class ThirdChild extends Component {

//  constructor(props){
//     super(props)
//  }


  render() {
    return (
      <>
        <div className='array'>
      {this.props.value.map((item)=>{
        return(
          <h2><span>Name={item.name}|| Age={item.rating}|| Dept={item.dept}</span></h2>
        )
      })}
      </div>
      <button onClick={this.props.tf}>GO BACK</button>
</>
     
    )
  }
}

export default ThirdChild;