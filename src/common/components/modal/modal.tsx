import { FC, Fragment, useState, ReactNode, MouseEventHandler } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import CustomButton from '../button/CustomButton';
import { XCircleIcon } from '@heroicons/react/solid';
import styles from './modal.module.scss';

interface ModalProps {
  title: string;
  trigger: (open: MouseEventHandler<HTMLButtonElement>) => ReactNode;
}

const Modal: FC<ModalProps> = ({ trigger, title, children }) => {
  let [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* Trigger */}
      {trigger(open)}

      {/* Modal */}
      <Transition show={isOpen} as={Fragment} appear>
        <Dialog as='div' className={styles.modal} onClose={close}>
          <Transition.Child
            as={Fragment}
            enter='overlayEnter'
            enterFrom='overlayEnterFrom'
            enterTo='overlayEnterTo'
            leave='overlayLeave'
            leaveFrom='overlayLeaveFrom'
            leaveTo='overlayLeaveTo'
          >
            <Dialog.Overlay className='overlay' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='dialogEnter'
            enterFrom='dialogEnterFrom'
            enterTo='dialogEnterTo'
            leave='dialogLeave'
            leaveFrom='dialogLeaveFrom'
            leaveTo='dialogLeaveTo'
          >
            <div className='modalContent'>
              <Dialog.Title className='modalHeader'>
                <div className='level'>
                  <div className='levelLeft'>{title}</div>

                  <div className='levelRight isNarrow'>
                    <button onClick={close}>
                      <XCircleIcon className='close' />
                    </button>
                  </div>
                </div>
              </Dialog.Title>

              <div className='modalBody'>{children}</div>

              <div className='modalFooter'>
                <CustomButton variant='primary' fullwidth onClick={close}>
                  Got it, thanks!
                </CustomButton>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
