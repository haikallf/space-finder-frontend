import React, { Component } from "react";
import genericImage from "../../assets/generic-image.jpg";

interface SpaceComponentPops {
  spaceId: string;
  name: string;
  location: string;
  photoUrl?: string;
  reserveSpace: (spaceId: string) => void;
}

export class SpaceComponent extends Component<SpaceComponentPops> {
  private renderImage() {
    if (this.props.photoUrl) {
      return <img src={this.props.photoUrl} alt="a" />;
    } else {
      return <img src={genericImage} alt="a" />;
    }
  }
  render() {
    return (
      <div>
        {this.renderImage()}
        <label>{this.props.name}</label>
        <br />
        <label>{this.props.spaceId}</label>
        <br />
        <label>{this.props.location}</label>
        <br />
        <button onClick={() => this.props.reserveSpace(this.props.spaceId)}>
          Reserve
        </button>
      </div>
    );
  }
}
