import Card from './Card'
import { capitalize } from 'lodash'


function Box(props) {
  return (
    <div className='grid gap-4 grid-cols-6 p-5 justify-center items-center'>
    {(props.data).map((patient, index) => 
      <Card 
      key={index}
      initial= {patient.firstName[0].toUpperCase()} 
      firstName= {capitalize(patient.firstName)}
      lastName={capitalize(patient.lastName)}
      department={patient.department}
      lastVisit={patient.lastVisit}
      id={patient._id}
       />)}
    </div>
  )
}

export default Box