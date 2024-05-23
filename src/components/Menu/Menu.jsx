import "./Menu.css";


const Menu = () => {
  const dishes = [
    {
      id:1,
      name: "plato 1",
      description: "Este es el plato 1",
      price: 10
    },
    {
      id:2,
      name: "plato 2",
      description: "Este es el plato 2",
      price: 20
    },
    {
      id:3,
      name: "plato 3",
      description: "Este es el plato 3",
      price: 30
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