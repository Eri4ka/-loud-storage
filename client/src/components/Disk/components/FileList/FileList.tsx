import { useAppSelector } from '@/redux/hooks';
import { getFiles } from '@/redux/selectors/filesSelectors';

import File from '../File';

import styles from './FileList.module.scss';

const FileList = () => {
  const files = useAppSelector(getFiles);
  console.log(files);

  return (
    <div className={styles.filelist}>
      <div className={styles.filelist__header}>
        <div className={styles.filelist__name}>Название</div>
        <div className={styles.filelist__date}>Дата</div>
        <div className={styles.filelist__size}>Размер</div>
      </div>
      <ul>
        {files?.map((file) => (
          <File key={file._id} file={file} />
        ))}
      </ul>
    </div>
  );
};

export default FileList;
