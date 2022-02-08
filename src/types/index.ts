/**
 * Storing all enums, types, & interfaces here for simplicity,
 * but should probably be stored separately in a larger project
 * */

// ******* Enums *******
export enum NutrientKey {
  Fat = 'fat',
  Protein = 'protein',
  Carbs = 'carbs',
}

// ***** Interfaces *****
export interface ICategoryListItem {
  id: string;
  image?: string;
  name?: string;
}

export interface INutrients {
  key: NutrientKey;
  label: string;
  caloriesPerGram: number;
  grams?: number;
  actualCalories?: number;
  color?: string;
}

export interface INutritionData {
  unit: string;
  servingSize: number;
  fat: number;
  protein: number;
  carbs: number;
  calories: number;
}

export interface IProduct {
  id: string | number;
  name: string;
  desc: string[];
  category: string;
  price: number;

  weight: {
    value: number;
    unit: string;
  };

  image: string;
  nutrition: INutritionData;
}

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface IBreadcrumb {
  name: string;
  path?: string;
}
