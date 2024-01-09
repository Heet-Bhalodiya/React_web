// Next Imports
import Image from 'next/image';

// React Imports
import React, { FC } from 'react';

// Third-party Imports
import classnames from 'classnames'

type Option = {
  value: string;
  label: string;
  icon?: string;
};

type DropDownProps = {
  options: Option[];
  className?: string;
};

const DropDown: FC<DropDownProps> = ({ options, className }) => {
  return (
    <select className={classnames('cursor-pointer', className)}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.icon && <Image src={option.icon} alt={option.label} width={18} height={18}/>}
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
