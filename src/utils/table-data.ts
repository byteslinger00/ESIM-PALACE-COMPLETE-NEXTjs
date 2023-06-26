import { DeviceType } from "./device.types";

export const tabledata: Array<DeviceType> = [
    {
        brand: 'Apple',
        devices: [
            'iPhone XR',
            'iPhone XS, XS Max',
            'iPhone 11 (all series)',
            'iPhone SE 2',
            'iPhone 12 (all series)',
            'iPhone 13 (all series)',
            'iPhone 14 (all series)',
            'iPad Pro 11"',
            'iPad Pro 11.9"',
            'iPad Air',
            'iPad Mini'
        ],
        explanations: 'iPhones Purchased from China, Hong Kong or Macao with dual Sims Do Not Support eSim',
    },
    {
        brand: 'Samsung',
        devices: [
            'Samsung Galaxy S20, S20+, Ultra',
            'Samsung Galaxy S21, S21+, S21+ Ultra 5G',
            'Samsung Galaxy Note 20, 20Ultra 5G',
            'Samsung Galaxy Fold',
            'Samsung Galaxy Z Fold 2 5G, Z Fold 3 5G, Z Flip'
        ],
        explanations: 'Single Sim Nano-Sim and/or eSim Models Samsung Galaxy S20 Hybrid Dual Sim dose not Support eSim'
    },
    {
        brand: 'Google',
        devices: [
            'Google Pixel 2, 2 XL',
            'Google Pixel 3, 3 XL',
            'Google Pixel 3a, 3a XL',
            'Google Pixel 4, 4a, 4 XL',
            'Google Pixel 5, 5a',
            'Google Pixel 6 Pro, 6a'
        ],
        explanations: 'Purchased from certain countries has no eSim Support. Check with your Mobile Carrier'
    },
    {
        brand: 'Huawei',
        devices: [
            'Huawei P40, P40 Pro',
            'Huawei P50, P50 Pro',
            'Huawei Mate 40 Pro'
        ],
        explanations: 'P40 Pro + has no eSim Support'
    },
    {
        brand: 'Others',
        devices: [
            'Motorola Razr 2019',
            'Nuu Mobile X5',
            'Gemini PDA',
            'Rakuten MIni',
            'Oppo Find X3 Pro Reno 5A, Reno 6 Pro 5G',
            'Microsoft Pro X, Go 2, Pro LTE Advanced',
            'Acer Swift 3,7',
            'Asus Mini Transformer'
        ],
        explanations: ''
    }
]