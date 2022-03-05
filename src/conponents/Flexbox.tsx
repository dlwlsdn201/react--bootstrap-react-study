import React from 'react';
import { Button } from 'react-bootstrap';

const Flexbox = () => {
  const setButtons = (): JSX.Element[] => {
    const array = [{ title: 'one' }, { title: 'two' }, { title: 'three' }];
    let result;

    result = array.map((obj, index) => (
      <Button variant="warning">{`${obj.title}-${index}`}</Button>
    ));

    return result;
  };

  return <div>{setButtons()}</div>;
};

export default Flexbox;
