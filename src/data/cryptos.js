// Mock data for cryptocurrencies
import btcIcon from "../assets/btc-icon.svg";
import ethIcon from "../assets/eth-icon.svg";
import solIcon from "../assets/sol-icon.svg";
import adaIcon from "../assets/ada-icon.svg";

export const cryptos = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    price: 56789.12,
    change: 2.5,
    icon: btcIcon,
    chart: [
      { time: "00:00", price: 56000 },
      { time: "06:00", price: 56200 },
      { time: "12:00", price: 56500 },
      { time: "18:00", price: 56789 },
    ],
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    price: 3200.45,
    change: -1.2,
    icon: ethIcon,
    chart: [
      { time: "00:00", price: 3250 },
      { time: "06:00", price: 3230 },
      { time: "12:00", price: 3210 },
      { time: "18:00", price: 3200 },
    ],
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    price: 110.78,
    change: 0.8,
    icon: solIcon,
    chart: [
      { time: "00:00", price: 108 },
      { time: "06:00", price: 109 },
      { time: "12:00", price: 110 },
      { time: "18:00", price: 110.78 },
    ],
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    price: 0.62,
    change: 4.3,
    icon: adaIcon,
    chart: [
      { time: "00:00", price: 0.58 },
      { time: "06:00", price: 0.6 },
      { time: "12:00", price: 0.61 },
      { time: "18:00", price: 0.62 },
    ],
  },
];
