import { ReactNode } from "react";

interface Props {
  containerClassName?: string,
  children: ReactNode
}

const TextHighlight = ({containerClassName = '', children} : Props) => {
  return ( 
    <div className={`text-highlight ${containerClassName}`}>
      {children}
      <div className="hightlight-block"></div>
    </div>
   );
}
 
export default TextHighlight;