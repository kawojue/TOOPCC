interface ISubmitBtn {
    loading?: boolean
    texts: string
    styles?: string
    handler: () => Promise<void>
}

interface JWT {
    roles: string[]
    user: string
}

interface IProfile { params: { profile: string } }

interface IPt { params: { patientId: string } }

interface ModalStates {
    roles: boolean
    avatar: boolean
    username: boolean
    fullname: boolean
    password: boolean
    resignation: boolean
}

interface IModal {
    profile?: any
    state: ModalStates
    dispatch: (obj: ModalActions) => void
}

interface PatientStates {
    sex: string
    date: string
    age: string
    dead: string
    cardNo: string
    card_no: string
    address: string
    fullname: string
    phone_no: string
    deathDate: string
}

interface IComponent {
    get?: any
    set: (get: any) => void
    options?: string[]
}

type ModalActions =
| { type: 'RESIG' }
| { type: 'PSWD' }
| { type: 'ROLES' }
| { type: 'USERNAME' }
| { type: 'FULLNAME' }
| { type: 'AVATAR' }

type PatientActions =
| { type: 'SEX'; payload: string }
| { type: 'AGE'; payload: string }
| { type: 'CARD_NO'; payload: string }
| { type: 'CARDNO'; payload: string }
| { type: 'ADDR'; payload: string }
| { type: 'FULLN'; payload: string }
| { type: 'PHN'; payload: string }
| { type: 'DEAD'; payload: string }
| { type: 'DEATH_D'; payload: string }
| { type: 'DATE'; payload: string }

interface IPatient {
    state: PatientStates
    dispatch: (obj: PatientActions) => void
}