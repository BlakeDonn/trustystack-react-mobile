export interface Item {
  name: string;
  description: string;
  imageUrl: string;
}

export interface Prebuilt extends Item {
  specifications: string[];
}

export interface Service extends Item { }

export interface SoftwareSolution extends Item { }

