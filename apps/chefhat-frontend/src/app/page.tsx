import styles from './page.module.scss';
import { Button } from '@chakra-ui/react';

type Recipe = {
  id: number;
  name: string;
  description: string;
};

const path = 'http://127.0.0.1:3000';

async function getRecipe() {
  const res = await fetch(`${path}/api/recipes/1`, { cache: 'no-store' });

  const recipe: Recipe = await res.json();

  return recipe;
}

export default async function Index() {
  const recipe = await getRecipe();

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              Chefhat
              <p>Recipe Id: {recipe.id}</p>
              <p>Recipe name: {recipe.name}</p>
              <p>Recipe description: {recipe.description}</p>
            </h1>
          </div>
          <Button colorScheme="blue">Button coming from Chakra UI</Button>
        </div>
      </div>
    </div>
  );
}
