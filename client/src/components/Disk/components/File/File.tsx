import { FC } from 'react';

import { FileType } from '@/types/fileTypes';
import FolderIc from '@/images/folder.svg';

import styles from './File.module.scss';

type FileProps = {
  file: FileType;
};

const File: FC<FileProps> = ({ file }) => {
  const { name, type, size, date } = file;

  return (
    <li className={styles.file}>
      <div className={styles.file__icon}>
        <FolderIc />
      </div>
      <div className={styles.file__name}>{name}</div>
      <div className={styles.file__date}>{date}</div>
      <div className={styles.file__size}>{size}</div>
    </li>
  );
};

export default File;
