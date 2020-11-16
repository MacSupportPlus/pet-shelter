import {useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';

const Main = props => {
    const [pets,setPets] = useState([]);


    useEffect(() => {
        Axios.get('http://localhost:8000/api/pets')
            .then(res => setPets(res.data.results))
            .catch(err => console.log(err));
    },[])

    

    return (
        <>
            <Link to="/new" >Add a Pet to Shelter</Link>
            <h1>Pet Shelter</h1>
                <h5>These pets are looking for homes</h5>
            <table className="table table-hover col-6 mx-auto">
                 
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map((pet,i) => <tr key={i}>
                                                <td>
                                                    {pet.name}
                                                </td>
                                                <td>
                                                    {pet.type}
                                                </td>
                                                <td>
                                                    <Link className="btn btn-primary" to={`/edit/${pet._id}`} >Edit</Link>
                                                    <Link
                                                        className="btn btn-danger" to={`/details/${pet._id}`}>Details</Link>
                                                
                                                </td>
                                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    );
}

export default Main;