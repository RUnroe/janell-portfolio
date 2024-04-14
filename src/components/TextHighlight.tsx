import { ReactNode } from "react";

interface Props {
  containerClassName?: String,
  children: ReactNode
}

const TextHighlight = ({containerClassName = '', children} : Props) => {
  return ( 
    <div className={`text-highlight ${containerClassName}`}>
      {children}
      {/* TODO: Add highlight here */}
    </div>
   );
}
 
export default TextHighlight;