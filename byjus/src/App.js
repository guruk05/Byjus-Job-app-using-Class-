import React from 'react';
import './App.css';
import { Card , Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const url = "https://nut-case.s3.amazonaws.com/jobs.json";

class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    jobDatas: [],
    value: "",
    loading:false,
    currentPage:[1],
    jobsPerPage:[10]
 };

 this.handleInput = this.handleInput.bind(this);
  this.showResults = this.showResults.bind(this);
  };


componentDidMount = async() => {
  this.setState({loading:true});
  const jobData = await fetch(url);
  const data = await jobData.json();
  const jobs = data.data;
  this.setState({jobDatas: jobs });
  this.setState({loading:false});
};


handleInput(e) {
  this.setState({ value: e.target.value})
};

showResults(e) {
  e.preventDefault();
  let filteredJobs = this.state.jobDatas.filter(job => job.title === this.state.value || job.location === this.state.value || job.companyname === this.state.value);
  this.setState({jobDatas:filteredJobs});
}

  render() {

    const indexOfLastJob = this.state.currentPage * this.state.jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - this.state.jobsPerPage;
    const currentJobs = this.state.jobDatas.slice(indexOfFirstJob,indexOfLastJob);

    console.log(currentJobs);

    if(this.state.loading) {
     return(
      <div><h3> loading ... </h3></div>
     )
    };

  return(
    <div>
    <header className = "header">
           CracKit
    </header>
    <div className = "searchText"><h3>Find Your Dream Jobs Here</h3></div>
    <form className = "fields">
    <input className = "search-Form" type = "text" value = {this.state.value} onChange = {this.handleInput}/>
           <Button onClick = {this.showResults} variant = "secondary" className = "searchButton">Search</Button>
         </form>
         {currentJobs.map(jobs => {
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
         })
};
    </div>
  )
 }
}

export default App;
