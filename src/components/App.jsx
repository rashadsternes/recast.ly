class App extends React.Component {
  constructor(props) {
    super(props);
    this.onTitleClick = this.onTitleClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // 'state' is just an object literal
    this.state = {
      data: exampleVideoData,
      current: exampleVideoData[0],
      query: ''
    };
  }

  componentDidMount(event) {
    // Here we make our ajax call with youtube search and set our state
    searchYouTube(
      {
        'key': window.YOUTUBE_API_KEY,
        'max': 5,
        'query': event || 'train'
      }, videoList => {
        this.setState( {
          data: videoList,
          current: videoList[0]
        });
      }
    );
  }

  onTitleClick (videoChild) {
    this.setState({ current: videoChild });
  }

  // handle search submit button
  handleSubmit (event) {
    this.setState({ query: event });
    console.log(`A search request ${event}, new state ${this.state.query}`);
  }

  render() {
    const {data} = this.state;
    return (
      <div>

        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em></em> <Search
              submit={this.handleSubmit}
              componentDidMount={this.componentDidMount}
            /> </h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em></em> <VideoPlayer
              video={this.state.current}/> </h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em></em> <VideoList
              videos={data} // this.state.data
              onTitleClick={this.onTitleClick}
            /></h5></div>
          </div>

        </div>

      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
