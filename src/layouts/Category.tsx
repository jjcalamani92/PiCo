import React, { FC } from 'react';
import { IProduct } from '../../interfaces';
import {
	HeadingPrimary,
	HeadingSecondary,
	Spinner2,
	SwiperCategory
} from '../components';

import { getProductBySubCategory } from '../utils/getProduct';

interface Props {
	products: IProduct[];
	subCategory: string;
	isLoading: boolean;
	title: string;
}

const CategoryComponent: FC<Props> = ({
	products,
	subCategory,
	isLoading,
	title
}) => {
	const productsCategory = getProductBySubCategory(products, subCategory);
	return (
		<>
			<HeadingSecondary title={title} category="#" />
			{isLoading ? <Spinner2 /> : <SwiperCategory products={productsCategory} />}
		</>
	);
};

export const CategoryLayout = ({ products, isLoading, title }) => {
	return (
		<>
			<HeadingPrimary title={title} />
			<section className="home">
				<CategoryComponent
					products={products}
					subCategory="poleras"
					isLoading={isLoading}
					title="poleras"
				/>
				<CategoryComponent
					products={products}
					subCategory="chamarras"
					isLoading={isLoading}
					title="chamarras"
				/>
				<CategoryComponent
					products={products}
					subCategory="blusas"
					isLoading={isLoading}
					title="blusas"
				/>
				<CategoryComponent
					products={products}
					subCategory="leggins"
					isLoading={isLoading}
					title="leggins"
				/>
			</section>
		</>
	);
};
