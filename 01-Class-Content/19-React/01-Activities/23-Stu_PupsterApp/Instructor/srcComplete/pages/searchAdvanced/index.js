import React, {Component} from "react";
import API from "../../utils/dogsapi";
// import {getByBreed} from "../../utils/dogsapi";

class SearchAdvanced extends Component {
    
    state = {
        breed: "",
        images: []
    }
    // will run at least once when the component loads up for the first time
    // componentDidMount????
    componentDidMount= () =>{
        const path = this.props.location.pathname;
        // copy data from url
        const breed = path.substr("/searchadvanced/".length);
        if(breed.length > 0){
            // process
            API.getByBreed(breed)
            .then( data => {
                // window.debugData = data;
                // console.log(data);
                // -- COPY
                let images = [...data.data.message];
                // console.log(images);
                // -- PROCESS
                images.splice(10);
                // -- SETSTATE
                this.setState({breed: breed, images: images});
            });
        }

    }
    // react-router-dom??? for the history
    handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        // console.log(name, value);

        this.setState({
            [name]: value
        });
    }
    handleSubmit = event => {
        // always do this FIRST!
        event.preventDefault();
        // console.log(event);

        // console.log(`/searchadvanced/${this.state.breed}`);
        this.props.history.push(`/searchadvanced/${this.state.breed}`);
        // history.push(`/searchadvanced/${this.state.breed}`);

        API.getByBreed(this.state.breed)
        .then( data => {
            // window.debugData = data;
            // console.log(data);
            // -- COPY
            let images = [...data.data.message];
            // console.log(images);
            // -- PROCESS
            images.splice(10);
            // -- SETSTATE
            this.setState({images: images});
        });
    }
    render(){
        let styles = {
            form: {
                maxWidth: "400px",
                margin: "10px auto"
            },
            input: {
                marginRight: "12px",
                borderRadius: "50px"
            },
            button: {
                borderRadius: "50px"
            },
            image: {
                margin: "10px",
                height: "auto",
                maxWidth: "300px"
            },
            list: {
                listStyleType: "none"
            }
        };
        return (
            <main>
                <h1>Search</h1>
                <form id="searchForm"  style={styles.form}>
                    <label htmlFor="breed">Breed</label>
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="maltese" 
                            aria-label="breed" 
                            aria-describedby="search" 
                            id="breed" 
                            name="breed"
                            onChange={this.handleChange}
                            value={this.state.breed}
                            style={styles.input}
                            />

                        <button style={styles.button} 
                        onClick={this.handleSubmit} 
                        className="btn btn-outline-secondary" 
                        type="submit" 
                        id="search">Search</button>
                    </div>
                </form>
                <ul>
                    {this.state.images.map( (image, index) => (
                        // if you have a couple of maps on the same page, you may need to have to add a keyword to the key
                        <li key={"breed" + index} style={styles.list}>
                            <img src={image} alt={this.state.breed} style={styles.image} />
                        </li>
                    ))}
                </ul>
            </main>

        );
    }
}

export default SearchAdvanced;