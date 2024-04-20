
interface Props {
  title: string,
  url: string,
  iconSrc: string,
}

const SocialIcon = ({title, url, iconSrc}: Props) => {
  return ( 
    <a 
      href={url} 
      title={title}
      target="_blank" 
    >
      {iconSrc}
    </a>
   );
}
 
export default SocialIcon;