import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 1 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const {
      current: { clientHeight }
    } = this.imageRef;

    this.setState({ spans: Math.ceil(clientHeight / 10) });
  };

  render() {
    const { image } = this.props;
    const { spans } = this.state;
    const { description, id, urls } = image;

    return (
      <div style={{ gridRowEnd: `span ${spans}` }}>
        <img
          ref={this.imageRef}
          key={id}
          src={urls.regular}
          alt={description}
        />
      </div>
    );
  }
}

export default ImageCard;
