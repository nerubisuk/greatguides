import React from 'react';
import Icon from 'components/Icon';
import styles from 'styles/components/PhotoSlider.module.scss';

class PhotoSlider extends React.Component {
  state = {
    current: 0
  } 

  handleClickNext = () => {
    let current = this.state.current + 1,
      photos = this.props.photos;

    if (current === photos.length) {
      current = 0;
    }

    this.setState({
      current
    })
  }


  handleClickPrev = () => {
    let current = this.state.current - 1,
      photos = this.props.photos;

    if (current < 0) {
      current = photos.length - 1;
    }

    this.setState({
      current
    })
  }

  render() {
    const { current } = this.state,
      { photos } = this.props;

    return <div className={styles.wrapper}>
      <div className={styles.controls}>
        <button onClick={this.handleClickPrev}><Icon name="arrow-left" /></button>
        <button onClick={this.handleClickNext}><Icon name="arrow-right" /></button>
      </div>

      <div className={styles.info}>
        <div className={styles.count}>
          <Icon name="image" />
          {photos.length} Photos
        </div>
        <div className={styles.like}>
          <Icon name="heart" />
        </div>
      </div>

      <img src={photos[current]} alt="adventure" />
    </div>
  }
}

export default PhotoSlider;