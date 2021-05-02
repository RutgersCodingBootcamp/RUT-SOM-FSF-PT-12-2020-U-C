import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";


// search has to be separate STATE
// everything else can be in another state value

function Search() {
  const [searchValue, setSearchValue] = useState("Wikipedia");
  const [wiki, setWiki] = useState({
    title: "",
    url: "",
    error: ""
  });

  const handleInputChange = event => {
    // copy -- no need because it is a single value
    // process -- no need 
    // setstate -- only thing needed here
    setSearchValue(event.target.value);
  }

  useEffect( () => {
    // copy
    // process
    // setstate
    API.searchTerms(searchValue)
          .then(res => {
            if (res.data.length === 0) {
              throw new Error("No results found.");
            }
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            setWiki({
              ...wiki,
              title: res.data[1][0],
              url: res.data[3][0],
              error: ""
            });
          })
          .catch(err => setWiki({ ...wiki, error: err.message }));
  }, [searchValue]); // useEffect will watch for changes in search value

  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search For Anything on Wikipedia</h1>
        <Alert type="danger" style={{ opacity: wiki.error ? 1 : 0, marginBottom: 10 }}>
          {wiki.error}
        </Alert>
        <input
          value={searchValue}
          onChange={handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Type in a search term to begin"
          id="term"
        />
        <SearchResults
          title={wiki.title}
          url={wiki.url}
        />
      </Container>
    </div>
  )
}

// class Search extends Component {
//   state = {
//     search: "Wikipedia",
//     title: "",
//     url: "",
//     error: ""
//   };

//   // When the component mounts, update the title to be Wikipedia Searcher
//   componentDidMount() {
//     document.title = "Wikipedia Searcher";

//     API.searchTerms(searchValue)
//       .then(res => {
//         if (res.data.length === 0) {
//           throw new Error("No results found.");
//         }
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         this.setState({
//           title: res.data[1][0],
//           url: res.data[3][0],
//           error: ""
//         });
//       })
//       .catch(err => this.setState({ error: err.message }));
//   }

//   handleInputChange = event => {
//     this.setState({ search: event.target.value });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (!searchValue) {
//       return;
//     }
//     API.searchTerms(searchValue)
//       .then(res => {
//         if (res.data.length === 0) {
//           throw new Error("No results found.");
//         }
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         this.setState({
//           title: res.data[1],
//           url: res.data[3][0],
//           error: ""
//         });
//       })
//       .catch(err => this.setState({ error: err.message }));
//   };
//   render() {
//     return (
//       <div>
//         <Container style={{ minHeight: "100vh" }}>
//           <h1 className="text-center">Search For Anything on Wikipedia</h1>
//           <Alert type="danger" style={{ opacity: wiki.error ? 1 : 0, marginBottom: 10 }}>
//             {wiki.error}
//           </Alert>
//           <SearchForm
//             handleFormSubmit={this.handleFormSubmit}
//             handleInputChange={this.handleInputChange}
//             results={searchValue}
//           />
//           <SearchResults
//             title={wiki.title}
//             url={wiki.url}
//           />
//         </Container>
//       </div>
//     );
//   }
// }

export default Search;
