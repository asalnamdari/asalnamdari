import { Button, Typography } from '@material-ui/core'
import PrDropDown from 'components/PrDropDown'
import PrPodcast from 'components/PrPodcast'
import { useGetExamTags } from 'domains/Grader/services'
import { Formik, FormikConfig } from 'formik'
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { object as YupObject, string as YupString } from 'yup'
import messages from './GraderHome.messages'
import useGraderHomeStyle from './useGraderHomeStyle'

interface IValues {
  category1Id: number
  category2Id: number
  category3Id: number
}
const GraderHome: FC = () => {
  const classes = useGraderHomeStyle()
  const { formatMessage } = useIntl()
  const validationSchema = YupObject().shape({
    categoryId: YupString(),
  })
  const { push } = useHistory()
  const { path } = useRouteMatch()
  const { data } = useGetExamTags()

  const initialValues: IValues = {
    category1Id: 0,
    category2Id: 0,
    category3Id: 0,
  }

  const onSubmit: FormikConfig<typeof initialValues>['onSubmit'] = (values) => {
    push(
      `${path}/skils?${
        values.category1Id !== 0 ? `category1Id=${values.category1Id}` : ''
      }${values.category2Id !== 0 ? `&category2Id=${values.category2Id}` : ''}${
        values.category3Id !== 0 ? `&category3Id=${values.category3Id}` : ''
      }`,
    )
  }
  return (
    <div className={classes.root}>
      <PrPodcast
        title={formatMessage(messages.podcastTitle)}
        src={`${process.env.REACT_APP_ROOT_ASSETS}/YmeQY074oL/8plaMAaM4R/origin_uMizIMZN93Z6oA26V4Bdbd6tuftDUqivQFqjUihx.mp4`}
      />
      <Typography color="textPrimary" variant="h2" className={classes.title}>
        {formatMessage(messages.pageTitle)}
      </Typography>
      <Formik {...{ initialValues, validationSchema, onSubmit }}>
        {({
          values: { category1Id, category2Id, category3Id },
          handleSubmit,
        }) => {
          const isDisabled = ![
            category1Id === 0,
            category2Id === 0,
            category3Id === 0,
          ].includes(false)
          return (
            <div className={classes.form}>
              <div className={classes.dropDown}>
                <PrDropDown
                  name="category1Id"
                  indexText="۱"
                  data={data?.data ?? []}
                />
              </div>
              <div className={classes.dropDown}>
                <PrDropDown
                  name="category2Id"
                  indexText="۲"
                  data={data?.data ?? []}
                />
              </div>
              <div className={classes.dropDown}>
                <PrDropDown
                  name="category3Id"
                  indexText="۳"
                  data={data?.data ?? []}
                />
              </div>
              <Button
                type="submit"
                className={classes.submitBtn}
                size="large"
                disabled={isDisabled}
                onClick={() => handleSubmit()}
              >
                {formatMessage(messages.subminText)}
              </Button>
            </div>
          )
        }}
      </Formik>
    </div>
  )
}

export default GraderHome
