import Image from "next/image";
import { SiGithub, SiGmail, SiTwitter } from "react-icons/si";

const AboutMe = () => {
  return (
    <div className="grid pt-24 dark:text-gray-300">
      <Image
        className="rounded-full mx-auto drop-shadow-xl p-8"
        src="/images/me.jpg"
        height={400}
        width={400}
        alt="Piotr Harmasz"
      />
      <div className="text-center">
        <p className="text-3xl">
          Hello, I&apos;m <text className="font-bold">Piotr Harmasz</text> 👋
        </p>
        <p className="pt-2">Product Manager / Full-stack developer</p>
        <p className="p-0">
          Based in{" "}
          <a
            href="https://goo.gl/maps/jJS5uatf1hbtPGt3A"
            className="underline underline-offset-2"
          >
            Wrocław, Poland
          </a>
        </p>
      </div>
      <div className="flex justify-center gap-x-4 p-8">
        <SiGithub
          className="cursor-pointer"
          size={32}
          onClick={() => {
            window.open("https://github.com/harmasz", "_blank")?.focus();
          }}
        />
        <SiTwitter
          className="cursor-pointer"
          size={32}
          onClick={() => {
            window.open("https://twitter.com/phrm0", "_blank")?.focus();
          }}
        />
        <SiGmail
          className="cursor-pointer"
          size={32}
          onClick={() => {
            window.open("mailto:0xf000h@gmail.com", "_blank")?.focus();
          }}
        />
      </div>
    </div>
  );
};

export default AboutMe;
