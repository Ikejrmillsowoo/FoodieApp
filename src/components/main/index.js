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
  //console.log(state);
  return {
    users: state.users,
    searchItems: state.searchItems.searchItem,
    favorites: state.favorites.favorites,
  };
};

const mapDispatchToProps = {
  fetchData: () => fetchData(),
  // fetchUsers: () => fetchUsers(),
  // fetchFavorites: () => fetchFavorites(),
};

class Main extends Component {
  componentDidMount() {
    this.props.fetchData();
    // this.props.fetchUsers();
    // this.props.fetchFavorites();
  }
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      //   isLoading: true,
      term: this.props.searchItems.term,
      location: this.props.searchItems.location,
      //   firstname: this.props.searchItems.firstname,
      //   lastname: this.props.searchItems.lastname,
      //   username: this.props.searchItems.username,
      //   password: this.props.searchItems.password,
      //   data: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e, term, location, firstname, lastname, username, password) {
    //get input information from form!
    e.preventDefault();
    this.setState({
      term: term,
      location: location,
      //   firstname: firstname,
      //   lastname: lastname,
      //   username: username,
      //   password: password,
    });

    console.log(this.state);
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
          firstname={this.props.userInfo.firstname}
          lastname={this.props.userInfo.lastname}
          username={this.props.userInfo.username}
          password={this.props.userInfo.password}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
