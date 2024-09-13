class Restaurante {
  img: string;
  description: string;
  nota: string;
  estrela: string;
  title: string;
  tag: string[];
  id: number;

  constructor(
    id: number,
    img: string,
    description: string,
    nota: string,
    estrela: string,
    title: string,
    tag: string[],
  ) {
    this.id = id;
    this.img = img;
    this.description = description;
    this.nota = nota;
    this.estrela = estrela;
    this.title = title;
    this.tag = tag;
  }
}

export default Restaurante;
