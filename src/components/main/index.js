import React, { Component } from "react";
import SearchItems from "../searchItems";
import NewData from "../FetchResults";
import { connect } from "react-redux";
import {
  fetchData,
  fetchFavorites,
  fetchUsers,
} from "../../redux/ActionCreators";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.users,
    searchItems: state.searchItems.searchItem,
  };
};

const mapDispatchToProps = {
  fetchData: () => fetchData(),
  fetchUsers: () => fetchUsers(),
  fetchFavorites: () => fetchFavorites(),
};

class Main extends Component {
  componentDidMount() {
    this.props.fetchData();
    this.props.fetchUsers();
    this.props.fetchFavorites();
  }
  constructor(props) {
    super(props);
    console.log(props.searchItems.term);
    this.state = {
      isLoading: true,
      term: this.props.searchItems.term,
      location: this.props.searchItems.location,
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
