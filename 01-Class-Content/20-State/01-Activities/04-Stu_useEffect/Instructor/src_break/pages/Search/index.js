import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";

function Search(props) {
  const [wiki, setWiki] = useState({
    search: "Wikipedia",
    title: "",
    url: "",
    error: ""
  });
  
  const doSearch = () => {
    API.searchTerms(wiki.search)
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
  }
  const handleFormSubmit = event => {
    event.preventDefault();
    if (!wiki.search) {
      return;
    }
    doSearch();
  };

  const handleInputChange = event => {
    setWiki({...wiki, search: event.target.value });
  };
  useEffect(() => {
    document.title = "Wikipedia Searcher";

    doSearch();
  }, []);

  return(
  <div>
  <Container style={{ minHeight: "100vh" }}>
    <h1 className="text-center">Search For Anything on Wikipedia</h1>
    <Alert type="danger" style={{ opacity: wiki.error ? 1 : 0, marginBottom: 10 }}>
      {wiki.error}
    </Alert>
    <SearchForm
      handleFormSubmit={handleFormSubmit}
      handleInputChange={handleInputChange}
      results={wiki.search}
    />
    <SearchResults
      title={wiki.title}
      url={wiki.url}
    />
  </Container>
      </div >
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

//     API.searchTerms(wiki.search)
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
//     if (!wiki.search) {
//       return;
//     }
//     API.searchTerms(wiki.search)
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
//             results={wiki.search}
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
