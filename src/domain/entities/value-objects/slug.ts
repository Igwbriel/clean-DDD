export class Slug {
  public value: string

  constructor(value: string) {
    this.value = value
  }

  static createFromText(text: string){
    const slugText = text
    .normalize("NFKD") 
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // espaços em branco
    .replace(/[^\w-]+/g, '') // o que não são palavras
    .replace(/_/g, '-') // substituir um _ por -
    .replace(/--+/g, '-') // substituir -- por -
    .replace(/-$/g, '') // tirar os - no final da slug  

    return new Slug(slugText)
  }
}