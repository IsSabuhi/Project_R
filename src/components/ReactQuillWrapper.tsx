import { AddAdditionalInformationType } from '@/modules/Resume/AdditionalInformation/AdditionalInformation'
import { FormikErrors } from 'formik'
import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

interface IReactQuillWrapper {
  id: string
  value: string
  onChange: (
    v: string
  ) => Promise<void> | Promise<FormikErrors<AddAdditionalInformationType>>
}

const ReactQuillWrapper = ({ id, value, onChange }: IReactQuillWrapper) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
    ],
  }

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
  ]

  console.log(value)

  return (
    <div>
      <ReactQuill
        id={id}
        value={value}
        modules={modules}
        placeholder="О себе"
        theme="snow"
        formats={formats}
        onChange={onChange}
      />
    </div>
  )
}

export default ReactQuillWrapper
