import React, {Component} from 'react';
import { v4 } from 'uuid'
import './App.css';
import AddColorForm from "./components/AddColorForm";
import ColorList from "./components/ColorList";

class App extends Component {
  state = {
    colors: [
      {
        "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
        "title": "ocean at dusk",
        "color": "#00c4e2",
        "rating": 5
      },
      {
        "id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
        "title": "lawn",
        "color": "#26ac56",
        "rating": 3
      },
      {
        "id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
        "title": "bright red",
        "color": "#ff0000",
        "rating": 0
      }
    ]
  };

  addColor = (title, color) => {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ];
    this.setState({colors})
  };


  rateColor = (id, rating) => {
    const colors = this.state.colors.map(color =>
          (color.id !== id) ?
                color :
                {
                  ...color,
                  rating
                }
    );
    this.setState({colors})
  };

  removeColor = (id) => {
    const colors = this.state.colors.filter(
          color => color.id !== id
    );
    this.setState({colors})
  };

  render() {

    const {colors} = this.state;
    return (
          <div className="app">
            <AddColorForm onNewColor={this.addColor}/>
            <ColorList colors={colors}
                       onRate={this.rateColor}
                       onRemove={this.removeColor}/>
          </div>
    )
  }
}

export default App;