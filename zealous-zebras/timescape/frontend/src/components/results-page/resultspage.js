import React, { Component } from "react";
import Card from "./card";
import Navigation from "./nav";
import axios from "axios";

class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { response: [] };

    const current_year = this.props.year;
    var displayed_css = "2015-2020"

    if (current_year < 2004) {
      displayed_css = "1998-2004";
    } else if (current_year < 2011) {
      displayed_css = "2004-2011";
    } else if (current_year < 2015) {
      displayed_css = "2011-2015";
    } else {
      displayed_css = "2015-2020";
    }

    // Imports the correct style sheet.
    (async () => {
      console.log(displayed_css)
      await import(`./styling/${displayed_css}.css`);
    })();
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
