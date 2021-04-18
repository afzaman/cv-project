import React from 'react'
import ContentEditable from 'react-contenteditable'

export class TextInput extends React.Component{

    constructor(props) {
        super()
        this.contentEditable = React.createRef()
        this.state = {
          html: props.placeholder,
        }
      }
    
    handleChange = e => {
        this.setState({
          html: e.target.value
        })
      }

    render = () => {
        return(
            <div>
                <ContentEditable
                    innerRef={this.contentEditable}
                    html={this.state.html}
                    disabled={false}
                    onChange={this.handleChange}
                /> 
            </div>
        )
    }
}