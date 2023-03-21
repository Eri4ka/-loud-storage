import File from '../File';

import styles from './FileList.module.scss';

const FileList = () => {
  return (
    <div className={styles.filelist}>
      <div className={styles.filelist__header}>
        <div className={styles.filelist__name}>Название</div>
        <div className={styles.filelist__date}>Дата</div>
        <div className={styles.filelist__size}>Размер</div>
      </div>
      <ul>
        <File />
        <File />
      </ul>
    </div>
  );
};

export default FileList;
