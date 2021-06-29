export interface ServerRootType<T extends object> {
  data?: T
  result: boolean
  message: string
}

export interface IUserInfoResult {
  mobile: string
  userId: string
  hasExamAnswer: boolean
  examResult: ExamResult[]
}

export interface ExamResult {
  id: number
  title: string
  description: string
  calcValue: number
  percent: number
}

export interface Podcast {
  id: number
  uniqueId: string
  contentType: number
  contentTypeTitle: string
  flowId?: any
  flowTitle: string
  pathwayId?: any
  pathwayTitle: string
  title: string
  description: string
  tags: string
  tagTitles: string
  mediaContent: string
  status: number
  statusTitle: string
  createDate: string
}

export interface InterView {
  meetingId: number
  meetingTitle: string
  meetingDate: Data
  status: number
  description?: string
  uniqueId: string
}
