import { Modal } from '@douyinfe/semi-ui';

export const win = () => {
  Modal.success({ title: 'Chapeau, you won!', content: 'A hat will be deposited to your account soon.' });
};
export const loss = () => {
  Modal.error({ title: "Unfortunately, you didn't win", content: 'Please try again!' });
};
export const error = () => {
  Modal.error({ title: 'Please select a hat first!', content: '' });
};
export const canceled = () => {
  Modal.error({ title: 'You have canceled the transaction!', content: '' });
};
