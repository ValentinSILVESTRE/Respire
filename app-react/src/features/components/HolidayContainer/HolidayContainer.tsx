import { useState } from 'react';
import HolidayEdit from '../HolidayEdit/HolidayEdit';
import HolidayShow from '../HolidayShow/HolidayShow';

const HolidayContainer = ({
	holiday,
	setHolidays,
	holidays,
	setHolidayToDelete,
	isAdmin,
	setHolidaysToDisplay,
}: any) => {
	const [isEditable, setIsEditable] = useState<Boolean>(false);
	const toggleEdit = () => {
		setIsEditable(!isEditable);
	};
	return (
		<>
			{!isEditable ? (
				<HolidayShow
					holiday={holiday}
					toggleEdit={toggleEdit}
					setHolidayToDelete={setHolidayToDelete}
					isAdmin={isAdmin}
				/>
			) : (
				<HolidayEdit
					holiday={holiday}
					toggleEdit={toggleEdit}
					setHolidays={setHolidays}
					holidays={holidays}
					setHolidaysToDisplay={setHolidaysToDisplay}
				/>
			)}
		</>
	);
};

export default HolidayContainer;
