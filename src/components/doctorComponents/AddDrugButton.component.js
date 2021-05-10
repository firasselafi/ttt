import React, { Component } from 'react'
import { Form, Button } from "antd";
export class AddDrugButton extends Component {
    constructor(props) {
        super(props)
        this.State = {}
     }
    render() {
        return (

            <Button type='primary' htmlType='submit' onClick={() => this.props.onAdd()}>
               Add a drug
            </Button>

        )
    }
}

export default AddDrugButton
