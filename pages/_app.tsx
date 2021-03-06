import React from 'react';
import 'swiper/css/bundle';
import '../src/sass/style.scss';
import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { UiProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SWRConfig
			value={{
				refreshInterval: 300000,
				fetcher: (resource, init) => fetch(resource, init).then((res) => res.json())
			}}
		>
			<UiProvider>
				<Component {...pageProps} />
			</UiProvider>
		</SWRConfig>
	);
}

export default MyApp;
