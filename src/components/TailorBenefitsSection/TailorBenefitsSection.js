import css from './TailorBenefitsSection.module.css';
import { FourPictures } from '../FourPictures';
import { Description } from '../Description';

const TailorBenefitsSection = () => {
  return (
    <div className={css.container}>
      <FourPictures />
      <Description />
    </div>
  );
};

export { TailorBenefitsSection };
