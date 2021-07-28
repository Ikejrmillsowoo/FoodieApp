import React, { Component } from "react";
import SearchItems from "../searchItems";
import NewData from "../FetchResults";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      term: "food",
      location: "19146",
      data: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e, term, location) {
    //get input information from form!
    e.preventDefault();
    this.setState({
      term: term,
      location: location,
    });
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
        <NewData term={this.state.term} location={this.state.location} />
      </div>
    );
  }
}

export default Main;
