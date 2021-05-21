import React, { Component } from 'react'
import API from '../../utlis/dogsapi';
// import { getByBreed } from "../../utlis/dogsapi";


class Search extends Component {
    state = {
        breed: "",
        images: []
    }

    componentDidMount = () => {
        this.setState({breed: "hound"});
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        console.log(name, value);
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        window.debugEvent = event;
        console.log(event);

        API.getByBreed(this.state.breed)
            .then(data => {
                console.log(data);
                // copy
                let images = [...data.data.message];
                // process
                images.splice(10);
                // setState
                this.setState({ images: images });

            })
    }

    render(props) {
        let styles = {
            form: {
                maxWidth: "500px",
                margin: "10px auto"
            },
            input: {
                marginRight: "5px",
                borderRadius: "30000px"
            },
            button: {
                borderRadius: "50px"
            }
        };

        return (
            <main>
                <h1>Search</h1>
                <form id="searchForm" onSubmit={this.handleSubmit} fstyle={styles.form}>
                    <div className="input-group mb-3">
                        <label>Breed:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="enter in the breed to search for"
                            aria-label="Breed"
                            aria-describedby="search"
                            id="breed"
                            name="breed"
                            onChange={this.handleChange}
                            value={this.state.breed}
                            style={styles.input}
                        />
                        <button style={styles.button} onClick={this.handleSubmit} className="btn btn-outline-secondary" type="submit" id="search">Search</button>


                    </div>
                </form>
            <ul>
                { this.state.images.map((image, index) => (
                    <li key={"breed" + index}>
                        <img src={image} alt={this.state.breed} />
                    </li>

                ))}
            </ul>
            </main>
        )
    }
}

export default Search;