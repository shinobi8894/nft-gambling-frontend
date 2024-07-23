import Button from "@/components/basic/button";

const CrossSectionContent = () => {
  return (
    <div className="flex flex-col p-2 items-center md:items-start text-white max-w-[640px]">
      <h1 className="font-bold mb-5 text-3xl text-center md:text-left lg:text-6xl md:text-5xl sm:text-3xl">
        Cross-Chain Compatibility Like Never Before
      </h1>
      <p className="mb-5 text-center md:text-left">
        Gambly is available on Multiple blockchains, allowing you to play with
        any ERC20 token. Our platform is the first of its kind, offering a
        seamless gaming experience with any token of your choice.
      </p>
      <Button>Connect Wallet</Button>
    </div>
  );
};

export default CrossSectionContent;
