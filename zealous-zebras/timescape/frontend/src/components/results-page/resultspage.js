import React, { Component } from "react";
import Card from "./card";
import Navigation from "./nav";
import axios from "axios";

let current_year = "1998";

// Imports the correct style sheet.
(async () => {
  await import(`./styling/${current_year}.css`);
})();

class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { response: [] };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8000/api/v1.0/search/?query=${this.props.query}&page=1`)
      .then((response) => {
        console.log(response);
        this.setState({ response: response.data });
      });
  }

  render() {
    return (
      <div>
        <div>
          {
            this.state.response.map((result) => {
              return <Card title={{ __html: result.htmlTitle }}
                description={{ __html: result.snippet }}
                link={result.link}
              />
            })}
        </div>
        <Navigation />
      </div>
    );
  }
}

export default ResultsPage;
