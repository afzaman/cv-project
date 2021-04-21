import React from 'react'
import ContentEditable from 'react-contenteditable'
import uniqid from 'uniqid'

export class TextInput extends React.Component{

    constructor(props) {
        super()
        this.contentEditable = React.createRef()
        this.state = {
          html: props.placeholder,
          key: null
        }
      }
    
    handleChange = e => {
        this.setState({
          html: e.target.value,
          key: uniqid()
        })
      }

    handlesubmit = e => {
      this.setState({
        key: uniqid()
      })
    }

    render = () => {
        return(
            <div className="col-lg-4">
                <ContentEditable
                    innerRef={this.contentEditable}
                    html={this.state.html}
                    disabled={false}
                    onChange={this.handleChange}
                    key={this.state.key}
                    onSubmit={this.handlesubmit}
                /> 
            </div>
        )
    }
}