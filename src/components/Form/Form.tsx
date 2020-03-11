import React, { ReactNode, useState } from 'react';
import styles from './Form.module.scss';

function createEnumArray(length: number) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(i);
  }
  return arr;
}

interface TField<T> {
  fieldType: string;
  props: T & {
    onEvent?: (arg?: any) => void;
  };
}

export type RenderField<T> = ({ fieldType, props }: TField<T>) => ReactNode;
export type RenderItem<T> = (arg: T) => ReactNode;
type RenderTab<T> = ({ fields, formName, onSubmit, renderField }: Pick<FormProps<T>, 'fields' | 'formName' | 'onSubmit' | 'renderField'>) => ReactNode;
// export type TFields<T> = TField<T>[];

export interface FormProps<T> {
  formName?: string;
  fields: TField<T>[];
  renderField: RenderField<T>;
  tabs?: Omit<FormProps<T>, 'renderTab'>[];
  renderTab?: RenderTab<T>;
  hasNav?: boolean;
  onSubmit?: (arg?: any) => void;
}


const Form = <T extends object>({ formName, fields, tabs, renderField, renderTab, hasNav, onSubmit }: Partial<FormProps<T>>) => {

  const [nowTab, setNowTab] = useState(0);

  const _handleChangeTab = (tab: number) => {
    return () => {
      setNowTab(tab);
    };
  };


  const _renderFieldsDefault = ({ fieldType, props }: TField<T>) => {
    return (
      <div>Field Default {JSON.stringify({ fieldType, props })}</div>
    );
  };

  const _renderTabDefault = ({ fields, formName, onSubmit }: Pick<FormProps<T>, 'fields' | 'formName' | 'onSubmit'>) => {
    return <div>Tabs Default {JSON.stringify({ fields, formName, onSubmit })}</div>;
  };

  const _renderFields = (fields: TField<T>[]) => {
    return fields?.map(field => renderField?.(field) ?? _renderFieldsDefault(field));
  };

  const _renderTabs = (tabs: FormProps<T>[]) => {
    return (
      <div className={styles.tabs}>
        {
          tabs.map((tab, index) => (
            <div className={`${styles.tab} ${nowTab === index ? styles.show : null}`} key={index}>
              {renderTab?.(tab) ?? _renderTabDefault({ fields: tab.fields, formName: tab.formName, onSubmit: tab.onSubmit })}
            </div>
          ))
        }
      </div>
    );
  };

  const _renderNav = () => {
    const nav = tabs ? [...createEnumArray(tabs?.length)] : [];
    return nav.map((item, index) => <div className={styles.navItem} onClick={_handleChangeTab(index)}>{item}</div>);
  };

  return (
    <div className={styles.form}>
      <div className={styles.formContainer}>
        {tabs ? _renderTabs(tabs)
          : fields ? _renderFields(fields)
            : null
        }
      </div>
      {
        hasNav ? <div className={styles.formNav}>
          {_renderNav()}
        </div>
          : null
      }
      <div className={styles.formNav}>
        {_renderNav()}
      </div>
    </div>
  );
};

export default Form;
