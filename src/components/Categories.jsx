import { categories } from "../Data";
import { CategoryItem } from "./CategoryItem";

export function Categories(){
    return (
        <div className="categories-container">
          {categories.map(item=>(
            <CategoryItem item={item} />
          ))}
        </div>
    )
}