import React, {Component} from 'react'
import Table from '../Table/Table'

class Form extends Component {
  state = {
    area:'all',
    results:[]
  }

  componentDidMount() {
    fetch('http://worldtimeapi.org/api/timezone')
      .then(res => res.json())
      .then(json => {
        this.setState({results:json})
      })

  }

  handleChange = (e) => {
    this.setState({area:e.target.value})
    fetch('http://worldtimeapi.org/api/timezone/' + e.target.value)
      .then(res => res.json())
      .then(json => {
        this.setState({results:json})
      })
  }

  render(){
    return(
      <div>
        <form id='dropdown'>
          <select onChange={this.handleChange} name='areas'>
            <option value=''>All</option>
            <option value='America'>America</option>
            <option value='Asia'>Asia</option>
            <option value='Australia'>Australia</option>
          </select>
        </form>
        <Table results={this.state.results}/>
      </div>
    )
  }
}

export default Form
