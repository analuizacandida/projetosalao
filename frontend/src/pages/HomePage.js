import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/HomePage.module.css'; // Importar o arquivo de estilos
import servicos from '../assets/servicos.png'; // Importar a imagem de serviços
import reviews from '../assets/reviews.png'; // Importar a imagem de reviews
import Header from '../components/Header';

const HomePage = () => {
    return (
        <div>
           <Header /> 
            <main className={styles.main}>
                <section id="agendar" className={styles.contentSection}>
                    <h2>Agende aqui</h2>
                    <img src="assets/salao.avif" alt="salao" className={styles.salao} />
                    <Link to="/agendamento" className={styles.button}>Agendar Agora</Link>
                </section>

                <section id="servicos" className={styles.contentSection}>
                    <h2>Serviços</h2>
                    <img src={servicos} alt="serviços" className={styles.servicos} />
                    <Link to="/pagina2" className={styles.button}>Saiba Mais</Link>
                </section>

                <section id="reviews" className={styles.contentSection}>
                    <h2>Reviews</h2>
                    <img src={reviews} alt="reviews" className={styles.reviews} />
                    <Link to="/reviews" className={styles.button}>Saiba Mais</Link>
                </section>
            </main>
             
        </div>
    );
};

export default HomePage;