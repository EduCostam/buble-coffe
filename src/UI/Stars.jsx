import Image from 'next/image';
import styles from './Stars.module.scss';

const Stars = ({ stars, reviwes }) => {
    const renderStars = Array.from({ length: stars }, (_, i) => (
        <Image key={i} src='/star.svg' alt='estrela' width={14} height={14}/>
    ));


    return (
        <div className={styles.stars}>
            {renderStars}
            {reviwes && <span>({reviwes})</span>}
        </div>
    )
}

export default Stars;