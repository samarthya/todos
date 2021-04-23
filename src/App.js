import React from 'react';
import './App.css';
import Header from './Header';
import Items from './Items';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          text: "First Todo",
          done: false,
        },
        {
          text: "Second Todo",
          done: true,
        },
      ]
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
  }

  toggleTodo(index) {
    let items = this.state.items.slice();

    let item = items[index];
    item.done = !item.done;

    this.setState({
      items: items,
    });
  }


  handleChange(event) {
    this.setState({ newItemValue: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();

    let items = this.state.items.slice()

    items.push({
      text: this.state.newItemValue,
      done: false,
    })

    this.setState({
      newItemValue: '',
      items: items
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newItemValue} placeholder="New Todo....." onChange={this.handleChange} />
          <input type="submit" value=" Add Item" />
        </form>

        <ol>
          {this.state.items.map((item, index) => (
            <Items
              key={index}
              clickHandler={() => this.toggleTodo(index)}
              done={item.done}
              text={item.text} />
          ))}
        </ol>
      </div >
    );
  }
}

export default App;
