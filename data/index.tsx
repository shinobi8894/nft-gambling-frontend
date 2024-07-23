import CashBag from "@/components/basic/icons/cashbag";
import Space from "@/components/basic/icons/space";
import Support from "@/components/basic/icons/support";
import Token from "@/components/basic/icons/token";
import First from "@/components/basic/icons/first";
import Second from "@/components/basic/icons/second";
import Third from "@/components/basic/icons/third";

interface Step {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const stats = [
  { icon: <Space />, value: "10K +", label: "Active users" },
  { icon: <CashBag />, value: "$1M +", label: "Total wagered" },
  { icon: <Support />, value: "24/7", label: "Live support" },
  { icon: <Token />, value: "5938+", label: "Supported Tokens" },
];

export const steps: Step[] = [
  {
    icon: <First className="w-full h-auto text-textOpacity" />,
    title: "Connect Wallet",
    description:
      "Connect your crypto wallet to the Gambly platform for seamless deposits and withdrawal.",
  },
  {
    icon: <Second className="w-full h-auto" />,
    title: "Play with any ERC20 Token",
    description:
      "Use any ERC20 token for exciting PVP games. Your digital assets, whether mainstream or niche, are your ticket to our ultimate online gaming freedom.",
  },
  {
    icon: <Third className="w-full h-auto" />,
    title: "Connect Wallet",
    description:
      "Connect your crypto wallet to the Gambly platform for seamless deposits and withdrawal.",
  },
];

export const images: string[] = [
  "https://i.postimg.cc/Y9qNW5Gc/Image.png",
  "https://i.postimg.cc/C1bbqwJx/Image.png",
  "https://i.postimg.cc/1z7vYsNH/Image.png",
];

export const logos = [
  { src: "https://i.postimg.cc/43Y7hfyC/Ellipse-8.png", alt: "eth" },
  { src: "https://i.postimg.cc/PqHfddDz/Ellipse-8.png", alt: "bnb" },
  { src: "https://i.postimg.cc/rpbDcB88/Ellipse-8.png", alt: "polygon" },
  { src: "https://i.postimg.cc/yY5tmnYD/Ellipse-8.png", alt: "avalanche" },
  { src: "https://i.postimg.cc/PqHfddDz/Ellipse-8.png", alt: "bnb" },
];

export const casinosData = [
  {
    name: "PEPE Casino",
    image: "https://i.postimg.cc/7PQKsQvM/image.png",
    betVolume: "53.6 ETH",
    games: 12,
    members: 384,
  },
  {
    name: "BNB Casino",
    image: "https://i.postimg.cc/tJSRWG7c/image.png",
    betVolume: "100 ETH",
    games: 8,
    members: 384,
  },
  {
    name: "TG Casino",
    image: "https://i.postimg.cc/vmkN1qQv/image.png",
    betVolume: "762 ETH",
    games: 6,
    members: 384,
  },
  {
    name: "GELATO Casino",
    image: "https://i.postimg.cc/x8yx49Ls/image.png",
    betVolume: "48.2 ETH",
    games: 7,
    members: 384,
  },
  {
    name: "BANANA GUN Casino",
    image: "https://i.postimg.cc/v8WNBtCW/image.png",
    betVolume: "88.7 ETH",
    games: 2,
    members: 384,
  },
  {
    name: "WETH Casino",
    image: "https://i.postimg.cc/FsNnJJQw/image.png",
    betVolume: "35.9 ETH",
    games: 9,
    members: 384,
  },
];

export const faqData = [
  {
    question: "How does Gambly work?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // Add more FAQs as needed
  {
    question: "What features does Gambly offer?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "How can I contact support?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
