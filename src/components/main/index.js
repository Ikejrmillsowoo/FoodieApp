import React, { Component } from "react";
import NewData from "../FetchResults";
import SearchItems from "../searchItems";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      term: "food",
      location: "19702",
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e, term, location) {
    this.setState({
      isLoading: false,
      term: term,
      location: location,
    });

    e.preventDefault();
  }

  render() {
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
        <NewData
          term={this.state.term}
          location={this.state.location}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default Main;
