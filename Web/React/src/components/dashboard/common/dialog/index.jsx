import { IconClose } from '../../../../base/Icons';
import './dialog.scss';

export const Dialog = ({ children, isOpen, onClose, mWidth, ...props }) => {
  return <>
    {isOpen && <div className="app-dialog">
      <div className="app-dialog-overlay">
        <div className='app-dialog-content'>
          <div className='app-dialog-wrapper' style={{maxWidth: mWidth ?? '500px'}}>
            <div className='app-dialog-close'>
              <button onClick={onClose}>
                <IconClose />
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>}
  </>
}

export const DialogBody =({children}) => {
  return <div className='app-dialog-body'>
    {children}
  </div>
}

export const DialogHeader = ({ children, onClose }) => {
  return <div className='app-dialog-header'>
    {children}
  </div>
}

export const DialogFooter = ({ children, onClose }) => {
  return <div className='app-dialog-footer'>
    {children}
  </div>
}

