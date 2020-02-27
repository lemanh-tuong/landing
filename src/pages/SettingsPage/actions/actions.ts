
// export interface ActionProps<PayLoadT> {
//   type: string;
//   payload: PayLoadT;
// }

// export type ActionType = <PayLoadT>(arg: ActionProps<PayLoadT>) => ActionProps<PayLoadT>;

const submit = <T>(props: T) => {
  return {
    type: 'SUBMIT_DATA',
    payload: Object.assign({}, props)
  };
};

export { submit };

