import React, { Component } from 'react';
import Card from './card';
import Navigation from './nav'

let current_year = '1998';

// Imports the correct style sheet.
(async () => {
  await import(`./styling/${current_year}.css`);
})();

class ResultsPage extends Component {
  render() {
    return (
      <div>
        <div>
          <Card
            title={{ __html: "<b>Hello world</b>, is what he said" }}
            description={{ __html: "What should I <b>put here</b>? Something about the <b>program</b> in question? Maybe." }}
            link="https://google.com/"
          />
          <Card
            title={{ __html: "<b>Hello world</b>, is what he said" }}
            description={{ __html: "What should I <b>put here</b>? Something about the <b>program</b> in question? Maybe.What should I <b>put here</b>? Something about the <b>program</b> in question? What should I <b>put here</b>? Something about the <b>program</b> in question? " }}
            link="https://google.com/"
          />
          <Card
            title={{ __html: "<b>Hello world</b>, is what he said" }}
            description={{ __html: "What should I <b>put here</b>? Something about the <b>program</b> in question? Maybe. What should I <b>put here</b>? Something about the <b>program</b> in question? " }}
            link="https://google.com/"
          />
        </div>
        <Navigation />
      </div>
    );
  }
}

export default ResultsPage;