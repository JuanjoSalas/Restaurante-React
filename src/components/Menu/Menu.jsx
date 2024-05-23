import "./Menu.css";


const Menu = (props) => {
    console.log(props.dish.name);
  return (
    <div className="text-Menu">Name: {props.dish.name} Description: {props.dish.description} price: {props.dish.price} </div>
  )
}

export default Menu