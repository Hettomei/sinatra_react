var Counter = React.createClass({

  getInitialState: function() {
    return {counter: this.props.start_at};
  },

  add: function(i){
    this.setState({counter: this.state.counter + i})
    this.props.onClickCounter();
  },

  render: function() {
    return (
      <div>
        <button onClick={this.add.bind(null, -1)}>-</button>
        <span>{this.state.counter}</span>
        <button onClick={this.add.bind(null, 1)}>+</button>
      </div>
    );
  }
});

var IncBox = React.createClass({

  getInitialState: function() {
    return {total: this.props.total};
  },

  onClickCounter: function(){
    this.setState({total: this.state.total + 1});
  },

  render: function() {
    var that = this
    var counterNodes = this.props.counters.map(function (start_at) {
      return (<p> <Counter start_at={start_at} onClickCounter={that.onClickCounter} /> </p>);
    });

    return (
      <div>
        { counterNodes }
        <h2>Total</h2>
        <p>{this.state.total}</p>
      </div>
    );
  }
});

React.render(<IncBox counters={[0, 5, 0,]} total={12}/>, document.getElementById('content'));
