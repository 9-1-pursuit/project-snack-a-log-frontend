import DevCard from "../Components/DevCard.js";
import heart from "../assets/heart-solid.png"
export default function About() {

  const dev1 = {
    imageURL : "https://i.postimg.cc/fTSwdqcY/Photo.jpg",
    name: "Jahaad Petty",
    githubURL : "https://github.com/PESolut",
    indeedURL : "https://www.linkedin.com/in/supreme-petty-321066249/",
    email: "mailto:jahaadpetty@pursuit.org",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue eget arcu dictum varius duis at consectetur lorem donec. Velit laoreet id donec ultrices tincidunt. Elementum facilisis leo vel fringilla est ullamcorper eget. At in tellus integer feugiat scelerisque varius morbi enim. Volutpat commodo sed egestas egestas fringilla. "
  }

  const dev2 = {
    imageURL : "https://thispersondoesnotexist.com/image",
    name: "Destiny Joyner",
    githubURL : "https://github.com/DestinyJoyner",
    indeedURL : "https://www.linkedin.com/in/destinyjoyner/",
    email: "mailto:anotherEmail@exampleprovider.com",
    description: "Nunc sed velit dignissim sodales ut eu sem integer vitae. Proin sed libero enim sed faucibus. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Odio pellentesque diam volutpat commodo sed egestas egestas. Massa placerat duis ultricies lacus sed turpis tincidunt. Feugiat in fermentum posuere urna."
  }


  const dev3 = {
    imageURL : "https://thispersondoesnotexist.com/image",
    name: "Dan Mazzilli",
    githubURL : "https://github.com/Daniel-Mazzilli",
    indeedURL : "https://www.linkedin.com/in/mazzilli-daniel/",
    email: "mailto:anotherEmail@exampleprovider.com",
    description: "Nunc sed velit dignissim sodales ut eu sem integer vitae. Proin sed libero enim sed faucibus. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Odio pellentesque diam volutpat commodo sed egestas egestas. Massa placerat duis ultricies lacus sed turpis tincidunt. Feugiat in fermentum posuere urna."
  }

  const dev4 = {
    imageURL : "https://thispersondoesnotexist.com/image",
    name: "Salina Malek",
    githubURL : "https://exampleurl3.com",
    indeedURL : "https://www.linkedin.com/in/salina-malek/",
    email: "mailto:anotherEmail@exampleprovider.com",
    description: "Nunc sed velit dignissim sodales ut eu sem integer vitae. Proin sed libero enim sed faucibus. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Odio pellentesque diam volutpat commodo sed egestas egestas. Massa placerat duis ultricies lacus sed turpis tincidunt. Feugiat in fermentum posuere urna."
  }



  return (
      <>
      <h2>About</h2>
      <div className="dev-container">
        <DevCard dev={dev1} />
        <DevCard dev={dev2} />
        <DevCard dev={dev3} />
        <DevCard dev={dev4} />
      </div>
      </>
  );
}
