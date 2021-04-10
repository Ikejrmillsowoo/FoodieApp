import React, { Component } from "react";
import GetData from "../FetchResults";
import SearchItems from "../searchItems";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      location: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleChange(e) {
    const name = e.target;
    const value = name.value;
    this.setState({
      [e.target.name]: value,
    });

    console.log(value);
  }

  formSubmit(e) {
    alert(`submitted ${this.state.term} and ${this.state.location}`);
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
        <SearchItems onChange={this.handleChange} onSubmit={this.formSubmit} />
        <GetData
          term={this.state.term}
          location={this.state.location}
          onSubmit={this.formSubmit}
        />
      </div>
    );
  }
}

export default Main;
