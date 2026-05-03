import Workcard from "./workcard.js";

export default function WorkGrid({ cards = [] }) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 flex flex-col items-center gap-6 md:grid md:grid-cols-[repeat(2,max-content)] md:justify-center md:justify-items-center md:gap-x-10 md:gap-y-10">
      {cards.map((card) => (
        <Workcard key={card.id} {...card} />
      ))}
    </div>
  );
}



