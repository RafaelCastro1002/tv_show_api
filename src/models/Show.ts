export class Show {
  title: string
  premiere: Date
  isRunning?: boolean
  language: string
  mainGenre: string
  posterUrl?: string

  constructor(obj: Show) {
    const { title, premiere, isRunning, language, mainGenre, posterUrl } = obj 
    this.title = title
    this.premiere = new Date(premiere)
    this.isRunning = isRunning
    this.language = language
    this.mainGenre = mainGenre
    this.posterUrl = posterUrl
  }
}
