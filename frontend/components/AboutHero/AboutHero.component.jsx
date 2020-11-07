import React from 'react';
import InfoSection from '../InfoSection/InfoSection.component';
import styles from './AboutHero.module.scss';

export default function AboutHero() {
  return (
    <div className={styles.about_hero}>
      <InfoSection title="whoam" highlight="i">
        <h2 className={styles.who_am_i}>
          I'm a Computer Science student at the University of St Andrews. I love solving technical challenges creatively and tackling artistic challenges industrially.
          <br /><br />
          Most people think think you're either creative or technical, artist or engineer - but I'd disagree. The hardest problems usually require the most out of the box solution.
          <br /> <br />
          Don't choose, be both.
        </h2>
      </InfoSection>
      <InfoSection title="whative" highlight="done">
        <div className={styles.what_ive_done}>
          <div>
            <h2>Learn to Love Digital</h2>
            <p>Augmented Reality Engineer - Remote</p>
            <p className={styles.description}>
              Learn to Love Digital are an innovation lab that enable businesses with the ability to expand into the digital space. Working at L2LD, I design and build Augmented Reality Experiences for mobile applications.
            </p>
          </div>
          <div>
            <h2>Gearset</h2>
            <p>Intern Software Engineer - Remote</p>
            <p className={styles.description}>
              Gearset provide one of the best devops tools for Salesforce. At Gearset, I worked on implementing and maintaining features, as well as talking directly to customers to fix bugs and solve their issues. I also contributed to roadmap meetings, and teamed up with another intern to build a feature from scratch.
            </p>
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
