import { useEffect, useState } from "react"
import { filterCharacter } from "../utils/api";
import { Character } from "../interfaces";

interface SearchBarProps {
    setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
}
export default function SearchBar({ setCharacters }: SearchBarProps) {

    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        filterCharacter(searchQuery)
            .then((data) => {
                setCharacters(data);
            })
            .catch((error) => console.error('Erro ao buscar personagens:', error));
    }, [searchQuery]);

    return (
        <>
            <div>
                <input placeholder="Buscar personagem" style={{
                    borderRadius: '10px',
                    padding: '10px',
                    width: '25%',
                    height: '30px',
                    fontSize: '16px'
                }} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
            </div>
        </>
    )
}