'use client'

import { Button, Input, Popover, PopoverContent, PopoverTrigger, Textarea, divider } from "@nextui-org/react"
import * as actions from '@/actions'
import { useFormState } from "react-dom"
import FormButton from "../common/form-button"

export default function TopicCreateForm() {
    const [formState, action] = useFormState(actions.createTopic, {
        errors: {},
    })

    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Button color="primary">Create a Topic</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={action}>
                    <div className="flex flex-col gap-4 p-4 w-80">
                        <h3 className="text-lg">
                            Create a Topic
                        </h3>
                        <Input isInvalid={!!formState.errors.name} errorMessage={formState.errors.name?.join(', ')} name="name" label="Name" labelPlacement="outside" placeholder="Name" />
                        <Textarea isInvalid={!!formState.errors.description} errorMessage={formState.errors.description?.join(', ')} name="description" label="Topic" labelPlacement="outside" placeholder="Describe your topic" />
                        
                        {formState.errors._form 
                            ? <div className="rounded p-2 bg-red-200 border border-red-400">
                                {formState.errors._form?.join(', ')}
                                </div> 
                            : null
                        }

                        <FormButton>Save</FormButton>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    )
}