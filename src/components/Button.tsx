import Link from 'next/link'
import buttonProps from "@/types/buttonprops"

const Button: React.FC<buttonProps> = (props) => {
  return (
   <>
      <Link className='scroll-smooth uppercase bg-green inline-block rounded-full py-3 px-5 text-white ' href={props.link}>{props.text}</Link>
      </>
   
  )
}

export default Button
