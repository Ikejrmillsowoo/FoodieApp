import React, { Component } from "react";
import SearchItems from "../searchItems";
import NewData from "../FetchResults";

class Main extends Component {
  constructor(props) {
    super(props);
    console.log(props);
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

    // const newSearchTerms = {
    //   term: term ? term : this.state.term,
    //   location: location ? location : this.state.location,
    // };

    this.setState({
      isLoading: true,
      term: term,
      location: location,
      data: "",
    });

    // const response = fetch("http://localhost:8888", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(newSearchTerms),
    // }).then((response) => {
    //   //console.log(response.json());
    //   return response.json();
    // });

    // componentDidUpdate(prevProps) {
    //   const response = await fetch("http://localhost:8888", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(newSearchTerms),
    //   });
    //   const dataResponse = await response.json();
    //   //console.log(dataResponse);
    //   //return dataResponse;

    //   this.setState({
    //     isLoading: false,
    //     term: term,
    //     location: location,
    //     data: dataResponse,
    //   });
    // }
    //console.log(loadData());
    //   console.log(dataResponse);
    //   const newData = loadData();
    // const newDataResponse = await dataResponse;
    //}

    // const newDataResponse = newData;

    // this.setState({

    //   isLoading: false,
    //   term: term,
    //   location: location,
    //   data: newData,
    // });
    // console.log(newData);
    e.preventDefault();
  }

  async componentDidUpdate(prevProps) {
    const newSearchTerms = {
      term: this.props.term,
      location: this.props.location,
    };
    if (
      this.state.term !== prevProps.term ||
      this.state.location !== prevProps.location
    ) {
      const response = await fetch("http://localhost:8888", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSearchTerms),
      });
      const dataResponse = await response.json();
      console.log(dataResponse);
      //return dataResponse;

      this.setState({
        isLoading: false,
        term: this.props.term,
        location: this.props.location,
        data: dataResponse,
      });
    }
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
