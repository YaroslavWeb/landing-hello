import imageByIndex from './extensions/imageByIndex'
import * as S from './styles'

interface I_CarouselProps {
  slides: number[]
}

export const Carousel: React.FC<I_CarouselProps> = ({ slides }: I_CarouselProps) => {
  return (
    <S.CarouselWrapper>
      {slides.map((index) => (
        <img key={index} src={imageByIndex(index)} alt='company' />
      ))}
    </S.CarouselWrapper>
  )
}
