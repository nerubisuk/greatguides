import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/components/CarryThings.module.scss';
import Icon from 'components/Icon';

class CarryThings extends React.Component {
  state = {
    maxItems: 6,
  };

  sliceCarry = (carry, end) => {
    return carry.slice(0, end);
  };

  handleExtend = () => {
    const maxItems = this.props.carry.length;

    this.setState({
      maxItems,
    });
  };

  isExtended = () => {
    return this.state.maxItems === this.props.carry.length;
  };

  render() {
    const { carry } = this.props,
      { maxItems } = this.state;

    return (
      <div className={styles.wrapper}>
        <h3>Things to carry</h3>
        <ul>
          {this.sliceCarry(carry, maxItems).map((item, index) => (
            <li key={index}>
              <Icon name='tick' />
              {item}
            </li>
          ))}
        </ul>
        {!this.isExtended() && <button onClick={this.handleExtend}>Read more</button>}
      </div>
    );
  }
}

CarryThings.propTypes = {
  carry: PropTypes.array.isRequired,
};

export default CarryThings;
