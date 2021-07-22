import React, { Component } from "react";
import SearchItems from "../searchItems";
import NewData from "../FetchResults";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      term: "food",
      location: "19702",
      data: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e, term, location) {
    //console.log(term, location);

    const newSearchTerms = {
      term: term ? term : this.state.term,
      location: location ? location : this.state.location,
    };

    // const response = fetch("http://localhost:8888", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(newSearchTerms),
    // }).then((response) => {
    //   //console.log(response.json());
    //   return response.json();
    // });
    async function loadData() {
      const response = await fetch("http://localhost:8888", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSearchTerms),
      });
      const dataResponse = await response.json();
      return dataResponse;
    }
    //console.log(data);
    const newDataResponse = loadData();

    this.setState({
      isLoading: false,
      term: term,
      location: location,
      data: newDataResponse,
    });

    e.preventDefault();
  }

  render() {
    console.log(this.state.data);
    return (
      <div
        className="main_page"
        style={{
          backgroundImage: 'url("/assets/images/background.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <SearchItems onChange={this.handleChange} onSubmit={this.onSubmit} />
        <NewData isLoading={this.state.isLoading} data={this.state.data} />
      </div>
    );
  }
}

export default Main;
