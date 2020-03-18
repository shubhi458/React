import React from 'react';
import logo from './logo.svg';
import './App.css';
import Address from './address'
import DemoList, { AppName } from './list'

class App extends React.Component{
  constructor(props){
    console.log("props",props)
    super(props);
    this.state={
      title:"Demo App",
      list:[],
      address:{
        city:"mohali",
        houseNumber:"#86"
      }
    }
  }

  componentWillMount(){
    console.log("here")
  }
  componentDidMount(){
    console.log("there")
  }

  // changeTitle(title){
  //   this.setState({title});
  // }
  changeTitle(event){
    // console.log("val",event.target.value);
    this.setState({title:event.target.value});
  }

  addList(){
    this.setState({list:[...this.state.list,this.state.title],title:''});
    console.log(this.state.list);
  }

  render(){
    const {title,list}=this.state;
    console.log(title,list);
    return (
      <div className="App">
        {this.state.title}
       
      {/* <Address city={"Chandigarh"}/>
      <Address zip={"160022"}/> */}

      <AppName name="Demo App"/>

        {/* <button onClick={()=>this.changeTitle("Test App")}>Change Title</button> */}
        <input type="text" value={this.state.title} onChange={(event)=>this.changeTitle(event)}/>
        {/* <button onClick={()=>this.setState({title:"Test App"})}>Change Title</button> */}
        <button onClick={()=>this.addList()}>Add List</button>
        {/* <ul>
          {
            this.state.list.map((value,index)=>
            <li key={index}>{value}</li>
            
            )
          }
        </ul> */}
        <DemoList list={this.state.list}/>
      </div>
    )
  }
}

export default App;
