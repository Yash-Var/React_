class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Machine first="yash " second="yash" third="yash" />
        <Machine first="manvi" second="manvi" third="manvi" />
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Welcome />);
