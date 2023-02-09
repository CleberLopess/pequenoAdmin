import { useEffect } from 'react';

//sections
import { Layout } from 'src/components/Layout';
import { Header } from 'src/sections/header';
import { HeroBanner } from 'src/sections/heroBanner';
import { ContentRestaurant } from 'src/sections/content';
import { Footer } from 'src/sections/footer';

//context
import { useFormContext } from 'src/context/useFormContext';

const App = () => {
	const { formData } = useFormContext();
	const { banner, logo, nameRestaurant, instagram, description, whatsapp } =
		formData;

	useEffect(() => {
		const dataEditable = {
			banner,
			logo,
			nameRestaurant,
			whatsapp,
			instagram,
			description,
		};

		if (localStorage.getItem('dataEditable')) {
			return;
		}

		return localStorage.setItem('dataEditable', JSON.stringify(dataEditable));
	}, [banner, logo, whatsapp, nameRestaurant, description, instagram]);

	return (
		<Layout>
			<Header />
			<HeroBanner />
			<ContentRestaurant />
			<Footer />
		</Layout>
	);
};

export default App;
