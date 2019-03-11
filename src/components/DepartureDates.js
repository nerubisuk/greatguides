/**
 * @file Holds the <DepartureDates> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React, { useState } from 'react';
import dateFns from 'date-fns';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import styles from 'styles/components/DepartureDates.module.scss';

/* Component definition */
const DepartureDates = ({ dates }) => {
  /**
   * State hooks declaration
   * @see {@link https://reactjs.org/docs/hooks-state.html|State Hook}
   */
  const [isCalendar, toggleCalendar] = useState(false);
  const [currentCalendar, setCurrentCalendar] = useState(null);

  /**
   * Groups dates array by month
   * @returns {array}
   */
  function groupDates() {
    const groupedDates = [];

    const result = dates.reduce((acc, item) => {
      /* E.g.: January 2019 */
      const date = dateFns.format(item, 'MMMM YYYY');

      if (acc[date]) {
        acc[date].push(item);
      } else {
        acc[date] = [item];
      }

      return acc;
    }, {});

    for (const key in result) {
      if (result.hasOwnProperty(key)) {
        groupedDates.push({
          month: key.split(' ')[0],
          year: key.split(' ')[1],
          dates: result[key],
        });
      }
    }

    return groupedDates;
  }

  /**
   * Generates calendar UI based on hovered dates block
   * and displays calendar on the page
   * @param {number} index of dates block
   */
  function generateCalendar(index) {
    const calendar = groupDates()[index];

    setCurrentCalendar(calendar);

    toggleCalendar(true);
  }

  /* Renders dates blocks */
  function renderDates() {
    /* Takes grouped dates */
    const groupedDates = groupDates();

    /* Returns markup */
    return groupedDates.map((item, index) => (
      <div
        onMouseEnter={() => generateCalendar(index)}
        onMouseLeave={() => toggleCalendar(false)}
        key={index}
        className={styles.date}
      >
        <p>
          <span>
            {item.month.substring(0, 3)} {item.year}
          </span>
          <span>{item.dates.length} dates</span>
        </p>
      </div>
    ));
  }

  /**
   * Checks booking availability
   * @param  {object} date
   * @return {string} class name
   */
  function checkBookAvailable(date) {
    if (currentCalendar)
      return currentCalendar.dates.some(d => dateFns.isSameDay(d, date)) ? styles.available : '';
  }

  /* Renders calendar UI */
  function renderCalendar() {
    /* Initializers */
    const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      daysOfMonth = [],
      currentDate = currentCalendar ? currentCalendar.dates[0] : null,
      monthStart = dateFns.startOfMonth(currentDate),
      monthEnd = dateFns.endOfMonth(monthStart),
      endDate = dateFns.endOfWeek(monthEnd);

    let startDate = dateFns.startOfWeek(monthStart);

    /**
     * Calculates all days in month of given date
     * and generates markup
     */
    while (startDate <= endDate) {
      const isBookAvailable = checkBookAvailable(startDate);

      /* Hides dates out of the current month */
      const isHidden = !dateFns.isSameMonth(startDate, monthStart) ? styles.hidden : '';

      /* Formats to days number */
      const formattedDay = dateFns.format(startDate, 'D');

      /* Sets classname for day item */
      const className = [isHidden, isBookAvailable].join(' ');

      /* Pushes final markup to array */
      daysOfMonth.push(
        <li className={className} key={startDate + isHidden}>
          {formattedDay}
        </li>
      );

      /* Restarts loop */
      startDate = dateFns.addDays(startDate, 1);
    }

    /* Renders markup */
    if (isCalendar)
      return (
        <div className={styles.calendar}>
          <h3>
            {currentCalendar.month} {currentCalendar.year}
          </h3>

          <ul className={styles.daysOfWeek}>
            {daysOfWeek.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <ul className={styles.daysOfMonth}>{daysOfMonth}</ul>
        </div>
      );
  }

  if (!dates.length) return 'Loading...';

  /* Basic component's markup */
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

      <div className={styles.slider}>{renderDates()}</div>

      {renderCalendar()}
    </div>
  );
};

/* Prop types definition */
DepartureDates.propTypes = {
  dates: PropTypes.array.isRequired,
};

export default DepartureDates;
