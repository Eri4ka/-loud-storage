import LoaderIc from '@/images/loader.svg';

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <LoaderIc />
    </div>
  );
};

export default Loader;
