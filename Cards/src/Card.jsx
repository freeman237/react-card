import profilePic from './assets/Profile.jpg'
import PropTypes from 'prop-types'

function Card(props){
    return(
        <div className="card">
            <img src={profilePic} alt="" />
            <h1>{props.name}</h1>
            <p>{props.about}</p>
        </div>
    )
}
Card.defaultProps = {
    name: 'Huncho',
    about: 'Quavo',
}
export default Card