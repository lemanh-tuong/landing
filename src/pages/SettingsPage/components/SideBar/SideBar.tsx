import Text from 'components/Text/Text';
import React, { CSSProperties, FC } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Option } from '../../SettingsPage';
import styles from './SideBar.module.scss';
import icon1 from 'assets/img/web_icons/paid-listings.svg';

export interface SideBarProps {
  onEvent: (option: Omit<Option, 'sectionId'>) => () => void;
  className?: string;
  style?: CSSProperties;
}

interface ItemSideBar extends Omit<Option, 'sectionId'> {
  id: string;
}
const defaultTitle = 'Build any type of directory with the fastest and easiest for wordpress';
const defaultText = 'Create unlimited directory types, our tool also lest you design functionality and features for each of them.';

const data: ItemSideBar[] = [
  {
    sectionName: 'Section 1',
    mainTitle: defaultTitle,
    alignMainTitle: 'left',
    colorMainTitle: 'white',
    classMainTitle: '',
    fontSizeMainTitle: 'md',
    styleMainTitle: {},
    text: defaultText,
    alignText: 'left',
    colorText: 'white',
    fontSizeText: 'md',
    classText: '',
    styleText: {},
    darkMode: false,
    id: 'Btn Section 1',
  },
  {
    sectionName: 'Section 2',
    mainTitle: 'Title 2',
    alignMainTitle: 'center',
    colorMainTitle: 'black-3',
    classMainTitle: '',
    fontSizeMainTitle: 'md',
    styleMainTitle: {},
    text: 'Text',
    alignText: 'left',
    colorText: 'black-3',
    fontSizeText: 'md',
    classText: '',
    styleText: {},
    darkMode: false,
    id: 'Btn Section 2',
    cards: [
      { titleCard: 'Paid listings', textCard: 'Listing owners will pay to get theirs places listed on your site. In Wilcity, you can create unlimited Pricing Plans, each of which includes different benefits.', iconImg: { imgSrc: icon1 }, hasIcon: true, bgColorIcon: 'gradient-pink-orange' },
      { titleCard: 'Promoted listing', textCard: 'Choosing a promotion plan, listing owners will have directories appeared at the special spots on your site and at the top of the search result page.', iconImg: { imgSrc: icon1 }, hasIcon: true, bgColorIcon: 'gradient-pink-orange' },
      { titleCard: 'Paid claim listings', textCard: 'Another revenue model to monetize from listing. You can create a listing on your site and allow the listing owner to claim it.', iconImg: { imgSrc: icon1 }, hasIcon: true, bgColorIcon: 'gradient-pink-orange' },
    ],
  },
  {
    sectionName: 'Section 3',
    mainTitle: 'Title 3',
    alignMainTitle: 'left',
    colorMainTitle: 'black-3',
    classMainTitle: '',
    fontSizeMainTitle: 'md',
    styleMainTitle: {},
    text: 'Comes with power of Wiloke Tools, you can add unlimited directory types to your site. The tool also lets you design functionality and features. That’s why we give you our promise: Quisque amet consectetur, egestas nulla at nisi cursus, sed iaculis est commodo, nulla lacus aliquet.',
    alignText: 'center',
    colorText: 'black-3',
    fontSizeText: 'md',
    classText: '',
    styleText: {},
    darkMode: false,
    id: 'Btn Section 3'
  },
  {
    sectionName: 'Section 4',
    mainTitle: 'Perfect customer dashboard',
    alignMainTitle: 'center',
    colorMainTitle: 'black-3',
    classMainTitle: '',
    fontSizeMainTitle: 'md',
    styleMainTitle: {},
    text: 'The listing owners can take full control of their business from Customer Dashboard. Here they can upgrade plans, run promotion campains, reply to messages, track the statistics of views, favorites, shares, reviews.',
    alignText: 'left',
    colorText: 'black-3',
    fontSizeText: 'md',
    classText: '',
    styleText: {},
    darkMode: false,
    id: 'Btn Section 4'
  },
];


const SideBar: FC<SideBarProps> = ({ className, style, onEvent }) => {

  const _renderItem = (property: ItemSideBar, key: any) => {
    return (
      <Draggable draggableId={property.id} index={key} key={key}>
        {provided => (
          <div onMouseDown={onEvent(property)} className={styles.link} ref={provided.innerRef} key={key} {...provided.dragHandleProps} {...provided.draggableProps}>
            <div className={styles.text}>
              <Text text={property.sectionName} />
            </div>
          </div>
        )}
      </Draggable>
    );
  };

  return (
    <Droppable isDropDisabled={true} droppableId="1" type='Test'>
      {provided => (
        <div className={`${styles.sideBar} ${className}`} ref={provided.innerRef} {...provided.droppableProps} style={style}>
          <div className={styles.menuGroup}>
            <div className={styles.menuName}>
              Section
            </div>
            <ul className={styles.nav}>
              {data.map((item, index) => _renderItem(item, index))}
            </ul>
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default SideBar;
