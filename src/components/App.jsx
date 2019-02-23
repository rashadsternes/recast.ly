// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em></em> <Search /> </h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em></em> <VideoPlayer video={exampleVideoData[0]}/> </h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em></em> <VideoList videos={exampleVideoData} /></h5></div>
//       </div>
//     </div>
//   </div>
// );

//class Welcome extends React.Component
class App extends React.Component {
  constructor(props) {
    super(props);

    // 'state' is just an object literal
    this.state = {
      current: exampleVideoData[0]
    };
    // this.playerState = {
    //   done: props.snipppet.title
    // };
  }

  onTitleClick() {
    this.setState({
      current: this
    });
  }

  render() {
    var vidChange = {
      fontWeight: this.state.done ?  "800" : "100"
    };

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em></em> <Search /> </h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em></em> <VideoPlayer video={this.state.current}/> </h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em></em> <VideoList
              videos={exampleVideoData}
              current={this.state.current}
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
