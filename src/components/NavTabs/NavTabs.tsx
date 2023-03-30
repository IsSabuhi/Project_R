import { ButtonGroup, Divider } from '@chakra-ui/react';
import React from 'react';
import TabButton from './TabButton';

interface INavTabs {
  label: string;
  link: string;
  key: string;
}

interface Props {
  id: string | string[];
  currentRoute: string;
}

const NavTabs: React.FC<Props> = ({ id, currentRoute }) => {
  const getDefaultTabs = (id: Props['id']): Array<INavTabs> => [
    { key: 'home', label: 'Главная', link: '/home' },
    { key: 'create', label: 'Создать', link: `/create/${id}` },
    { key: 'design', label: 'Дизайн', link: `/design/${id}` },
    { key: 'share', label: 'Скачать', link: `/share/${id}` },
  ];

  const tabs = getDefaultTabs(id);

  return (
    <div>
      <ButtonGroup isAttached px='4'>
        {tabs.map((tabitem) => (
          <TabButton
            key={tabitem.key}
            isSelected={currentRoute.split('/').includes(tabitem.key)}
            href={tabitem.link}
            isDisabled={tabitem.key !== 'home' && !id.length}
          >
            {tabitem.label}
          </TabButton>
        ))}
      </ButtonGroup>
      <Divider />
    </div>
  );
};

export default NavTabs;
