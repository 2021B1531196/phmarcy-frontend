export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Test {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
}

export interface Appointment {
  id: string;
  userId: string;
  testId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed';
}