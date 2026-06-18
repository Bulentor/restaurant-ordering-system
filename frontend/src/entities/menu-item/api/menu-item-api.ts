import type { MenuItem } from '../model/types';

export interface MenuQueryParams {
  category?: string;
  search?: string;
}


const mockMenuItems: MenuItem[] = [
  {
    id: 1,
    name: "Борщ по-боярски с пампушками",
    description: "Наваристый борщ на говяжьей грудинке с молодой свеклой, ароматным чесноком и свежей зеленью. Подается с тремя горячими пампушками и фермерской сметаной.",
    price: 490.00,
    image: "/menu-media/borsh.jpg",
    categories: [{ id: 1, name: "Супы" }]
  },
  {
    id: 2,
    name: "Блины со слабосоленым лососем",
    description: "Три пышных домашних блинчика на молоке, скрученных с ломтиками нежной красной рыбы собственного посола и веточкой укропа.",
    price: 520.00,
    image: "/menu-media/blini.jpg",
    categories: [{ id: 2, name: "Блины" }]
  },
  {
    id: 3,
    name: "Пельмени Сибирские ручной лепки",
    description: "Традиционные сытные пельмени со смешанным фаршем из фермерской говядины и свинины со специями. Подаются со сливочным маслом и черным перцем.",
    price: 450.00,
    image: "/menu-media/pelmeni.jpg",
    categories: [{ id: 3, name: "Горячее" }]
  },
  {
    id: 4,
    name: "Пирожки с капустой и яйцом",
    description: "Два сытных пирожка из воздушного дрожжевого теста по старинному рецепту с начинкой из тушеной капусты и отварного яйца.",
    price: 190.00,
    image: "/menu-media/piroshki.jpg",
    categories: [{ id: 4, name: "Выпечка" }]
  },
  {
    id: 5,
    name: "Домашний Квас на ржаном хлебе",
    description: "Освежающий традиционный русский напиток собственного приготовления с легкой кислинкой и ароматом ржаной корочки. 0.5 л.",
    price: 150.00,
    image: "/menu-media/kvas.jpg",
    categories: [{ id: 5, name: "Напитки" }]
  },
  {
    id: 6,
    name: "Щи",
    description: "Традиционный суп на основе капусты. Готовится как наваристый мясной бульон, так и в постном варианте с грибами.",
    price: 490.00,
    image: "/menu-media/Blini.jpg",
    categories: [{ id: 6, name: "Супы" }]
  },
  {
    id: 7,
    name: "Уха с щукой",
    description: "Прозрачный и ароматный рыбный суп, приготовленный на свежей щуке",
    price: 490.00,
    image: "/menu-media/shi.jpg",
    categories: [{ id: 7, name: "Супы" }]
  },
  {
    id: 8,
    name: "Холодец с говяжим языком",
    description: "Нежнейший деликатесный холодец, приготовленный с добавлением премиального говяжьего языка.",
    price: 490.00,
    image: "/menu-media/holodec.jpg",
    categories: [{ id: 8, name: "Холодные блюда" }]
  },
  {
    id: 9,
    name: "Окрошка на квасе",
    description: "Традиционный русский холодный суп, который идеально освежает в жаркий день",
    price: 490.00,
    image: "/menu-media/okroshka.jpg",
    categories: [{ id: 9, name: "Супы" }]
  },
];

export const menuItemApi = {
  async getMenuItems(params?: MenuQueryParams): Promise<MenuItem[]> {
    let filteredItems = [...mockMenuItems];

    if (params?.category) {
      filteredItems = filteredItems.filter(item => 
        item.categories.some(cat => cat.name.toLowerCase() === params.category?.toLowerCase())
      );
    }

    if (params?.search) {
      const searchStr = params.search.toLowerCase();
      filteredItems = filteredItems.filter(item => 
        item.name.toLowerCase().includes(searchStr) || 
        item.description?.toLowerCase().includes(searchStr)
      );
    }

    await new Promise(resolve => setTimeout(resolve, 200));
    return filteredItems;
  },

  async getMenuItemById(id: number): Promise<MenuItem> {
    const item = mockMenuItems.find(p => p.id === Number(id));
    
    if (!item) {
      throw new Error('Блюдо не найдено');
    }

    await new Promise(resolve => setTimeout(resolve, 200));
    return item;
  },
};
