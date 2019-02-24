var Search = (props) => (
  <div className="search-bar form-inline">
    <input id="search" className="form-control" type="text" onChange={function(e) {
      props.componentDidMount(document.getElementById('search').value);
    }}/>
    <button className="btn hidden-sm-down" onClick={function() {
      props.componentDidMount(document.getElementById('search').value);
    }}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
