import styles from './Product.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Product = props => {

console.log('props', props.colors);

  Product.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    title: PropTypes.string,
    basePrice: PropTypes.number,
    // color: PropTypes.array,
    // sizes: PropTypes.array
  }
 
  const [currentColor, setCurrentColor] = useState(0);
  const [currentSize, setCurrentSize] = useState(0);
  const [isActive, setActive] = useState(false);

  function handleClick() {
     setActive(true);
    //  setCurrentSize == 0;
  };

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  console.log('size', currentSize);
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.colors[currentColor]}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {props.basePrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size, index) => 
              <li key={index}>
                <button type="button" onClick={() => setCurrentSize(index)} className={clsx(index === currentSize && styles.active)}>{size.name}</button>
              </li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
             {props.colors.map((item, index) => 
                <li key={item}>
                  <button type="button" onClick={() => setCurrentColor(index)} className={clsx(prepareColorClassName(item), index === currentColor && styles.active)} />
                </li> 
              )}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )

};

export default Product;