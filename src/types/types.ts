import type { JSX, ReactNode } from 'react';

export type HeaderProps = {
  isScrolled: boolean;
};

export type ServiceCardProps = {
   icon: React.ReactNode;
  title: string;
  description: string;
  featured?: boolean;
};

export type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  color: string; 
  stats: string;
  index: number;
};

export type TestimonialCardProps = {
  name: string;
  role: string;
  text: string;
  company: string;
  active: boolean;
};
export interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  featured?: boolean;
  category: string;
  path?: string; 
}

export interface Category {
  id: string;
  name: string;
}