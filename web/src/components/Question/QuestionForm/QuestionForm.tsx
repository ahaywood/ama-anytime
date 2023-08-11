import type { EditQuestionById, UpdateQuestionInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormQuestion = NonNullable<EditQuestionById['question']>

interface QuestionFormProps {
  question?: EditQuestionById['question']
  onSave: (data: UpdateQuestionInput, id?: FormQuestion['id']) => void
  error: RWGqlError
  loading: boolean
}

const QuestionForm = (props: QuestionFormProps) => {
  const onSubmit = (data: FormQuestion) => {
    props.onSave(data, props?.question?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormQuestion> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="question"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Question
        </Label>

        <TextField
          name="question"
          defaultValue={props.question?.question}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="question" className="rw-field-error" />

        <Label
          name="answer"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Answer
        </Label>

        <TextField
          name="answer"
          defaultValue={props.question?.answer}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="answer" className="rw-field-error" />

        <Label
          name="authorId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Author id
        </Label>

        <NumberField
          name="authorId"
          defaultValue={props.question?.authorId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="authorId" className="rw-field-error" />

        <Label
          name="directedAtId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Directed at id
        </Label>

        <NumberField
          name="directedAtId"
          defaultValue={props.question?.directedAtId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="directedAtId" className="rw-field-error" />

        <Label
          name="archive"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Archive
        </Label>

        <CheckboxField
          name="archive"
          defaultChecked={props.question?.archive}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="archive" className="rw-field-error" />

        <Label
          name="reuseQuestionId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reuse question id
        </Label>

        <NumberField
          name="reuseQuestionId"
          defaultValue={props.question?.reuseQuestionId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'undefined'}
        />

        <FieldError name="reuseQuestionId" className="rw-field-error" />

        <Label
          name="followupQuestionId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Followup question id
        </Label>

        <NumberField
          name="followupQuestionId"
          defaultValue={props.question?.followupQuestionId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'undefined'}
        />

        <FieldError name="followupQuestionId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default QuestionForm
