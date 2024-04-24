import iconChat from "../assets/icon-chat.png";
import iconMoney from "../assets/icon-money.png";
import iconSecurity from "../assets/icon-security.png";
import FeatureItem from "../components/FeatureItem";

const featureItem = [
  {
    id: 1,
    title: "You are our #1 priority",
    icon: iconChat,
    content:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    id: 2,
    title: "More savings means higher rates",
    icon: iconMoney,
    content:
      "The more you save with us, the higher your interest rate will be!",
  },
  {
    id: 3,
    title: "Security you can trust",
    icon: iconSecurity,
    content:
      "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

function Home() {
  return (
    <>
      <div className="relative h-[300px] bg-[url('src/assets/bank-tree.jpeg')] bg-cover bg-[0_-50px] bg-no-repeat lg:h-[400px] lg:bg-[0_33%]">
        <section className="relative top-8 mx-auto w-[264px] bg-white p-8 lg:absolute lg:right-12 lg:top-12 lg:m-8 lg:w-[364px]">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="font-bold lg:text-2xl">No fees.</p>
          <p className="font-bold lg:text-2xl">No minimum deposit.</p>
          <p className="font-bold lg:text-2xl">High interest rates.</p>
          <p className="mt-3.5 text-sm lg:text-xl">
            Open a savings account with Argent Bank today!
          </p>
        </section>
      </div>
      <section className="flex flex-col justify-center lg:flex-row">
        <h2 className="sr-only">Features</h2>
        {featureItem.map((item) => (
          <FeatureItem
            key={item.id}
            title={item.title}
            icon={item.icon}
            content={item.content}
          />
        ))}
      </section>
    </>
  );
}

export default Home;
