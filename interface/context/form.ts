export interface IFormTypes {
  banner?: string;
  logo?: string;
  nameRestaurant?: string;
  number?: string;
  instagram?: string;
  whatsapp?: string;
  description?: string;
}

export interface IContext {
  formData: IFormTypes;
  setFormData: ({
    banner,
    description,
    instagram,
    logo,
    number,
    nameRestaurant,
    whatsapp,
  }: IFormTypes) => void;
}
