import { IAbsence } from '../Absence/IAbsence';

export type UserRole = 'admin' | 'manager' | 'employee';

export interface IUser {
	_id: string;
	firstname: string;
	lastname: string;
	email: string;
	password?: string;
	roles: UserRole[];
	absences: IAbsence[];
	employees: string[]; // IDs
	superior: string; // ID
}
