import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.header}>
      <button className={css.company}>
        <img
          className={css.elipse}
          src='./assets/images/elipse125.png'
          alt='elipse-logo-company'
        />
        <p>twój krawiec</p>
      </button>
      <div className={css.buttons}>
        <div className={css.normal}>
          <button className={css.normal}>o nas</button>
          <button className={css.normal}>jak to działa</button>
        </div>
        <button className={css.login}>Zaloguj</button>
      </div>
    </div>
  );
};

export { Header };
