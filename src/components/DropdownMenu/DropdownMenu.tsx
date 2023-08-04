import { useState, useEffect, useRef, ReactNode, cloneElement, ReactElement } from 'react';
import cn from 'classnames';
import styles from './DropdownMenu.module.scss';

type DropdownMenuProps = {
  trigger: ReactNode;
  content: ReactElement;
};

type Direction = 'down-right' | 'up-right' | 'down-left' | 'up-left';

const DropdownMenu = ({ trigger, content }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState<Direction>('down-right');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggleOpenMenu = () => {
    setIsOpen(prev => !prev);
  };

  const handleMouseEnterOpenMenu = () => {
    setIsOpen(true);
  };

  const handleMouseLeaveCloseMenu = () => {
    setIsOpen(false);
  };

  const handleItemClick = (id: number) => {
    console.log(`Вы перешли на станицу с  ${id}`);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResizeChange = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResizeChange);

    return () => {
      window.removeEventListener('resize', handleResizeChange);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScrollChange = () => {
      if (triggerRef.current && contentRef.current) {
        const triggerRect = triggerRef.current.getBoundingClientRect();

        if (triggerRect.bottom > 0 && triggerRect.top < window.innerHeight) {
          contentRef.current.style.display = 'block'
        } else {
          contentRef.current.style.display = 'none'
        }
      }
    }
    window.addEventListener('scroll', handleScrollChange);

    return () => {
      window.removeEventListener('scroll', handleScrollChange);
    };
  }, []);

  useEffect(() => {
    if (triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      let newDirection: Direction = 'down-right';

      if (triggerRect.top <= 0 && triggerRect.left === 0) {
        newDirection = 'down-right';
      } else if (triggerRect.top !== 0 && triggerRect.left === 0) {
        newDirection = 'up-right';
      } else if (triggerRect.top <= 0 && triggerRect.left >= 0) {
        newDirection = 'down-left';
      } else if (triggerRect.top !== 0 && triggerRect.left !== 0) {
        newDirection = 'up-left';
      }

      setDirection(newDirection);
    }
  }, [isOpen]);

  return (
    <div
      ref={dropdownRef}
      className={styles.dropdown}
      onMouseEnter={handleMouseEnterOpenMenu}
      onMouseLeave={handleMouseLeaveCloseMenu}
    >
      <div
        className={styles.dropdown__trigger}
        ref={triggerRef}
        onClick={handleToggleOpenMenu}
      >
        {trigger}
      </div>
      {isOpen && (
        <div ref={contentRef} className={cn(styles.dropdown__content, `${styles[`dropdown__content_${direction}`]}`)}
             onMouseEnter={handleMouseEnterOpenMenu}
        >
          {cloneElement(content, { onItemClick: handleItemClick })}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
