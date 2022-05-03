import { Header } from './Header';
import { WelcomeText } from './WelcomeText';
import css from './WelcomeSection.module.css';

const WelcomeSection = () => {
  return (
    <div className={css.section}>
      <Header />
      <div className={css.content}>
        <div className={css.text}>
          <WelcomeText />
        </div>
        <div className={css.graphics}>
          <img className={css.image} src='./assets/images/woman.png' />
          <div className={css.background}></div>
          <div className={css.dots} src='./assets/images'></div>
        </div>
      </div>
    </div>
  );
};

export { WelcomeSection };
