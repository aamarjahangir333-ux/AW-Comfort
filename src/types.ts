export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Snowflake' | 'Wrench' | 'Box' | 'ShieldCheck' | 'UtensilsCrossed' | 'Clock';
  tag?: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  serviceType: string;
  urgency: 'emergency' | 'today' | 'scheduled';
  message: string;
}
