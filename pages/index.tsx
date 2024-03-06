import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { fetchCharacters } from '../utils/api';
import SearchBar from '../components/SearchBar';
import Character from '../interfaces/Character';
import Card from '../components/Card';

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchCharacters(currentPage)
      .then((data) => {
        setCharacters(data);
      })
      .catch((error) => console.error('Erro ao buscar personagens:', error));
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    window.scrollTo(0, 0); // Scroll to top of the page
  };
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    window.scrollTo(0, 0); // Scroll to top of the page
  };

  return (
    <Layout>
      <img
        src="https://lh3.googleusercontent.com/pw/AP1GczObD0Q30ABjouwZdn77RCqDBvviBqcYoNrSGOT2ZgEACt6LWeD0Tv65U6MFZtapsGoze1JCWqWTKNlNis5oZwwB6qI4T0IopxUPYAfF2GUde5hzRnKBOJzuYhP5o9EwqUyZ1wkVxlj6A7V5oeWG9N-k=w1325-h382-s-no-gm?authuser=0"
        style={{
          width: '100vw',
          marginTop: '60px',
          marginBottom: '20px'
        }}
      />
      <div className="container">
        <SearchBar setCharacters={setCharacters} />
        <main>
          <section style={{ marginTop: '40px', }}>
            <div className="character-list">
              {characters.map((character) => (
                <Card character={character} />
              ))}
            </div>
            <div style={{ display: 'flex', padding: '10px', justifyContent: 'center' }}>
              <button
                style={{ padding: '8px' }}
                onClick={handlePrevPage}
                disabled={currentPage === 1}>
                Anterior
              </button>
              <button
                style={{ padding: '8px' }}
                onClick={handleNextPage}
              >Próximo</button>
            </div>
          </section>
        </main>
      </div>
      <style jsx>{`
        .character-list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px; /* Espaçamento entre os cards */
          justify-content: center; /* Centraliza os cards horizontalmente */
        }

        .character-card-wrapper {
          max-width: 300px; /* Largura máxima de cada card */
          background-color: #f0f0f0; /* Cor de fundo cinza claro */
          border-radius: 10px; /* Arredondamento dos cantos */
          overflow: hidden; /* Evita que conteúdo transborde */
        }

        .character-card {
          position: relative;
        }

        .character-card img {
          width: 100%;
          height: auto;
          border-radius: 10px 10px 0 0; /* Arredondamento apenas nos cantos superiores */
        }

        .character-card p {
          margin: 10px;
          text-align: center;
        }

        .expanded-info {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 10px;
          background-color: rgba(0, 0, 0, 0.8);
          color: #fff;
          border-radius: 0 0 10px 10px; /* Arredondamento apenas nos cantos inferiores */
          transition: opacity 0.3s ease;
          opacity: 0;
        }

        .character-card:hover .expanded-info {
          opacity: 1;
        }

        .expanded-info p {
          margin: 5px 0;
        }

        .expanded-info button {
          background-color: transparent;
          border: 1px solid #fff;
          color: #fff;
          padding: 5px 10px;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .expanded-info button:hover {
          background-color: #fff;
          color: #000;
        }
      `}</style>
    </Layout>
  );
};

export default Home;