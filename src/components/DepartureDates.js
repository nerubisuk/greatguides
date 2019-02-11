import React from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import styles from "styles/components/DepartureDates.module.scss";

class DepartureDates extends React.Component {
  render() {
    const { dates } = this.props;

    return (
      <div className={styles.wrapper}>
        <header>
          <h3>Dates of departure</h3>

          <div className={styles.controls}>
            <button>
              <Icon name='arrow-left' />
            </button>
            <button>
              <Icon name='arrow-right' />
            </button>
          </div>
        </header>

        <div className={styles.slider}>
          {dates.map((item, index) => (
            <div key={index} className={styles.date}>
              <p>
                {item.month}
                <span>{item.year}</span>
                <span>{item.dates} dates</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

DepartureDates.propTypes = {
  dates: PropTypes.array.isRequired,
};

export default DepartureDates;
