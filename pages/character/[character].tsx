import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchCharacters, filterCharacterByID } from '../../utils/api';
import Character from '../../interfaces/Character';
import Features from '../../components/Features';
import Card from '../../components/Card';
import Layout from '../../components/Layout';

const CharacterDetailsPage: React.FC = () => {
  const router = useRouter();
  const { character: id } = router.query;
  const [character, setCharacter] = useState<Character | null>(null);
  const [randomCharacters, setRandomCharacters] = useState<Character[]>([]);

  useEffect(() => {
    filterCharacterByID(id[0])
      .then((data) => {
        console.log(data);
        setCharacter(data);
      })
      .catch((error) => console.error('Erro ao buscar personagens:', error));
  }, [id]);

  useEffect(() => {
    // Fetch the first four characters
    fetchCharacters(1)
      .then((data) => setRandomCharacters(data.slice(0, 4))) // Pegue apenas os primeiros quatro personagens
      .catch((error) => console.error('Erro ao buscar personagens:', error));
  }, []);


  return (
    <Layout>
      <div style={{ marginTop: '100px' }}>
        <main>
          {character && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <div style={{ marginBottom: '12px', textAlign: 'center'}}>
                <img
                  style={{ display: 'flex' }}
                  src={character.image}
                  alt={character.name}
                />
                <h2>{character.name}</h2>
                <p>Status: {character.status}</p>
                <p>Gênero: {character.gender}</p>
              </div>
              <div style={{
                display: 'inline-flex',
                gap: 20,
                backgroundColor: '#dcdcdc',
                padding: '12px',
                marginBottom: '12px'
              }}>
                <Features title='status' subtitle={character.status} />
                <Features title='species' subtitle={character.species} />
                <Features title='gender' subtitle={character.gender} />
                <Features title='origin' subtitle={character.origin.name} />
                <Features title='location' subtitle={character.location.name} />
              </div>
              <div style={{
                display: 'flex',
                gap: 20,
                padding: '12px',
                marginBottom: '12px',
              }}>
                {randomCharacters.map((char) => (
                  <Card key={char.id} character={char} />
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </Layout>
  );
};

export default CharacterDetailsPage;