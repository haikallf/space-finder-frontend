import React, { Component } from "react";
import "./ConfirmModalComponents.css";

interface ConfirmModalComponentsProps {
  show: boolean;
  content: string;
  close: () => void;
}

export class ConfirmModalComponents extends Component<ConfirmModalComponentsProps> {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal-content">
          <h2>You tried to reserve and ...</h2>
          <h3 className="modalText">{this.props.content}</h3>
          <button onClick={() => this.props.close()}>Close</button>
        </div>
      </div>
    );
  }
}
