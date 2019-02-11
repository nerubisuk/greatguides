import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import styles from 'styles/components/TourDescription.module.scss';

const renderFormattedText = (text) => {
  return text.replace(/\n/g, '<br />');
};

const renderSpecs = (specs) => 
  Object.keys(specs).map((key, index) => 
    <div className={styles.specs_items} key={index}>
      <Icon name={key} />
      <p>{key.replace(/_/g, ' ').toUpperCase()}</p>
      <span>{specs[key]}</span>
    </div>
  );

class TourDescription extends React.Component {
  state = {
    isExtended: false
  }

  handleExtendDescription = () => {
    this.setState({
      isExtended: true
    });
  }

  render() {
    const { description } = this.props,
      { isExtended } = this.state;

    return <div className={styles.wrapper}>
      <h3>Tour Description</h3>
      <p 
        className={isExtended ? styles.extended : ''}
        dangerouslySetInnerHTML={{__html: renderFormattedText(description.preface)}} 
      />
      {
        !isExtended 
        && <button onClick={this.handleExtendDescription}>Read more</button>
      }

      <div className={styles.specs}>
        {renderSpecs(description.specs)}
      </div>
    </div>;
  }
}

TourDescription.propTypes = {
  description: PropTypes.object.isRequired
};

export default TourDescription;