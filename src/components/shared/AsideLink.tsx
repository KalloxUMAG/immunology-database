import {Link} from 'react-router-dom';
import styles from './AsideLink.module.css';

interface Path {
    pathname: string;
    search: string;
    hash: string;
}

type To = string | Partial<Path>

type AsideLinkProps = {
    to: To,
    Icon:any,
    text: string
}

const AsideLink: React.FC<AsideLinkProps> = ({to, Icon, text}) => {
    return (
        <Link to={to} className={styles.link}>
            <Icon className={styles.icon}/>
            {text && <span className={styles.text}>{text}</span>}
        </Link>
    )
}

export default AsideLink;