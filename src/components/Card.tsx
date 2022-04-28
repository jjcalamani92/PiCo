import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import NextLink from 'next/link';

import { FC } from 'react';
import { IProduct } from '../../interfaces/Product';

interface Props {
	product: IProduct;
}

export const Card: FC<Props> = ({ product }) => {
	return (
		<NextLink href={`/detail/${product.slug}`} passHref prefetch={false}>
			<a className="card">
				<div className="image">
					<img src={`${product.image[0]}`} alt={`${product.title}`} />
				</div>
				<div className="content">
					<div className="title">
						<h3>{product.title}</h3>
					</div>
					<div className="stars">
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStarHalfAlt} />
					</div>
					<div className="price">
						Bs {product.price} <span>Bs {product.oldPrice}</span>
					</div>
				</div>
			</a>
		</NextLink>
	);
};
