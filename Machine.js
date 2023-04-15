class Machine extends React.Component {
  render() {
    const { first, second, third } = this.props;
    const name = first === second && second === third;
    return (
      <div>
        <p>
          {this.props.first}

          {this.props.second}

          {this.props.third}
        </p>
        <p>{name ? "winner" : "loser"}</p>
      </div>
    );
  }
}
