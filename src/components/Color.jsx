import React, {Component} from 'react';
import StarRating from "./StarRating";
import PropTypes from 'prop-types';

// const Color = ({title, color, rating = 0, onRemove = f => f, onRate = f => f}) =>
//       <section className="color">
//         <h1>{title}</h1>
//         <button onClick={onRemove}>X</button>
//         <div className="color"
//              style={{backgroundColor: color}}>
//         </div>
//         <div>
//           <StarRating starsSelected={rating} onRate={onRate}/>
//         </div>
//       </section>;
//
// export default Color;

class Color extends Component {
  componentWillMount() {
    this.style = {backgroundColor: "#CCC"}
  }

  shouldComponentUpdate(nextProps) {
    const { rating } = this.props;
    return rating !== nextProps.rating
  }


  componentWillUpdate() {
    this.style = null
  }


  componentDidUpdate(prevProps) {
    const { title, rating } = this.props;
    const status = (rating > prevProps.rating) ? 'better' : 'worse';
    console.log(`${title} is getting ${status}`)
  }

  render() {
    const {title, rating, color, onRate} = this.props;
    return (
          <section className="color" style={this.style}>
            <h1 ref="title">{title}</h1>
            <div className="color"
                 style={{backgroundColor: color}}>
            </div>
            <StarRating starsSelected={rating}
                        onRate={onRate}/>
          </section>
    )

  }
}

Color.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
  color: PropTypes.string,
  onRate: PropTypes.func
};
Color.defaultProps = {
  title: undefined,
  rating: 0,
  color: "#000000",
  onRate: f => f
};

export default Color;