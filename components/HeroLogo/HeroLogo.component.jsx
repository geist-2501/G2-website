import React from 'react';
import anime from 'animejs';
import styles from './HeroLogo.module.scss';

export default class HeroLogo extends React.Component {

  constructor(props) {
    super(props);

    this.anim = {
      distance: '3em',
      delay: 600,
    };
  }

  componentDidMount() {
    this.current = [
      anime({
        targets: '#anim-in-stay',
        translateY: this.anim.distance,
        opacity: 1,
        delay: this.anim.delay,
      }),
      anime({
        targets: '#anim-move-stay',
        translateY: this.anim.distance,
        delay: this.anim.delay,
      }),
      anime({
        targets: '#anim-out',
        translateY: this.anim.distance,
        opacity: 0,
        delay: this.anim.delay,
      })];
  }

  render() {
    return (
      <div className={styles.hero_text}>
        <div className={styles.text_l} id="anim-in-stay">
          <h1>Technical</h1>
        </div>
        <div />
        <div className={styles.text_l} id="anim-move-stay">
          <h1>Creative</h1>
          <div className={styles.dash} />
        </div>
        <div className={styles.text_r}>
          <h1>Artist</h1>
          <div className={styles.dash} />
        </div>
        <div className={styles.text_l} id="anim-out">
          <h1>Technical</h1>
        </div>
        <div className={styles.text_r}>
          <h1>Engineer</h1>
        </div>
      </div>
    );
  }
}
