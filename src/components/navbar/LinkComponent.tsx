import { NavLink } from 'react-router-dom'

interface LinkParams {
  name: string;
  to: string
}

const LinkComponent = (params: LinkParams) => {
  return (
    <NavLink 
      to={params.to} 
      className="block font-semibold text-xl relative border-white hover:border-b-[3px]" 
      style={
        ({ isActive }) => {
          if(isActive) return {borderBottomWidth: 3, borderBlockColor: '#00666A', color: '#00666A'}
      }}
    >
      {params.name}
    </NavLink>
  )
}

export default LinkComponent