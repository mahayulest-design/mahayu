export interface PriceItem {
  name: string;
  price: string;
  details?: string;
  highlight?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BookingForm {
  fullName: string;
  phone: string;
  area: string;
  serviceType: string;
  unitCount: string;
  date: string;
  timeSlot: string;
}
