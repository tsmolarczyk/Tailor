import css from './Description.module.css';
import { GetStartedBtn } from './WelcomeSection/GetStartedBtn';

const Description = () => {
  return (
    <div className={css.container}>
      <p className={css.color}>Tailor's Benefits</p>
      <h2 className={css.subtitle}>Co Zyskasz Jako Krawiec</h2>
      <GetStartedBtn />
    </div>
  );
};

export { Description };
