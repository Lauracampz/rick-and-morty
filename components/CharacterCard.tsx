import React from 'react';
import Link from 'next/link';
import { Character } from '../interfaces';


interface CharacterCardProps {
  character: Character;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onMouseEnter, onMouseLeave }) => {
  return (
    <div className="character-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Link href={`/characters/${character.id}`}>
        <div>
          <img src={character.image} alt={character.name} />
          <p>{character.name}</p>
        </div>
      </Link>
	<style jsx>{`
        .character-card {
          width: 100px; /* Largura dos cards */
          display: inline-block;
          margin: 10px;
          border-radius: 10px;
          overflow: hidden;
          background-color: #f3f3f3; /* Cor de fundo padrão */
        }

        .character-card div {
          text-align: center;
        }

        img {
          width: 100%;
          height: auto;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }

        .placeholder-image {
          width: 100%;
          height: 150px; /* Altura do espaço reservado */
          background-color: #ddd; /* Cor de fundo cinza claro */
        }

        p {
          margin: 10px 0;
        }
      `}</style>	
    </div>
  );
};

