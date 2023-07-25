import Image from 'next/image';
import styles from './Product.module.scss';

const Product = () => {
    return (
        <div className={styles.product}>
            <Image src='/product1png' alt='produto 1' width={200} height={300} />
            <h2></h2>
        </div>
    )
}

export default Product;