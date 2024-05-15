import exampleData from '../data/example.data.json'
import { ExampleObj } from '../types'

const examples: ExampleObj[] = exampleData as ExampleObj[]

export const getData = (): ExampleObj[] => examples

export const findById = (id: number): ExampleObj | undefined => {
  const example = examples.find(example => example.id === id)
  return example
}

export const addData = (): undefined => undefined
