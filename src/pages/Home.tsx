import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();
  const onDeployNavigate = () => {
    navigate('/deploy');
  };

  return (
    <>
      <button className="btn" type="button" onClick={onDeployNavigate}>
        Deploy
      </button>
      <h1 className="text-3xl font-bold underline">Vite World</h1>
      <article className="prose lg:prose-xl">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
      </article>
      <button className="btn" type="button">
        tailwind
      </button>
      <button className="btn  bg-red-500" type="button">
        init
      </button>

      <select className="px-8 py-3 rounded">
        <option>Minsk</option>
        <option>Kiev</option>
        <option>Brest</option>
        <option>Gomel</option>
      </select>
      <input type="checkbox" className="rounded text-pink-500" />
    </>
  );
}
