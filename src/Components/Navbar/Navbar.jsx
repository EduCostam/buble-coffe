import Link from 'next/link';
import styles from './Navbar.module.scss';
import Image from 'next/image';

const links = [
    { url: '#products', text: 'Produtos' },
    { url: '#about', text: 'Sobre' },
    { url: '#social', text: 'Social' },
    { url: '#reviews', text: 'Depoimentos' },
  ];

  const Navbar = () => {
    const renderLinks = links.map((link, i) => (
        <li key={i}><Link href={link.url}>{link.text}</Link></li>
    ));
    return (
        <section className={styles.navbar}>
            <nav className={styles.navigation}>
                <ul>{renderLinks.slice(0, 2)}</ul>
            </nav>
            <div className={styles.logo}>
                <Link href='/'>
                    <Image src='/logo.svg' alt='buble coffee' width={77} height={38} />
                </Link>
            </div>
            <nav className={styles.navigation}>
                <ul>{renderLinks.slice(2, 4)}</ul>
            </nav>
        </section>
    );
};

export default Navbar;
