import { useState, useEffect } from 'react';
import Image from 'next/image';

import { StyledPopup, Close, Icon } from './Popup.styles';
import { IImage } from '@utils/types';

export interface IPopup {
	text: {
		html: string;
	};
	icon: IImage;
	closable?: boolean;
	className?: string;
}

export const Popup = ({ icon, text, closable = false, className }: IPopup) => {
	const [visible, setVisible] = useState<boolean>(true);

	const sessionStorageItem = 'submitPopup';

	useEffect(() => {
		const saved = sessionStorage.getItem(sessionStorageItem);
		!saved ? setVisible(true) : setVisible(JSON.parse(saved));
	}, []);

	useEffect(() => {
		sessionStorage.setItem(sessionStorageItem, JSON.stringify(visible));
	}, [visible]);

	return !closable || visible ? (
		<StyledPopup className={className}>
			<Close onClick={() => setVisible(false)} closable={closable}>
				<Image src="/icons/close.svg" alt="White close icon" width={12} height={12} />
			</Close>
			<Icon>
				<Image src={icon.url} alt={icon.alt} width={28} height={28} />
			</Icon>
			<div dangerouslySetInnerHTML={{ __html: text.html }} />
		</StyledPopup>
	) : null;
};
