import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import python from '../../assets/python.png';
import react from '../../assets/react.svg';
import next from '../../assets/nextJs.svg';
import angular from '../../assets/Angular.png';
import typescript from '../../assets/Typescript.png';
import playwright from '../../assets/playwright.svg';
import postgresql from '../../assets/Postgresql.svg';
import tailwind from '../../assets/tailwind.png';
import node from '../../assets/nodeJS.png';

function Technologies() {
  const technologies = [
    {
      title: 'React JS',
      image: react,
    },
    {
      title: 'Next JS',
      image: next,
    },
    {
      title: 'Angular',
      image: angular,
    },
    {
      title: 'TypeScript',
      image: typescript,
    },
    {
      title: 'Node JS',
      image: node,
    },
    {
      title: 'Playwright',
      image: playwright,
    },
    {
      title: 'PostgreSQL',
      image: postgresql,
    },
    {
      title: 'Tailwind CSS',
      image: tailwind,
    },
    {
      title: 'Python',
      image: python,
    },
  ];
  return (
    <div className="my-10 flex flex-col items-center justify-center">
      <InfiniteMovingCards items={technologies} direction="right" speed="slow" />
    </div>
  );
}

export default Technologies;
