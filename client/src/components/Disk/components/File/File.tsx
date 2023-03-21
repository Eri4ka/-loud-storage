import FolderIc from '@/images/folder.svg';

import styles from './File.module.scss';

const File = () => {
  return (
    <li className={styles.file}>
      <div className={styles.file__icon}>
        <FolderIc />
      </div>
      <div className={styles.file__name}>Hoo</div>
      <div className={styles.file__date}>Hoo</div>
      <div className={styles.file__size}>5gb</div>
    </li>
  );
};

export default File;
