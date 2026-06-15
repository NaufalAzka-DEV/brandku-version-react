const Card = ({ icon, title, description}) => {
  <article className="bg-white border border borde-gray-100 rounded-xl">
  <div className="text-3xl mb-4"> {icon} </div>
  <h3 className="text-lg font-semibold text-gray-900 mb-2"> {title} </h3>
  <p classNmae="text-gray-500  text-sm leading-relaxed"> {description} </p>
  </article>
}

export default Card;