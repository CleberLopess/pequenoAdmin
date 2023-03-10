import { useEffect, useState } from 'react';

//styles
import * as S from './styled';

//context
import { useFormContext } from 'src/context/useFormContext';

//interface
import { IFormTypes } from 'interface/context/form';

export const ContentRestaurant = () => {
	const { formData } = useFormContext();
	const { nameRestaurant, instagram, whatsapp, description } = formData;

	const [dataLocalStorage, setDataLocalStorage] = useState<IFormTypes>();

	useEffect(() => {
		if (localStorage) {
			const dataLocal = localStorage.getItem('dataEditable');
			const parse: IFormTypes = JSON.parse(dataLocal || '');

			setDataLocalStorage(parse);
		}
	}, []);

	return (
		<S.Content>
			<S.TitleAndLinks>
				<S.Title>{dataLocalStorage?.nameRestaurant ?? nameRestaurant}</S.Title>
				<S.Links>
					<S.ButtonLinks
						href={` https://www.instagram.com/${
							dataLocalStorage?.instagram ?? instagram
						}`}
						target="_blank"
					>
						<S.ImageSocials
							src={'/images/instagram.png'}
							alt="instagram"
							width={30}
							height={30}
						/>
					</S.ButtonLinks>
					<S.ButtonLinks
						href={` https://wa.me/${dataLocalStorage?.instagram ?? whatsapp}`}
						target="_blank"
					>
						<S.ImageSocials
							src={'/images/whatsapp.png'}
							alt="whatsapp"
							width={30}
							height={30}
						/>
					</S.ButtonLinks>
				</S.Links>
			</S.TitleAndLinks>
			<S.Description
				dangerouslySetInnerHTML={{
					__html: `${dataLocalStorage?.description ?? description}`,
				}}
			/>
		</S.Content>
	);
};
