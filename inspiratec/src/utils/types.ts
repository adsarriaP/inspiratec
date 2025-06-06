export interface Service {
    icon: string;
    title: string;
    description: string;
    color: 'purple' | 'yellow';
  }
  
  export interface Project {
    title: string;
    description: string;
    gradient: string;
    tags: { text: string; color: 'purple' | 'yellow' | 'gray' }[];
  }