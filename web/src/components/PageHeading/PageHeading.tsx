interface PageHeadingProps {
  heading: string
}

const PageHeading = ({ heading }: PageHeadingProps) => {
  return (
    <div className="border-b-2 border-b-black pb-4 pl-36 pt-14">
      <h1 className="text-xl font-bold">{heading}</h1>
    </div>
  )
}

export default PageHeading
