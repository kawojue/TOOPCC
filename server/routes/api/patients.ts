import { Router } from 'express'
import {
    add, edit, addDiagnosis, remove,
    deleteDianosis, editDiagnosis,
    addRecommendation, editExtension,
    deletExtension, deleteRecommendation
} from '../../controllers/patients'
import jwtVerify from '../../middlewares/jwtVerify'
import verifyRoles from '../../middlewares/verifyRoles'

const patients: Router = Router()

patients.use([jwtVerify, verifyRoles("admin", "hr")])

patients.post('/add', add)
patients.route('/:card_no')
    .put(edit)
    .delete(remove)

patients.post('/diagnosis/:card_no', addDiagnosis)

patients.route('/diagnosis/:card_no/:idx')
    .put(editDiagnosis)
    .delete(deleteDianosis)

patients.route('/recommendation/:card_no')
    .put(addRecommendation)
    .delete(deleteRecommendation)

patients.route('/recommendation/extension/:card_no/:idx')
    .put(editExtension)
    .delete(deletExtension)

export default patients