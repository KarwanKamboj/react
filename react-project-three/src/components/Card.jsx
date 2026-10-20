
const Card = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Card

// we can also write it as 

// const Card = ({children}) => {
//   return (
//     <div>
//       {children}
//     </div>
//   )
// }
// export default Card