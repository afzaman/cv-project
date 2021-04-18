import React from 'react'
import { TextInput } from "./components/TextInput"


class App extends React.Component {
  
  render = () => {

    const personalInputs = [
        "First Name",
        "Last Name",
        "Address",
        "Phone Number",
        "Email",
        "Description"
    ]

    const educationInputs = [
      "Degree Type",
      "Major",
      "School",
      "City, State",
      "Start Year",
      "End Year"
    ]

    const experienceInputs = [
      "Degree Type",
      "Major",
      "School",
      "City, State",
      "Start Year",
      "End Year"
    ]

    return (
      <div>
          <div>
            <h3>Personal Information</h3>
            {personalInputs.map((input) => <TextInput placeholder={input}/>)}
          </div>
          <div>
            <h3>Education</h3>
            {educationInputs.map((input) => <TextInput placeholder={input}/>)}
            <button>Add Another</button>
          </div>
          <div>
            <h3>Work History</h3>
            {experienceInputs.map((input) => <TextInput placeholder={input}/>)}
            <button>Add Another</button>
          </div>
      </div>
    );
  }
}

export default App;