import {cva, VariantProps} from 'class-variance-authority'

const Button = ({children}) => {
return (
  <button>
    {children}
  </button>
)
}

export default Button