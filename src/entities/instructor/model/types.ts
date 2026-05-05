export interface Instructor {
  id: string;
  slug: string;
  name: string;
  title: string;
  bio: string;
  photo: string;
  achievements: string[];
  yearsTeaching: number;
  beltRank: string;
  contact?: {
    phone?: string;
    email?: string;
  };
}
