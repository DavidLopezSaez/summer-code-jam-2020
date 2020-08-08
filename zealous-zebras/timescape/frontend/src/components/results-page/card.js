import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="crd col-11 col-lg-6 col-md-8 p-2">
        <a className="crd-title" href={this.props.link}>
          <span dangerouslySetInnerHTML={this.props.title} />
        </a>
        <p className="crd-text">
          <span dangerouslySetInnerHTML={this.props.description} />
        </p>
        <a className="crd-link" href={this.props.link}>{this.props.link}</a>
      </div>
    );
  }
}

export default Card;