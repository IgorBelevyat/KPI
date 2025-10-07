export interface Customer {
    login: string;          
    passwordHash: string;       
    role: string;
    personal_data?: string; 
    cart_data?: string; 
}


export interface Category {
  id: string;                 
  name: string;
  category_nesting_level: number;
}

export interface Product {
  id: string;
  images?: string;      
  name: string;
  description?: string;
  price: number;
  quantity: number;
  categoryId: string;
}


export interface OrderItem {
  id: string;
  date: string;
  price_at_time_of_purchase: number;
  payment_method: string;
  shipment_data?: string;
  bill_generation?: string;
  quantity: number;
  productId: string;
  customerId: string;
}

export interface Attribute {
  id: string;
  name: string;
  unit_of_measurement?: string;
  attribute_nesting_level?: number;
}

export interface AttributeValue {
  id: string;
  value: string;
  attributeId: string;
  productId?: string | null;
}

export interface CategoryAttributeValue {
  categoryId: string;      
  attributeValueId: string;  
}