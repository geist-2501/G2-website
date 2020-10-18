import React from 'react';
import InfoSection from '../InfoSection/InfoSection.component';
import styles from './AboutHero.module.scss';

export default function AboutHero() {
  return (
    <div className={styles.about_hero}>
      <InfoSection title="whoam" highlight="i">
        <h2 className={styles.who_am_i}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient id elit egestas nibh quam nulla amet, tortor. Vitae, tellus bibendum non nec fermentum egestas feugiat quisque amet. Orci, praesent eget sollicitudin lacinia euismod. Quis enim pulvinar euismod velit sed mauris, euismod.</h2>
      </InfoSection>
      <InfoSection title="whative" highlight="done">
        <div className={styles.what_ive_done}>
          <div>
            <h2>Learn to Love Digital</h2>
            <p>Augmented Reality Engineer - Remote</p>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius vestibulum sapien turpis sed volutpat pellentesque sollicitudin et eros. Ipsum consectetur blandit vestibulum placerat nec.</p>
          </div>
          <div>
            <h2>Gearset</h2>
            <p>Intern Software Engineer - Remote</p>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius vestibulum sapien turpis sed volutpat pellentesque sollicitudin et eros. Ipsum consectetur blandit vestibulum placerat nec.</p>
          </div>
        </div>
      </InfoSection>
      <InfoSection title="whati" highlight="do">
        <div className={styles.what_i_do}>
          <div>
            <p>Lang</p>
            <p className={styles.description}>
              C# <br />
              Java <br />
              Python <br />
              English <br />
              C <br />
              Prolog <br />
              Haskell <br />
              Javascript <br />
              CSS <br />
              Sass <br />
              HTML
            </p>
          </div>
          <div>
            <p>Frameworks</p>
            <p className={styles.description}>
              NUnit & NSubstitute <br />
              JUnit & Mockito <br />
              React JS <br />
              Next JS <br />
              Express JS <br />
            </p>
          </div>
          <div>
            <p>Software</p>
            <p className={styles.description}>
              Blender <br />
              Substance Suite <br />
              Jetbrains Suite <br />
              VSCode <br />
              Git, Github & Gitlab <br />
              Perforce <br />
              Unity
            </p>
          </div>
        </div>
      </InfoSection>
    </div>
  );
}
