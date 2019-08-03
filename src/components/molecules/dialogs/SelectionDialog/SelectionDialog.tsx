import React from 'react';

import styles from './SelectionDialog.module.scss';

import BaseDialog from '../BaseDialog/BaseDialog';
import { createButtonProps } from '../../../../helpers/components/dialog';

interface IProps {
  hasOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  onYes: () => void;
  onNo: () => void;
}

const SelectionDialog: React.FC<IProps> = (props: IProps) => {
  const { hasOpen, onClose, title, content, onYes, onNo } = props;
  const buttons = {
    left: createButtonProps('いいえ', onNo),
    right: createButtonProps('はい', onYes, 'primary'),
  };

  return (
    <div id={styles.container}>
      <BaseDialog hasOpen={hasOpen} onClose={onClose} buttons={buttons} title={title}>
        <p>{content}</p>
      </BaseDialog>
    </div>
  );
};

export default SelectionDialog;
