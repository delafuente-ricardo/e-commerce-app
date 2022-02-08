import { VFC } from 'react';
import { Link } from 'react-router-dom';
import { ICategoryListItem } from '../../../types';

interface ICategoryListProps {
  title: string;
  items: ICategoryListItem[];
}

const CategoryList: VFC<ICategoryListProps> = ({ title, items }) => {
  return (
    <div className='categoryList'>
      <div className='collection'>
        <h3 className='title'>{title}</h3>

        <ul className='collectionList'>
          {items.map(({ id, name, image }) => (
            <li key={id} className='collectionItem'>
              <Link to={`categories/${name?.toLowerCase()}`}>
                <div className='itemContainer hasShadow'>
                  <div className='imageWrapper'>
                    <img src={image} className='itemImage' alt={name} />
                  </div>
                  <span className='itemLabel'>{name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
