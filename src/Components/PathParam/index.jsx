import React from 'react';

export default class PathParam extends React.Component {
  render() {
    const id = this.props.match.params.id;
    const name = this.props.match.params.name;
    return (
      <h1>{`id:${id} name:${name}`}</h1>
    );
  }
}
