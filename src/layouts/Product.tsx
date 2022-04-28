import React, { FC } from 'react';
import { Card, HeadingPrimary } from '../components';
import { IProduct } from '../interface';

interface Props {
	products: IProduct[];
	isLoading: boolean;
	title: string;
}

export const ProductLayout: FC<Props> = ({ products, isLoading, title }) => {
	return (
		<>
			<HeadingPrimary title={title} />
			<section className="product">
				{products.map((product, i) => (
					<Card key={i} product={product} />
				))}
			</section>
		</>
	);
};
