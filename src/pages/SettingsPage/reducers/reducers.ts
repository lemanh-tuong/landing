import { Section3Props } from 'components/Section3/Section3';

const initialState: Section3Props = {
  srcImg: '',

};
const reducers = (state = initialState, action: {type: string; payload: Section3Props}) => {
  switch (action.type) {
    case 'SUBMIT_DATA':
      return {...action.payload};
    default:
      return state;
  }
};

export default reducers;
