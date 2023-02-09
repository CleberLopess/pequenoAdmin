import { IContext, IFormTypes } from "interface/context/form";
import React, { createContext, ReactNode, useState } from "react";

export type ChildrenType = {
  children: ReactNode;
};

export const FormContext = createContext({} as IContext);

export const FormProvider = ({ children }: ChildrenType) => {
  const [formData, setFormData] = useState<IFormTypes>({
    banner: "images/capa.jpg",
    logo: "images/logomarca.jpg",
    nameRestaurant: "Que Barbada Restaurant's",
    number: "000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
