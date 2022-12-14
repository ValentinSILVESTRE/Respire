import { useState } from 'react';
import { IHoliday } from '../../../services/InterfacesServices/IHolidayService';
import { IUser } from '../../../services/InterfacesServices/IUserService';
import AbsenceForm from '../AbsenceForm/AbsenceForm';
import AbsenceList from '../AbsenceList/AbsenceList';

interface IAbsencesProps {
	user: IUser;
	setUser: Function;
	holidays: IHoliday[] | null;
	errors: any;
	setErrors: Function;
}

const Absences = ({
	user,
	setUser,
	holidays,
	errors,
	setErrors,
}: IAbsencesProps) => {
	const [showAbsenceForm, setShowAbsenceForm] = useState<Boolean>(false);

	const toggleShowAbsenceForm = () => {
		setShowAbsenceForm(!showAbsenceForm);
	};

	return (
		<>
			{showAbsenceForm ? (
				<AbsenceForm
					user={user}
					setUser={setUser}
					setShowAbsenceForm={setShowAbsenceForm}
					holidays={holidays}
					toggleShowAbsenceForm={toggleShowAbsenceForm}
					errors={errors}
					setErrors={setErrors}
				/>
			) : (
				<AbsenceList
					user={user}
					setUser={setUser}
					holidays={holidays}
					setShowAbsenceForm={setShowAbsenceForm}
					toggleShowAbsenceForm={toggleShowAbsenceForm}
					errors={errors}
					setErrors={setErrors}
				/>
			)}
		</>
	);
};

export default Absences;
