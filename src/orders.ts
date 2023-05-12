
export interface Order { 

    name?: string;
    
    description?: string;
    
    
};


export const tool: Order[] = [
    { name: 'Молоток', description: 'Инструмент для забивания гвоздей' },
    { name: 'Топор', description: 'Инструмент для рубки деревьев '},
    { name: 'Отвёртка', description: 'Инструмент для завинчивания болтов, саморезов' },
    
];

export const garden: Order[] = [
    { name: 'Лопата', description: 'Садовый инвертарь для вскапывания земли'},
    { name: 'Лейка', description: 'Садовый инвертарь для полива'},
];


export const household: Order[] = [
    { name: 'Салфетки', description: 'Гигиенический уход'},
    { name: 'Чистящее средство', description: 'Средство для уборки'},
    { name: 'Губки', description: 'Инструмент для уборки'},
];