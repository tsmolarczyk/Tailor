import css from './FourPictures.module.css';
const FourPictures = () => {
  return (
    <div className={css.container}>
      <img className={css.fourth} src='./assets/images/4.png' />
      <img className={css.third} src='./assets/images/3.png' />
      <img className={css.second} src='./assets/images/2.png' />
      <img className={css.first} src='./assets/images/1.png' />
    </div>
  );
};

export { FourPictures };
