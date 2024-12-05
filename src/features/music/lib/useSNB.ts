import { useState } from "react";

const useSNB = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(true);
	}

	const handleClose = () => {
		setIsOpen(false);
	}

	return {
		isOpen,
		handleOpen,
		handleClose
	}
}

export default useSNB;