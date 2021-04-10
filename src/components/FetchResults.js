import React, { Component } from "react";
import Submit from "./querySubmit";
import Results from "./results";
import { apiKey } from "./sourceData";

const term = "food";
const location = "19702";

class GetData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: "",
    };
  }

  // {
  //       id: "",
  //       name: "",
  //       image: "",
  //       is_closed: "",
  //       url: "",
  //       review_count: "",
  //       phone: "",
  //     }
  // update() {
  //   this.setState({
  //     term: this.props.term,
  //     location: this.props.location,
  //   });
  // }

  async componentDidMount() {
    console.log(this.props.term, this.props.location);
    const cors = "https://cors-anywhere.herokuapp.com/";
    const YelpURL = "https://api.yelp.com/v3/businesses/search";
    const response = await fetch(
      `${cors}${YelpURL}?term=${term}&location=${location}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const data = await response.json();

    this.setState({
      isLoading: false,
      data: data.businesses,
    });
  }

  render() {
    return (
      <div>
        <Results data={this.state.data} isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default GetData;
