import React from 'react';
import './App.css';
import { Card , Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



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
         {this.state.jobDatas.map(jobs => {
           return(
             <Card className = "cardContent">
              <Card.Header className = "headerContent" style={{ backgroundcolor: 'black' }}><h5>{jobs.title}</h5></Card.Header>
              <Card.Body>
                <Card.Title><h6>{jobs.companyname}</h6></Card.Title>
                <hr className = "line"></hr>
                <Card.Text>
                  <p>{jobs.location}</p>
                  <hr className = "line"></hr>
                  <p>{jobs.experience} </p>
                  <hr className = "line"></hr>
                  <p>{jobs.skills}</p>
                  <hr className = "line"></hr>
                  <p>{jobs.type}</p>
                  <hr className = "line"></hr>
                  <p>{jobs.enddate}</p>
                </Card.Text>
                <Button variant = "primary" className = "apply"><a className = "apply" href = {jobs.applylink}> Apply here </a></Button>
              </Card.Body>
            </Card>
           )
         }

  )
}
 }

export default App;
