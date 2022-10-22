interface ResumeProps {
  mdVal?: string,
  setMdVal?: (val: string) => void
}

export function Resume(props: ResumeProps) {
  return (
    <div>{props?.mdVal}</div>
  )
}
