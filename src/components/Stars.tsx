import App from "../App";
import { count } from '../App';

const Stars = (count: number) => {
    return (
    <ul className="card-body-stars u-clearfix">
    <li>
        <Star />
    </li>
</ul>
    )
}

export default Stars;