import React from 'react'
import {GITHUB_USER_API_URL} from "../utils/constant";
import { json } from 'react-router-dom';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo:{
        name:'Dummy',

      }
    };
  }
  async componentDidMount() {
    const fetchData =  await fetch(GITHUB_USER_API_URL + 'akshaydubey50')
    const jsonData  = await fetchData.json();
    console.log(jsonData)
    this.setState({userInfo:jsonData})
  }

  componentDidUpdate(){
    console.log('Component Did Update>>>>>>>>>>')
  }
  render() {

    const { count } = this.state;
    const { name, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="test" />
        <h2>Name: {name}</h2>
        <h3>Location: Mumbai</h3>
        <h4>Contact: 364853748</h4>
      </div>
    );
  }
}

export default UserClass

/**
 * - - - - - - - - -  Mounting - - - - - - --  -
 * constructor() render
 * Render() render  with dummy Data
 * ComponentDidMount() Render 
 * <API Call>
 * 
 * - - - - - - - Updating  - - - - - - - - -
 * 
 * Render() render
 * ComponentDidUpdate() render with Api Data
 * 
 */