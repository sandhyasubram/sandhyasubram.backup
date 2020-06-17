import Strings from './Strings';

const Images = {
  SCREENS: {
    HOME: {},
    ABOUT: {},
  },
  DESIGNS: [
    {
      TITLE: "Cake",
      IMAGE_SOURCE: "cake.png",
      LINK: "https://dribbble.com/shots/10986702-Cake",
      CATEGORY: [Strings.IMAGE_CATEGORY.VECTOR],
    },
    {
      TITLE: "Cheeky Ghost",
      IMAGE_SOURCE: "cheeky_ghost.gif",
      LINK: "https://dribbble.com/shots/10986702-Cake",
      CATEGORY: [Strings.IMAGE_CATEGORY.VECTOR, Strings.IMAGE_CATEGORY.ANIMATION],
    },
    {
      TITLE: "Dessert",
      IMAGE_SOURCE: "dessert.png",
      LINK: "https://dribbble.com/shots/11836231-Dessert",
      CATEGORY: [Strings.IMAGE_CATEGORY.VECTOR],
    },
  ],
};

export default Images;
