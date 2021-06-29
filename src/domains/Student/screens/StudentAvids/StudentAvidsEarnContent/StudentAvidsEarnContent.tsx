import { Typography } from '@material-ui/core'
import { FC } from 'react'
import useStudentAvidsListContentStyle from './useStudentAvidsListContentStyle'

export interface IStudentAvidsListContentProps {
  data: string[][]
  classes?: Partial<Record<'root' | 'contentText', string>>
}

const StudentAvidsListContent: FC<IStudentAvidsListContentProps> = ({
  data,
  classes,
}) => {
  const innerClasses = useStudentAvidsListContentStyle({ classes })
  return (
    <ul className={innerClasses.root}>
      {data.map(
        (item, index) =>
          item[0] !== ' ' && (
            <li key={index}>
              <Typography className={innerClasses.contentText} variant="h6">
                {item.map((text) => (
                  <span key={text}>{text}</span>
                ))}
              </Typography>
            </li>
          ),
      )}
    </ul>
  )
}
export default StudentAvidsListContent
