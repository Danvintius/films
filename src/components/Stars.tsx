import App from "../App";
import Star from './Star';

function Stars(count: number) {
    if (count > 5 || count < 1) {
        return false;
    }
    const arr: number = [];
    for (let i: number = 0; i < count; i++) {
        arr.push(i);
    }
    return (
    <ul className="card-body-stars u-clearfix">
    {arr.map(star => (
					<Star key={star} />
				))}
    </ul>
    )
}

export default Stars;