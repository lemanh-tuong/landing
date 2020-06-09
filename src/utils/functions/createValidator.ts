type Validator<DataType> = (test: DataType) => boolean;
const createValidator = <T extends object>(tests: Validator<T>[]) => {
  return (userObj: T) => {
    const indexConditionError = tests.findIndex(test => test(userObj));
    return {
      indexError: indexConditionError
    };
  };
};

export { createValidator };

