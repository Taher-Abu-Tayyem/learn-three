import React, { Component } from 'react'

export default class Form extends Component {
    state={
        name:"taher",pass:1234,gender:""
    }
    submitHundler =(e)=>{
        e.preventDefault()
        console.log("first")
        console.log(this.state)
    }
    nameHundler =(e)=>{
      this.setState({name: e.target.value})
      console.log(this.state)
    }
    genderHundler =(e)=>{
        this.setState({gender: e.target.value})
        console.log(this.state)
      }
  render() {
    return (
  
       <form onSubmit ={this.submitHundler}>
        <label>user</label>
        <input type='text' onChange={this.nameHundler}></input>
        <br/>
        <label>pass</label>
        <input type='password'></input>
        <br/>
        <select onChange={this.genderHundler}>
            <option value="male">male</option>
            <option value="female">female</option>
        </select>
        <br/>
        <button type='submit'>submit</button>
       </form>
       
    )
  }
}
