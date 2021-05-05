import React, { useEffect, useContext } from "react";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";
import API from "../../utils/API";

import WikiContext from "../../utils/WikiContext";

function Search() {
  // const [search, setSearch] = useState("Wikipedia");
  // const [title, setTitle] = useState("");
  // const [url, setUrl] = useState("");
  // const [error, setError] = useState("");
  // const [wiki, setWiki] = useState({
  //   search: "Wikipedia",
  //   title: "",
  //   url: "",
  //   error: ""
  // });
  const wiki = useContext(WikiContext);
  const {setWiki} = wiki;

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {
    document.title = "Wikipedia Searcher";

    if (!wiki.search) {
      return;
    }

    API.searchTerms(wiki.search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        // setTitle(res.data[1][0]);
        // setUrl(res.data[3][0]);
        // copy, process, setstate
        setWiki({ ...wiki, title: res.data[1][0], url: res.data[3][0]})
      })
      // copy, process, setstate
      .catch(err => setWiki({ ...wiki, error: err}));
  }, [wiki.search]);

  const handleInputChange = event => {
    // copy, process, setstate
    setWiki({ ...wiki, search: event.target.value });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };
  return (
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
        <SearchResults title={wiki.title} url={wiki.url} />
      </Container>
    </div>
  );
}

export default Search;
