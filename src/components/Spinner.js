import React, { Component } from 'react'
import spinner from '../Images/loader1.gif'
import '../styles/Spinner.css';

export default class Spinner extends Component {
  render() {
    return (
      <div className='spin'>
        <div className='text-center' id='loading'>
            <img src={spinner} alt='Loading...' id='SpinnerId'/>
        </div>
      </div>
    )
  }
}