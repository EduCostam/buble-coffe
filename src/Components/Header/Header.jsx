import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {
    return <header className={styles.header}>
        <div className={styles.content}>
            <h1>Buble Coffee</h1>
            <div className={styles.line} />
            <p className='dark-bg'>
                Se você busca um momento de tranquilidade em meio a agitação do dia a
                dia, venha conhecer a Buble Coffe. Nosso espaço foi cuidadosamente 
                projetado para proporcionar uma experiência única, em sintônia com a 
                natureza.
            </p>
            <button className='btn btn-primary'>Conheça</button>
        </div>
    <Image src='/leaf1.png' alt='folha' width={320} height={460} className={styles.leaf1} />
    <Image src='/coffee.png' alt='folhas de cafe' width={260} height={260} className={styles.leaf1} />
    <Image src='/leaf2.png' alt='folha' width={400} height={520} className={styles.leaf2} />
    <Image src='/flower.png' alt='flor' width={260} height={260} className={styles.flower} />
    </header>;
};

export default Header;