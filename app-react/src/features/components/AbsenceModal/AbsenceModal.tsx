interface IAbsenceModalProps {
	absenceToDeleteID: string;
	deleteAbsence: Function;
}

const AbsenceModal = ({
	absenceToDeleteID,
	deleteAbsence,
}: IAbsenceModalProps) => {
	return (
		<div
			id="deleteAbsence"
			className="modal fade"
			tabIndex={-1}
			data-bs-dismiss="modal"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">
							Confirmation de suppression
						</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
						<p>
							Confirmez-vous la suppression de la demande suivante
							?
						</p>
						<p>Date de début :</p>
						<p>Date de fin :</p>
						<p>Type de congé :</p>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-danger"
							data-bs-dismiss="modal"
						>
							Annuler
						</button>
						<button
							onClick={() => deleteAbsence(absenceToDeleteID)}
							type="button"
							className="btn btn-success"
						>
							Valider
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AbsenceModal;
