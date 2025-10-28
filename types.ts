
export enum Role {
  CITOYEN = 'Citoyen',
  AGENT = 'Agent de collecte',
  MANAGER = 'Manager',
}

export interface User {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  role: Role;
}

export enum WasteType {
  PAPIERS = 'Papiers',
  VERRES = 'Verres',
  PLASTIQUES = 'Plastiques',
  ORGANIQUES = 'Organiques',
  ELECTRONIQUES = 'Électroniques',
  METALLIQUES = 'Métalliques',
}

export interface PointDepot {
  id: string;
  nom: string;
  localisation: { lat: number; lng: number };
  type: 'Point de dépôt' | 'Centre de recyclage';
  typeDechetAccepte: WasteType[];
}

export interface StatData {
  name: string;
  tonnes: number;
}
