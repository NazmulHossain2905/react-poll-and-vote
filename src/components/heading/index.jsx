import React from "react";

class Heading extends React.Component {
  render() {
    const { children, element = "h1", size, color, className } = this.props;

    if (element === "h1") {
      return (
        <h1 className={className} style={{ color, fontSize: size }}>
          {children}
        </h1>
      );
    } else if (element === "h2") {
      return (
        <h2 className={className} style={{ color, fontSize: size }}>
          {children}
        </h2>
      );
    } else if (element === "h3") {
      return (
        <h3 className={className} style={{ color, fontSize: size }}>
          {children}
        </h3>
      );
    } else if (element === "h4") {
      return (
        <h4 className={className} style={{ color, fontSize: size }}>
          {children}
        </h4>
      );
    } else if (element === "h5") {
      return (
        <h5 className={className} style={{ color, fontSize: size }}>
          {children}
        </h5>
      );
    } else if (element === "h6") {
      return (
        <h6 className={className} style={{ color, fontSize: size }}>
          {children}
        </h6>
      );
    }
  }
}

export default Heading;
