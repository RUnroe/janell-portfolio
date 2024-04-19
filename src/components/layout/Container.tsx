import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

const Container = ({children}: Props) => {
  return ( 
    <section className="content">
      {children}
    </section>
   );
}
 
export default Container;