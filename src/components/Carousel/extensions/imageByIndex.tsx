import image4 from 'assets/images/companies/atlassian.png'
import image3 from 'assets/images/companies/hubspot.png'
import image1 from 'assets/images/companies/jll.png'
import image5 from 'assets/images/companies/juniper.png'
import image6 from 'assets/images/companies/lacoste.png'
import image2 from 'assets/images/companies/netflix.png'

export const images: string[] = [image1, image2, image3, image4, image5, image6]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
