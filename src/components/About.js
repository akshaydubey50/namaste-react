import React from 'react'
import UserClass from './UserClass'
import User from './User'

class About extends React.Component{
  constructor(props){
    super(props)
    console.log('Parent Constructor')

  }
  componentDidMount(){
    console.log('Parent Did Mount')
  }
  render(){
    console.log('Parent Render')
    return (
      <div>
        About Page Data
        <User name={"Akshay Dubey Function"} />
        <UserClass  />
      </div>
    );
  }
}
export default About