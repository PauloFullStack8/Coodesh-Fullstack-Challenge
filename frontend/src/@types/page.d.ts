export type Page<T> = {
  info: {
    seed: string
    results: number
    page: number
    version: string
  }
  results: Array<T>
}
