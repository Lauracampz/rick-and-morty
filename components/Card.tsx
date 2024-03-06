import Link from "next/link"
import Character from "../interfaces/Character"
import { useState } from "react";

interface CardProps {
    character: Character
}
export default function Card({ character }: CardProps) {

    const [expandedCharacter, setExpandedCharacter] = useState<Character | null>(null);

    const handleCharacterMouseEnter = (character: Character) => {
        setExpandedCharacter(character);
    };

    const handleCharacterMouseLeave = () => {
        setExpandedCharacter(null);
    };

    return (
        <div
            className="character-card"
            key={character.id}
            onMouseEnter={() => handleCharacterMouseEnter(character)}
            onMouseLeave={handleCharacterMouseLeave}
        >
            <Link href={`/character/${character.id}`} as={`/character/${character.id}`}>
                <div>
                    <img src={character.image} alt={character.name} />
                    <p>{character.name}</p>
                </div>
            </Link>
            {expandedCharacter === character && (
                <div className="expanded-info">
                    <p>Status: {character.status}</p>
                    <p>Gênero: {character.gender}</p>
                    <p>Origem: {character.origin.name}</p>
                    <Link href={`/character/${character.id}`} as={`/character/${character.id}`}>
                    <button>Mais Detalhes</button>
                    </Link>
                </div>
            )}
        </div>
    )
}