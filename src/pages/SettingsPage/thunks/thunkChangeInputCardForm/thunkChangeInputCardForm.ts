import { changeInputCardForm } from '../../actions/actionChangeInputCardForm/actionChangeInputCardForm';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChangeInputCardForm = ThunkAction<typeof changeInputCardForm>;

const thunkChangeInputCardForm = (fieldName: string, value: string, nowIndexSection: number, nowIndexCard: number): ThunkChangeInputCardForm => dispatch => {
    dispatch(changeInputCardForm({fieldName, value, nowIndexSection, nowIndexCard}))
}

export default createDispatchAction(thunkChangeInputCardForm);
