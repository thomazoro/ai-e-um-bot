import { Message } from "discord.js";

export default (message: Message) => {
  let palavras = message.content.split(' ');
  palavras = palavras.filter(p => p.endsWith("ando") || p.endsWith("endo"));
  if(palavras.length > 0) {
    let palavra :string = palavras[0];
    palavra = palavra.substring(0, palavra.length - 3);
    message.channel.send("Ai é um cara que " + palavra);
  }
};