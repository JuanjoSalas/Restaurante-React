import "./Menu.css";


const Menu = () => {
  const dishes = [
    {
      id:1,
      name: "Burger 1",
      description: "Esta es la Burger 1",
      price: 10
    },
    {
      id:2,
      name: "Burger 2",
      description: "Esta es la Burger 2",
      price: 12
    },
    {
      id:3,
      name: "Burger 3",
      description: "Esta es la Burger 3",
      price: 15
    }
  ]

  const printDishes = dishes.map(dish =>{ 
  return <div key={dish.id}>
    <p>{dish.name}</p>
    <p>{dish.description}</p>
    <p>{dish.price} €</p>
  </div>
});

  return (
    <div>{printDishes}</div>
  )
}

export default Menu