import { createDispatchAction } from 'utils/functions/reduxActions';
import { changeInputCardForm } from '../../actions/actionChangeInputCardForm/actionChangeInputCardForm';

type ThunkChangeInputCardForm = ThunkAction<typeof changeInputCardForm>;
export interface ThunkChangeInputCardFormArg {
  fieldName: string;
  value: string;
  nowIndexSection: number;
  nowIndexCard: number
}
const thunkChangeInputCardForm = ({fieldName, value, nowIndexSection, nowIndexCard}: ThunkChangeInputCardFormArg): ThunkChangeInputCardForm => dispatch => {
    dispatch(changeInputCardForm({fieldName, value, nowIndexSection, nowIndexCard}))
}

export default createDispatchAction(thunkChangeInputCardForm);
