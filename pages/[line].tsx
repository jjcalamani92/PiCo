import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useProduct } from '../hooks';
import { Layout } from '../src/components';
import { CategoryLayout } from '../src/layouts';
import data from '../content/data.json';

interface Props {
	line: string;
}

const LinePage: NextPage<Props> = ({ line }) => {
	const navLink = data.header.nav_links;

	const { products, isLoading } = useProduct(`/wearproducts?category=${line}`);

	return (
		<Layout
			title={'Choco - Stores'}
			pageDescription={'Encuentra tu ropa favorita'}
		>
			<CategoryLayout products={products} isLoading={isLoading} title={line} />
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = () => {
	const paths = [
		{ params: { line: 'men' } },
		{ params: { line: 'women' } },
		{ params: { line: 'kid' } },
		{ params: { line: 'servicios' } },
		{ params: { line: 'contacto' } }
	];
	return {
		paths,
		fallback: false // false or 'blocking',
	};
};

export const getStaticProps: GetStaticProps = ({ params }) => {
	const { line = '' } = params as { line: string };

	return {
		props: {
			line
		},
		revalidate: 60 * 60 * 24
	};
};

export default LinePage;
