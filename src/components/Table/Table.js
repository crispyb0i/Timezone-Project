import './Table.css'

let Table = (props) => {

  let handleClick = (zone) => {
    fetch('http://worldtimeapi.org/api/timezone/' + zone)
      .then(res => res.json())
      .then(json => {
        console.log(json)
      })
  }

  return (
    <table id='timezone-table'>
      <tr>
        <th>Time Zone Name</th>
        <th>Area</th>
        <th>Location</th>
        <th>Details</th>
      </tr>
      {props.results.map(zone =>
        <tr>
          <td>{zone}</td>
          <td>{zone.split('/')[0]}</td>
          <td>{zone.split('/')[1]}</td>
          <td><button onClick={() => handleClick(zone)}>Details</button></td>
        </tr>
      )}
    </table>

  )
}

export default Table
