export interface IFormTypes {
  banner?: string;
  logo?: string;
  nameRestaurant?: string;
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
    nameRestaurant,
    whatsapp,
  }: IFormTypes) => void;
}
