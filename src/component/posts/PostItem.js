import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Card from "../ui/Card";
import classes from "./PostItem.module.css";

function PostItem(props) {
    const favoriteContext = useContext(FavoritesContext);

    const itemIsFavorite = favoriteContext.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoriteContext.removeFavorite(props.id);
        } else {
            favoriteContext.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite
                            ? "Remove from favorite"
                            : "To Favorites"}
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default PostItem;
