import { Link } from "react-router-dom";
import './RecipePreview.css'
import { Recipe } from '../recipeData';

// previewing recipes before opening them for the actual receipe (ingredients etc)
export default function RecipePreview(props: Recipe)
{
    const id = props.name
    return (
        <div className="recipe3-flex">
            <Link style={{textDecoration: 'none', color: '#faedcd'}} to={`/Page/${id}`} className ="links">
            <h2> {props.name} </h2>
            </Link>
            <p> {props.description}</p>
            <img className="imageIced" src={props.image1} alt={props.name}/>
            <img className="imageHot" src={props.image2} alt={props.name}/>

        </div>
    );

}
