/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import axios from '@/app/api/instance'
import usePatient from '@/hooks/usePatient'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import throwError from '@/utils/throwError'
import Patients from '@/components/Patients'
import { SpinnerTwo } from '@/components/Spinner'

const page = () => {
    const router = useRouter()
    const { token }: any = usePatient()
    const [patients, setPatients] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const getAllPatients = async (token: string) => {
        setLoading(true)
        await axios.get(`/api/patients`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res: any) => setPatients(res.data?.patients))
        .catch((err: any) => {
            throwError(err)
            setTimeout(() => {
                router.push('/staff/login')
            }, 500)
        }).finally(() => setLoading(false))
    }

    useEffect(() => {
        if (token) (async () => await getAllPatients(token))()
    }, [token])

    if (loading) return <SpinnerTwo />

    return <Patients patients={patients} />
}

export default page