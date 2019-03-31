import React from "react";
import { connect } from "react-redux";
import { fetchAllStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchAllStreams();
  }

  renderList() {
    return this.props.streamList.map(element => {
      return (
        <div key={element.id} className="streamItem">
          <p>id: {element.id}</p>
          <p>title: {element.title}</p>
          <p>description: {element.description}</p>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.streamList);
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    streamList: Object.values(state.streams) //converts object into an array
  };
};
export default connect(
  mapStateToProps,
  { fetchAllStreams }
)(StreamList);
