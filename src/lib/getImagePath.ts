export const getImagePath = (imagePath?: string, fullsize?: boolean) => {
  return imagePath ? `https://image.tmdb.org/t/p/${fullsize ? "original" : "w500"}/${imagePath}` : "https://i.ibb.co/vVvBpzZ/360-F-482375378-9q1-OVUTCIKY029-UGNh-W0vb-OG6b-Nu-K3-SX.jpg";
};
