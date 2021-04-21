import React from 'react'
import { TextInput } from "./components/TextInput"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      educationInputs: [],
      experienceInputs: []
    }
  }

  addEducation = (inputs) => {
    this.setState({
      educationInputs: this.state.educationInputs.concat(inputs)
    })
  }

  addExperience = (inputs) => {
    this.setState({
      experienceInputs: this.state.experienceInputs.concat(inputs)
    })
  }

  removeExperience = () => {
    this.setState({
      experienceInputs: this.state.experienceInputs.slice(0,-1)
    })
  }

  removeEducation = () => {
    this.setState({
      educationInputs: this.state.educationInputs.slice(0,-1)
    })
  }
  
  render = () => {

    const personalInputs = [
      "First Name",
      "Last Name",
      "Address",
      "Phone Number",
      "Email",
      "Description"
    ]

    const experience = {
      company : "Company Name",
      startYear : "Start Year",
      endYear : "End Year",
      role : "Role",
      description : "Description",
      location : "City, State"
    }

    const education = {
      degree : "Degree Type",
      major : "Major",
      school : "School",
      location : "City, State",
      startYear : "Start Year",
      endYear : "End Year"
    }

    return (
      <div className="container">
        <div className="navbar nav"> 
          <h1>My Curriculum Vitae</h1>
        </div>
          <div className="row">
            <h3 className="p-3 border bg-light">Personal Information</h3>
            {personalInputs.map((input) => <TextInput placeholder={input}/>)}
          </div>
          
          <div className="row">
            <h3 className="p-3 border bg-light">Education</h3>
            {this.state.educationInputs.map((education) => 
              Object.keys(education).map((input, i) => 
                <TextInput placeholder={education[input]}/>
            ))}
            <div className="col-sm-4 p-3">
              <button className="btn btn-primary m-2" onClick={(() => this.addEducation(education))}>Add Another</button>
              <button className="btn btn-danger m-2" onClick={this.removeEducation.bind(this)}>Remove</button>
            </div>
          </div>

          <div className="row">
            <h3 className="p-3 border bg-light">Work History</h3>
            {this.state.experienceInputs.map((experience) => Object.keys(experience).map((input, i) => 
              <TextInput placeholder={experience[input]}/>
            ))}
            <div className="col-sm p-3">
              <button className="btn btn-primary m-2" onClick={(() => this.addExperience(experience))}>Add Another</button>
              <button className="btn btn-danger m-2" onClick={this.removeExperience.bind(this)}>Remove</button>
            </div>
          </div>
      </div>
    );
  }
}

export default App;