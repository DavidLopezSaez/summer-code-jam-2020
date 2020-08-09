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
		this.state = {response: []};
  }
  
	componentDidMount() {
		axios
			.get(`http://localhost:8000/api/v1.0/search/?query=${this.props.query}&page=1`)
			.then((response) => {
        response = [
          {
              "id": "5GViT37xTNoJ",
              "title": "Dog Breeds - Types Of Dogs - American Kennel Club",
              "htmlTitle": "<b>Dog</b> Breeds - Types Of <b>Dogs</b> - American Kennel Club",
              "link": "https://www.akc.org/dog-breeds/",
              "snippet": "What's a dog breed? People have been breeding dogs since prehistoric times. \nThe earliest dog breeders used wolves to create domestic dogs. From the ..."
          },
          {
            "id": "5GViT37xTNoJ",
            "title": "Dog Breeds - Types Of Dogs - American Kennel Club",
            "htmlTitle": "<b>Dog</b> Breeds - Types Of <b>Dogs</b> - American Kennel Club",
            "link": "https://www.akc.org/dog-breeds/",
            "snippet": "What's a dog breed? People have been breeding dogs since prehistoric times. \nThe earliest dog breeders used wolves to create domestic dogs. From the ..."
        }
      ]
      this.setState({response: response});
      });
	}

	render() {
		return (
			<div>
				<div>
          {
          this.state.response.map((result)=>{
            return <Card title={{__html: result.htmlTitle}}
            description={{__html: result.snippet}}
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
