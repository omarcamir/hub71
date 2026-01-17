import { ReactNode } from 'react'
import { FieldValues, Path } from 'react-hook-form'

export type FormFieldType = 'input' | 'select' | 'textarea' | "checkbox";

export interface FormFieldProps<T extends FieldValues> {
  name: Path<T>
  label?: string
  placeholder?: string
  type?: string
  disabled?: boolean
  icon?: ReactNode
  options?: { id: string|number; labelA: string; labelE: string; value: string }[]
  className?: string
  min?: number
  required?: boolean
}
