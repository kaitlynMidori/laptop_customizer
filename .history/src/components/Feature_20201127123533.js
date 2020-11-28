import React, { Component } from "react";
import Display from "../Display/Display";
import OperatingSystem from "../OperatingSystem/OperatingSystem";
import Processor from "../Processor/Processor";
import VideoCard from "../VideoCard/VideoCard";

class Customize extends Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Processor />
        <OperatingSystem />
        <VideoCard />
        <Display />
      </form>
    );
  }
}

export default Customize;