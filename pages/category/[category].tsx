import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useProduct } from '../../hooks';
import { Layout } from '../../src/components';
import { ProductLayout } from '../../src/layouts';
import data from '../../content/data.json';

interface Props {
	category: string;
}

const ProductPage: NextPage<Props> = ({ category }) => {
	const navLink = data.header.nav_links;

	const { products, isLoading } = useProduct('/wearproducts?category=men');

	return (
		<Layout
			title={'Choco - Stores'}
			pageDescription={'Encuentra tu ropa favorita'}
		>
			<ProductLayout products={products} isLoading={isLoading} title={category} />
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = () => {
	const paths = [
		{ params: { category: 'chamarras' } },
		{ params: { category: 'poleras' } },
		{ params: { category: 'leggins' } },
		{ params: { category: 'camisetas' } }
	];
	return {
		paths,
		fallback: true // false or 'blocking',
	};
};

export const getStaticProps: GetStaticProps = ({ params }) => {
	const { category = '' } = params as { category: string };

	return {
		props: {
			category
		},
		revalidate: 60 * 60 * 24
	};
};

export default ProductPage;
