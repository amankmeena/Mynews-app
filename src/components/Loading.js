import React, { Component } from 'react'
import Spinner from './Spinner2.gif'

export class Loading extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={Spinner} alt="loadng" />
            </div>
        )
    }
}

export default Loading