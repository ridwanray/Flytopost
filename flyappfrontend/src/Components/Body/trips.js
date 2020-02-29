import React from 'react';

class Trips extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: '', hits: [] };
  }
  onChange = event => {
    this.setState({ query: event.target.value });
  };
  onSearch = event => {
    event.preventDefault();
    const { query } = this.state;
    if (query === '') {
      return;
    }
    fetch('https://127.0.0.1:8000/package/' + query)
      .then(response => response.json())
      .then(result => this.onSetResult(result, query));
  };
  onSetResult = (result, key) => {
    this.setState({ hits: result.hits });
  };

  render() {
    return (
      <div>
        <h1>Search for peaple travelling</h1>
        {/* Search Input */}
        <form onSubmit={this.onSearch}>
          <input type="text" onChange={this.onChange} />
          <button type="submit">Search</button>
        </form>
        {/* Result */}
        {this.state.hits.map(item => (
          <div key={item.objectID}>{item.title}</div>
        ))}
      </div>
    );
  }
}
export default Trips;