import Col from 'components/Grid/Column/Column';
import Row from 'components/Grid/Row/Row';
import Image from 'components/Image/Image';
import { useMount } from 'hooks/useMount';
import { Option } from 'pages/SettingsPage/SettingsPage';
import thunkAddSection from 'pages/SettingsPage/thunks/thunkAddSection/thunkAddSection';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import getQuery from 'utils/functions/getQuery';
import { v4 as uuidv4 } from 'uuid';
import { ActionGetComponentSuccess } from './actions/actionGetComponent/actionGetComponent';
import styles from './ComponentPage.module.scss';
import { components, messageRequestComponents, statusRequestComponents } from './selector';
import thunkGetComponent from './thunks/thunkGetComponent/thunkGetComponent';

const ComponentPage = () => {
  const history = useHistory();
  //Selector
  const pattern = useSelector(components);
  const status = useSelector(statusRequestComponents);
  const message = useSelector(messageRequestComponents);

  //Dispatch
  const getPatternSection = thunkGetComponent();
  const addSection = thunkAddSection();

  const { nowIndexSection } = getQuery<'nowIndexSection'>(history.location.search, ['nowIndexSection']);

  //Handle
  const handleAdd = (property: Option) => {
    return () => {
      addSection({ arg: property, index: parseInt(nowIndexSection) + 1 });
      history.push('/admin/builder');
    }
  }

  const _renderItem = (property: ActionGetComponentSuccess) => {
    return (
      <Col cols={[6, 4, 3]} key={uuidv4()}>
        <div className={styles.component}>
          <div className={styles.componentPreview}>
            <Image type='tagImg' imgSrc={property.previewImg} />
          </div>
          <div className={styles.addBtn}>
            <button className={styles.btn} onClick={handleAdd({ ...property, sectionId: uuidv4() })}>
              <Link to='/admin/builder'>
                Add
              </Link>
            </button>
          </div>
        </div>
      </Col>
    );
  };

  const _renderSuccess = () => {
    return (
      <div className={styles.componentPage}>
        <div className={styles.pageContent}>
          <div className={styles.pageHeader}>
            <h1>Section</h1>
          </div>
          <div className={styles.pageBody}>
            <div className={styles.listComponent}>
              <Row>
                {pattern.map(item => _renderItem(item))}
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }

  useMount(() => {
    getPatternSection('section');
  })

  const _renderSwitch = () => {
    switch (status) {
      case 'loading':
        return <div>Loading</div>;
      case 'success':
        return _renderSuccess();
      case 'failure':
        return <div>{message}</div>;
      default:
        return null;
    }
  }

  return _renderSwitch();
};

export default ComponentPage;
