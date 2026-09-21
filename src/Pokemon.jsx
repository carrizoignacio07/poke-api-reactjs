import './Pokemon.css';
export const Pokemon = ({ avatar, name }) => {
    return (
        <figure className="p-5 w-max gap-7">
            <img className="w-50" src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    );
}