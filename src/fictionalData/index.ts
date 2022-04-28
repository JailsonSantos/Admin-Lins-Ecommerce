interface UserDataProps {
  name: string;
  active_user: number;
}

interface ProductDataProps {
  name: string;
  sales: number;
}

interface UserRowsProps {
  id: number;
  username: string;
  avatar: string;
  email: string;
  status: string;
  transaction: string;
}

interface ProductRowsProps {
  id: number;
  name: string;
  img: string;
  stock: number;
  status: string;
  price: string;
}

export const userData: UserDataProps[] = [
  {
    name: 'Jan',
    active_user: 4000,
  },
  {
    name: 'Fev',
    active_user: 3000,
  },
  {
    name: 'Mar',
    active_user: 5000,
  },
  {
    name: 'Abr',
    active_user: 2780,
  },
  {
    name: 'Mai',
    active_user: 7890,
  },
  {
    name: 'Jun',
    active_user: 2390,
  },
  {
    name: 'Jul',
    active_user: 9490,
  },
  {
    name: 'Ago',
    active_user: 6490,
  },
  {
    name: 'Set',
    active_user: 8490,
  },
  {
    name: 'Out',
    active_user: 1490,
  },
  {
    name: 'Nov',
    active_user: 5490,
  },
  {
    name: 'Dez',
    active_user: 7490,
  },
];

export const productData: ProductDataProps[] = [
  {
    name: 'Jan',
    sales: 5000,
  },
  {
    name: 'Feb',
    sales: 2000,
  },
  {
    name: 'Mar',
    sales: 7000,
  },
];

export const userRows: UserRowsProps[] = [
  {
    id: 1,
    username: 'Snow',
    avatar: 'https://i.pinimg.com/originals/08/56/22/085622af8231ab6eb78b80eb2add557a.jpg',
    email: 'Jon@gmail.com',
    status: 'active',
    transaction: 'R$ 120,00'
  },
  {
    id: 2,
    username: 'Lannister',
    avatar: 'https://i.pinimg.com/originals/08/56/22/085622af8231ab6eb78b80eb2add557a.jpg',
    email: 'Cer@gmail.com',
    status: 'active',
    transaction: 'R$ 120,00'
  },
  {
    id: 3,
    username: 'Lannister',
    avatar: 'https://i.pinimg.com/originals/08/56/22/085622af8231ab6eb78b80eb2add557a.jpg',
    email: 'Jai@gmail.com',
    status: 'active',
    transaction: 'R$ 120,00'
  },
  {
    id: 4,
    username: 'Stark',
    avatar: 'https://i.pinimg.com/originals/08/56/22/085622af8231ab6eb78b80eb2add557a.jpg',
    email: 'Ary@gmail.com',
    status: 'active',
    transaction: 'R$ 120,00'
  },
  {
    id: 5,
    username: 'Targaryen',
    avatar: 'https://i.pinimg.com/originals/08/56/22/085622af8231ab6eb78b80eb2add557a.jpg',
    email: 'Dae@gmail.com',
    status: 'active',
    transaction: 'R$ 120,00'
  },
  {
    id: 6,
    username: 'Melisandre',
    avatar: 'https://i.pinimg.com/originals/08/56/22/085622af8231ab6eb78b80eb2add557a.jpg',
    email: 'Mel@gmail.com',
    status: 'active',
    transaction: 'R$ 120,00'
  },
  {
    id: 7,
    username: 'Clifford',
    avatar: 'https://i.pinimg.com/originals/08/56/22/085622af8231ab6eb78b80eb2add557a.jpg',
    email: 'Fer@gmail.com',
    status: 'active',
    transaction: 'R$ 120,00'
  },
  {
    id: 8,
    username: 'Frances',
    avatar: 'https://i.pinimg.com/originals/08/56/22/085622af8231ab6eb78b80eb2add557a.jpg',
    email: 'Ros@gmail.com',
    status: 'active',
    transaction: 'R$ 120,00'
  },
  {
    id: 9,
    username: 'Roxie',
    avatar: 'https://i.pinimg.com/originals/08/56/22/085622af8231ab6eb78b80eb2add557a.jpg',
    email: 'Har@gmail.com',
    status: 'active',
    transaction: 'R$ 120,00'
  },
  {
    id: 10,
    username: 'Jatson',
    avatar: 'https://i.pinimg.com/originals/08/56/22/085622af8231ab6eb78b80eb2add557a.jpg',
    email: 'Jat@gmail.com',
    status: 'active',
    transaction: 'R$ 120,00'
  },
];

export const productRows: ProductRowsProps[] = [
  {
    id: 1,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 2,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 3,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 4,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 5,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 6,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 7,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 8,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 9,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 10,
    name: "Apple Airpods",
    img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
];