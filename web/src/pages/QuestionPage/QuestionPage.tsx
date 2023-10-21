import { MetaTags } from '@redwoodjs/web'

const QuestionPage = ({ id }) => {
  console.log({ id })
  return (
    <>
      <MetaTags title="Question" description="Question page" />

      <h1>QuestionPage</h1>
    </>
  )
}

export default QuestionPage
