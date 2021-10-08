import React from "react";
import CardList from "./component/CardList";
import SearchBox from "./component/SearchBox";
import { Component } from "react";
import "./App.css";
import Scroll from "./component/Scroll";
import ErrorBoundry from "./component/ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => {
        return Response.json();
      })
      .then((user) => {
        this.setState({ robots: user });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredrobots = this.state.robots.filter((robots) => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredrobots} />;
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}
export default App;
