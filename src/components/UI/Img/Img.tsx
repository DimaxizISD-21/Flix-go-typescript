import {FC, useEffect, useState} from "react";
import {ImgProps} from "../../../types/img";

const Img: FC<ImgProps> = ({srcImg, alt, ...props}) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const preloadImg = "https://via.placeholder.com/276x414.svg/?text=Image loading...";

  const checkImageOnLoading = (imgSource: string) => {
    let img = new Image();
    img.src = imgSource;
    img.onload = () => {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    checkImageOnLoading(srcImg);
    return () => {
      setIsLoaded(false);
    }
  }, [srcImg]);

  return isLoaded ? <img {...props} src={srcImg} alt={alt}/> : <img {...props} src={preloadImg} alt={alt}/>;
};

export default Img;
