import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       Clear navigation and simple instructions so you can find answers quickly without confusion.
      </>
    ),
  },
  {
    title: 'User-Friendly Interface',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      Designed with an intuitive layout that makes learning smooth, even for first-time users.
      </>
    ),
  },
  {
    title: 'Step-by-Step Guidance',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Practical examples and visuals to walk you through every process with ease.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
