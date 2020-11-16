const PetForm = props => {
    const {form,errors,handleInputChange,handleSubmit,submitValue} = props;
    return (
        <form className="col-6 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    className="form-control"
                    value={form.name}
                    onChange={handleInputChange}
                />
                <span className="text-danger">{errors.name ? errors.name.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="type">Type:</label>
                <input 
                    type="text" 
                    name="type" 
                    className="form-control"
                    value={form.type}
                    onChange={handleInputChange}
                />
                <span className="text-danger">{errors.type ? errors.type.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input 
                    type="text" 
                    name="description" 
                    className="form-control"
                    value={form.description}
                    onChange={handleInputChange}
                />
                <span className="text-danger">{errors.description ? errors.description.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="skillone">Skill One:</label>
                <input 
                    type="text" 
                    name="skillone" 
                    className="form-control"
                    value={form.skillone}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="skilltwo">Skill Two:</label>
                <input 
                    type="text" 
                    name="skilltwo" 
                    className="form-control"
                    value={form.skilltwo}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="skillthree">Skill Three:</label>
                <input 
                    type="text" 
                    name="skillthree" 
                    className="form-control"
                    value={form.skillthree}
                    onChange={handleInputChange}
                />
            </div>
            <input type="submit" value={submitValue} className="btn btn-success"/>
        </form>
    );
}
export default PetForm;