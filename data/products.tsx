import { Award, Shirt, Tag, PenTool } from 'lucide-react';
import { Product } from '../types';

export const PRODUCTS: Product[] = [
    {
        id: 'round-neck',
        name: 'The Signature Round Neck',
        price: 999,
        originalPrice: 1999,
        tag: 'Daily Driver',
        description: 'Simple is hard to do. We engineered this to be the last T-shirt you’ll ever want to buy. 100% Premium Cotton with a proprietary Bio-Wash finish that feels like a second skin.',
        image: '/product-3d.png',
        rating: 4.8,
        reviews: 420,
        features: [
            {
                icon: Award,
                title: '100% Premium Cotton',
                description: 'Finished with a Bio-Wash. Feels like a second skin—soft, breathable, and cool even in the Indian summer.'
            },
            {
                icon: Shirt,
                title: 'Tailored Comfort Fit',
                description: 'Not boxy, not tight. It hugs the biceps slightly but stays relaxed around the waist.'
            },
            {
                icon: Tag,
                title: 'Built to Last',
                description: 'Reinforced neck ribbing that never loses shape. Wash it 50 times; it stays pitch black.'
            }
        ]
    },
    {
        id: 'polo',
        name: 'The Classic Polo',
        price: 999,
        originalPrice: 2499,
        tag: 'Statement Piece',
        description: 'The bridge between "Casual" and "Commanding". Engineered to stay sharp from 9 AM to 9 PM. Offers structure without the heaviness.',
        image: '/polo-3d.png',
        rating: 4.9,
        reviews: 315,
        features: [
            {
                icon: Award,
                title: 'Fine-Knit Matty Cotton',
                description: 'Offers structure without the heaviness. Drapes perfectly over the shoulders.'
            },
            {
                icon: PenTool,
                title: 'High-Density Collar',
                description: 'Never curls. Most Polos look sloppy after an hour; ours stays sharp all day.'
            },
            {
                icon: Tag,
                title: 'Premium Details',
                description: 'Minimalist branding, premium buttons, and sleeve length that hits exactly right.'
            }
        ]
    }
];
