'use client'

import { Button } from "@nextui-org/react"
import { ReactNode } from "react"
import { useFormStatus } from "react-dom"

interface FormButtonProps {
    children: ReactNode
}

export default function FormButton({ children }: FormButtonProps) {
    const { pending } = useFormStatus()

    return (
        <Button type="submit" isLoading={pending}>
            {children}
        </Button>
    )
}