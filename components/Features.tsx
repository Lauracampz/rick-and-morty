import { FaPerson, FaEarthAmericas, FaLocationDot } from 'react-icons/fa6'
import { FaTransgender } from "react-icons/fa";
import { IoFingerPrint } from "react-icons/io5";

interface FeaturesProps {
    title: 'status' | 'species' | 'gender' | 'origin' | 'location',
    subtitle: string
}

export default function Features(props: FeaturesProps) {
    const renderIcon = (title) => {
        switch (title) {
            case 'status':
                return <FaPerson size={40}/>;
            case 'species':
                return <IoFingerPrint size={40}/>;
            case 'gender':
                return <FaTransgender size={40}/>;
            case 'origin':
                return <FaEarthAmericas size={40}/>;
            case 'location':
                return <FaLocationDot size={40}/>;
            default:
                return null;
        }
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {renderIcon(props.title)}
            <h3 style={{color: '#86c900', fontWeight: 'bold'}}>{props.title}</h3>
            <h2>{props.subtitle}</h2>
        </div>
    );
}