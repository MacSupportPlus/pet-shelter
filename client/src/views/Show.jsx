import {useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';

const Show = props => {
    const [pet,setPet] = useState(null);
    const [bounce,setBounce] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => setPet(res.data.results))
            .catch(err => console.log(err))
    },[props, bounce])
    const bouncePet = (id,name) => {
        Axios.delete(`http://localhost:8000/api/pets/destroy/${id}`)
            .then(res => {
                if(res.data.results){
                    alert(`You removed ${name} from the shelter, Congrats!!!`)
                    // creates state variable to re-render DOM
                    setBounce(!bounce);
                }
            })
            .catch(err => console.log(err))
    }

    return (
        pet ?
            
            <div className="card col-6 mx-auto">
                    <Link to="/" >HOME</Link>           <button link to="/" onClick={() => bouncePet(pet._id,pet.name)}className="btn btn-danger" >Adopt</button>
                <h1> {pet.name} the {pet.type} </h1>
                <div className="card-body">
                    <h4 className="card-subtitle text-muted">Skill 1 : {pet.skillone} </h4>
                    <h4 className="card-subtitle text-muted">Skill 2 : {pet.skilltwo} </h4>
                    <h4 className="card-subtitle text-muted">Skill : {pet.skillthree} </h4>
                    <p className="card-text">Description: {pet.description}</p>
                </div>
            </div> : <p>Loading . . .</p> 
    );
}

export default Show;