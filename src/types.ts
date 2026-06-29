export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to look up Lucide icons dynamically
  details: string[]; // Expanded list of what this service covers
}

export interface ConsultationRequest {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
  createdAt: string;
  status: 'pending' | 'processing' | 'contacted' | 'resolved';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  text: string;
  rating: number;
}
