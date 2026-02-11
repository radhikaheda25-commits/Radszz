
import { FoodItem } from './types';

export const FOOD_ITEMS: FoodItem[] = [
  {
    id: '1',
    name: 'Signature Truffle Burger',
    brand: 'Burger Lab',
    price: 18.50,
    originalPrice: 22.00,
    description: 'Artisanal patties & secret truffle sauce',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB10Umw2afE0VaCJThFqKiQOhAdawNLBYMr_XVy8_rgAB_ZjYAMnsuUaot4GB9-pjnrZjDYqB4yAITRJbXQjG-bUX_2hTevDN0TJVIC1fCX4DuVbKQHZj9JAavXNMB6eKyPrKMc5tx5hwYGgwh91nEQRTpVA_QkeflQ7SqynwSUmJmKZjMDZJVMD6RN7qGWGbwcptyjdEcnj-gFEQc5YRxyucUT7jz8mRd8aM5n9axDoYqzCf9E3OR0FmfTJkpn93nW4qu1YNacnM',
    rating: 4.9,
    time: '15-20 mins',
    category: 'American',
    isOffer: true
  },
  {
    id: '2',
    name: 'Omakase Box',
    brand: 'Sushi Studio',
    price: 32.00,
    description: 'Premium fresh sashimi and nigiri selection',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHhNOWKmDRe3-yO-GmQCag6l7kbj1M9os7V86j7YGE39qup-3AD2T89yjN9J0k4ezYaeC73XcMGgDRHVrdrCmu2VzmkkIILegJlQDVXrUzR4sXezcJwaUyesxMSvn03c07K3WFdx5pD62uP4GLb2jNKN8uC8HFW2ZuNXm5OYVPS0KqZO1cxl8PXKGGR-BxW-zV_skxlTyqL6v3yMHCx5kS230C9lZzdM3gA4V9sZ3HSZEu3JIhStOjbzp-EuSTXcmk1HfgfFYqWJg',
    rating: 4.8,
    time: '25-35 mins',
    category: 'Japanese'
  },
  {
    id: '3',
    name: 'Spicy Paneer Box',
    brand: 'Wok Master',
    price: 8.99,
    originalPrice: 12.50,
    description: 'Wok-fired paneer with house chili glaze',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwFv6H-zLaaIzCd79m7wcO2zvPyUMBefIAHlmK3UbH2V8xQXFYmFaLc6STne1XxIFXyf_PJi3f1PQmm50n5F6am6nzTrak26TXEqV-tIoSm_nOmaxeFJG8bijy5lpjNgurY95S2bBz18slBPrxG7OKLQkBhADNGaF8nKvoFyfmLKwFkpvJT4fZ9MWDpZlz0ywdwv6nVJt7GdkARHLLt6_jcUGAs-SEazn-uaF5iuuuzWJ_j121daUbaWAz7X5jslgNCVyPgUAt51g',
    rating: 4.7,
    time: '20-25 mins',
    category: 'Asian',
    isOffer: true
  },
  {
    id: '4',
    name: 'Classic Chicken Bundle',
    brand: 'CloudBite',
    price: 12.99,
    originalPrice: 18.50,
    description: 'Main + Side + Drink',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgmB7leyoaMeNNqpfACTeiMaso0OAawItpaOTxHHv1oAQ7kB-cXBZLAr471vfbCwBoeu93_djBX9zVCdqS22aLx3wHW0k2aXNg38Uan8ibX9Mi-ePUWmnLWCm8A9TZ0OsMxTY5hWKo6jPC9GL2_90aP3UQ0F6HerlmyS9D5J20Dbohu-nJg2sCfHtIEVDDygr7npJ77H6BUvyWyuIY5qTNVrt9dY7EMqnIABBavPwc7-j284aApeguAAGVKfK9X1JSORJywv-6Z1M',
    rating: 4.6,
    time: '30-40 mins',
    category: 'American'
  }
];

export const BRANDS = ['All Brands', 'Burger Lab', 'Sushi Studio', 'Wok Master', 'CloudBite', 'Pasta Co.'];
