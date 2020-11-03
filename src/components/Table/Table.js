import React, {Component} from 'react'
import Modal from '../../UI/Modal/Modal'
import './Table.css'

class Table extends Component {
  state = {
    modal: false,
    timezone: {
      abbreviation: '',
      client_ip: '',
      datetime: '',
      day_of_week: '',
      day_of_year: '',
      dst: '',
      dst_from: '',
      dst_offset: '',
      dst_until: '',
      raw_offset: '',
      timezone: '',
      unixtime: '',
      utc_datetime: '',
      utc_offset: '',
      week_number: '',
    }
  }

  handleClick = async (zone) => {
    await fetch('http://worldtimeapi.org/api/timezone/' + zone)
      .then(res => res.json())
      .then(json => this.setState({timezone:json}))
    this.showModal()
  }

  showModal = () => {
    this.setState({ modal: true });
  };

  hideModal = () => {
    this.setState({ modal: false });
  };

  render(){
    return (
      <div id='table-div'>
        <table className='timezone-table'>
          <tr>
            <th>Time Zone Name</th>
            <th>Area</th>
            <th>Location</th>
            <th>Details</th>
          </tr>
          {this.props.results.map(zone =>
            <tr>
              <td>{zone}</td>
              <td>{zone.split('/')[0]}</td>
              <td>{zone.split('/')[1]}</td>
              <td><button onClick={this.showModal} onClick={() => this.handleClick(zone)}>Details</button></td>
            </tr>
          )}
        </table>
        <Modal show={this.state.modal} handleClose={this.hideModal}>
          <h3 style={{fontSize:'30px'}}>{this.state.timezone.timezone}</h3>
          <p><strong>Time Zone Abbreviation: </strong>{this.state.timezone.abbreviation}</p>
          <p><strong>Datetime: </strong>{this.state.timezone.utc_datetime}</p>
        </Modal>
      </div>
    )
  }
}

export default Table
