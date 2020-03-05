import { createAction } from 'utils/functions/reduxActions';
import { PageProps } from '../SettingsPage';

// export interface ActionProps<PayLoadT> {
//   type: string;
//   payload: PayLoadT;
// }

// export type ActionType = <PayLoadT>(arg: ActionProps<PayLoadT>) => ActionProps<PayLoadT>;

export interface SubmitSettings {
  type: 'SUBMIT_SETTINGS';
  payload: PageProps;
}


const submit = createAction('SUBMIT_SETTINGS', (payload: PageProps) => {
  return {
    payload
  };
});

export { submit };

