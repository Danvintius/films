import App from "../App";
import { count } from App;

export const Stars = ({ count } : number) => {
    return (
    <ul class="card-body-stars u-clearfix">
    <li>
        <Star />
    </li>
</ul>
    )
}