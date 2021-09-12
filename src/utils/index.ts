export const capitalizeFirstLetter = (str: string) => {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

export const checkListItemById = (arr: any[], id: number) => {
  return !!arr.find(item => item.id === id);
};