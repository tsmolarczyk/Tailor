import css from './WelcomeText.module.css';
import { GetStartedBtn } from './GetStartedBtn';

const WelcomeText = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Znajdź Swojego Krawca <br /> i Twórz Swoje Ubrania Łatwiej
      </h1>
      <p className={css.para}>
        Memudahkan kamu dalam membuat baju dengan aman, cepat, dan praktis
      </p>
      <GetStartedBtn />
    </div>
  );
};

export { WelcomeText };
