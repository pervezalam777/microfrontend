
export const banner = {
  list:[
    { pId:'p001', img:'/assets/banner/banner-01.jpg', alt:'computer' },
    { pId:'p002', img:'/assets/banner/banner-02.jpg', alt:'jewel' },
    { pId:'p003', img:'/assets/banner/banner-03.jpg', alt:'home' },
    { pId:'p004', img:'/assets/banner/banner-04.jpg', alt:'clothes' },
    { pId:'p005', img:'/assets/banner/banner-05.jpg', alt:'shoes' },
  ]
};
export const cards = {
  list:[
    {
      type:'singleCard',
      heading:'Up to 40% off | Smartphone Upgrade',
      img:'',
      button: {
        label:'sell all deals',
        href: '/product-list?category=phone&filter=discounts'
      }
    },
    {
      type:'fourCard',
      heading:'Revamp your home in style',
      items:[
        {
          cid:'c001',
          img:'',
          label:'Bedsheets, Curtains & more'
        },
        {
          cid:'c002',
          img:'',
          label:'Home decoration'
        },
        {
          cid:'c003',
          img:'',
          label:'Home storage'
        },
        {
          cid:'c004',
          img:'',
          label:'Lighting solutions'
        }

      ],
      button: {
        label:'explore all',
        href: '/products?category=home-appliance'
      }
    }
  ]
};
export const dealOfTheDay = {
  heading:'Today\'s Deals',
  button: {
    label:'See all details',
    href:'/deals-of-day'
  },
  list: [
    {
      cid:'c001',
      img:'',
      priceRange:'Rs.199.00 - Rs.16,499.00'
    },
    {
      cid:'c002',
      img:'',
      priceRange:'Rs.999.00 - Rs.2,499.00'
    },
    {
      cid:'c003',
      img:'',
      priceRange:'Rs.699.00 - Rs.999.00'
    },
    {
      cid:'c004',
      img:'',
      priceRange:'Rs.6999.00 - Rs.9999.00'
    },
    {
      cid:'c005',
      img:'',
      priceRange:'Rs.6999.00 - Rs.9999.00'
    }
  ]
};
