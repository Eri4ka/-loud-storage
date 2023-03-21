import { fetchFiles } from '@/redux/actions/filesActions';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getCurrentDir } from '@/redux/selectors/filesSelectors';
import React, { useEffect } from 'react';

import styles from './Disk.module.scss';
import Button, { ButtonType } from '@/views/Button';
import FileList from './components/FileList';

const Disk = () => {
  const dispatch = useAppDispatch();
  const currentDir = useAppSelector(getCurrentDir);

  useEffect(() => {
    dispatch(fetchFiles(currentDir));
  }, [currentDir, dispatch]);

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Title</h2>
      <div className={styles.toolbar}>
        <div className={styles.buttonbar}>
          <Button className={ButtonType.simple}>Назад</Button>
          <Button className={ButtonType.primary}>Создать</Button>
        </div>
      </div>
      <FileList />
    </div>
  );
};

export default Disk;
