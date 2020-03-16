import { changeInputCardForm } from '../../actions/actionChangeInputCardForm/actionChangeInputCardForm';

type ThunkChangeInputCardForm = ThunkAction<typeof changeInputCardForm>;

const thunkChangeInputCardForm = (fieldName: string, value: string, nowIndexSection: number, nowIndexCard: number): ThunkChangeInputCardForm => dispatch => {
    dispatch(changeInputCardForm({fieldName, value, nowIndexSection, nowIndexCard}))
}

export default thunkChangeInputCardForm;
