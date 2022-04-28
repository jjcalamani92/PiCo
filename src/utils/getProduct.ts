import { IProduct } from '../../interfaces';

export const getProductBySubCategory = (
	products: IProduct[],
	subCategory: string
) => {
	const validCategory = [
		'chamarras',
		'poleras',
		'leggins',
		'sudaderas',
		'blusas',
		'protector_de_chasis',
		'masilla',
		'primer',
		'mateante',
		'kit',
		'juego'
	];
	if (!validCategory.includes(subCategory)) {
		throw new Error(`Tipo de categoria '${subCategory}' no es correcto`);
	}
	return products.filter(
		(product: { subCategory: string }) => product.subCategory === subCategory
	);
};
