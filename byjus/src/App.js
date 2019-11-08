import React from 'react';
import './App.css';



const url = "https://nut-case.s3.amazonaws.com/jobs.json";

export class App extends React.Component{
  constructor(props) {
  super(props);
    
  }
}

componentDidMount = async() => {
  const jobData = await fetch(url);
  const data = await jobData.json();
  const jobs = data.data;
  this.setState({jobDatas: jobs });
  // console.log(this.state.jobDatas);
}

 render(){
  return(
    <div>
    <header className = "header">
           CracKit
         </header>
    </div>
    <div className = "searchText"><h3>Find Your Dream Jobs Here</h3></div>
    <form className = "fields">
    <input className = "search-Form" type = "text" value = {this.state.value} onChange = {this.handleInput}/>
           <Button onClick = {this.showResults} variant = "secondary" className = "searchButton">Search</Button>
         </form>

  )
}

export default App;
