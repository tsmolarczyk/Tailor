import css from './GetStartedBtn.module.css';

const GetStartedBtn = () => {
  return (
    <button className={css.wrapper}>
      <p className={css.text}>Get Started</p>
      <div className={css.right}>
        <img
          className={css.arrow}
          src='./assets/images/arrow-right.png'
          alt='arrow-icon-in-get-started-button'
        />
      </div>
    </button>
  );
};

export { GetStartedBtn };
