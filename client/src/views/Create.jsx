import Axios from 'axios';
import {useState} from 'react';
import {navigate} from '@reach/router';
import PetForm from '../components/PetForm';

const Create = props => {

    const [petForm,setPetForm] = useState({
        name:"",
        type:"",
        description: "",
        skillone:"",
        skilltwo:"",
        skillthree:""
    });
    const [errors,setErrors] = useState({
        name:"",
        type:"",
        description:""
    })

    const handleInputChange = e => {
        setPetForm({
            ...petForm,
            [e.target.name]:e.target.value
        })

    }

    const handleSubmit = e => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/pets/create',petForm)
        .then(res => {
            console.log(res.data)
            if(res.data.results){
                navigate('/');
            }
            else{
                setErrors(res.data);
            }
        })
    
    }

    return(
        <div>
            <h2 className="text-center">Know a pet needing a home?</h2>
            <PetForm 
                form={petForm}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                errors={errors}
                submitValue="Add a Pet"
            />

        </div>
    );
}

export default Create;