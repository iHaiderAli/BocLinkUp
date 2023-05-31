import { atom } from 'jotai'

export const BocApplicationAtom = atom({
  patternPassword: '',
  scanningPassword: false,
  textPassword:'',
  userName:'',
  userPhone:'',
  question1: {
    id: '',
    question: '',
    answer: '',
  },
  question2: {
    id: '',
    question: '',
    answer: '',
  },
  question3: {
    id: '',
    question: '',
    answer: '',
  },
})
