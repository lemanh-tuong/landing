import { NavProps } from 'components/Nav/Nav';
import { createAsyncAction } from 'utils/functions/reduxActions';

const actionGetDataNav = createAsyncAction(['@getDataNavRequest', '@getDataNavSuccess', '@getDataNavFailure'])<null, NavProps, string>();

export { actionGetDataNav };
