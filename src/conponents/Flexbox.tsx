import React from 'react';
import { Button } from 'react-bootstrap';
import { BootstrapFill } from 'react-bootstrap-icons';
import '../styles/Flexbox/index.css';
const Flexbox = () => {
  const setButtons = (): JSX.Element[] => {
    const array = [{ title: 'one' }, { title: 'two' }, { title: 'three' }];
    let result;

    result = array.map((obj, index) => (
      <Button variant="outline-warning">{`${obj.title}-${index}`}</Button>
    ));

    return result;
  };

  return (
    <div className="container">
      <div className="container--inner">
        <section className="section section-1">
          <div>
            <span>
              <BootstrapFill size={80} />
            </span>
          </div>
        </section>
        <section className="section section-2">
          <p className="display-4 title">Centered hero</p>
          <p className="desc">
            {' '}
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
        </section>
        <section className="section section-3">
          <div className="buttons-group" aria-label="Basic Example">
            <button type="button" className="btn btn-primary">
              Primary button
            </button>
            <button type="button" className="btn btn-outline-secondary">
              {' '}
              Secondary
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Flexbox;
