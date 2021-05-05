import React, { Component } from 'react'

export default class Alert extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

        }
    }

    render() {
        return (
            <>
            {
                this.props.show ?
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>ERROR</strong> - {this.props.message}
                        <button type="button" onClick={() => {this.props.onClose()}} className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    :
                null
            }
            </>
        )
    }
}
