export interface NavItem {
  name: string
  href: string
}

export interface Service {
  id: string
  title: string
  shortTitle: string
  description: string
  longDescription: string
  features: string[]
  icon: string
  gradient: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  linkedin: string
}

export interface FAQ {
  category: string
  questions: {
    question: string
    answer: string
  }[]
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  featured: boolean
}

export interface Stat {
  value: string
  label: string
}

export interface Value {
  title: string
  description: string
  icon: string
}
