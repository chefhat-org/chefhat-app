import styles from './page.module.scss';
import { Button } from '@chakra-ui/react';

type Recipe = {
  id: number;
  name: string;
  description: string;
};

const path = 'http://127.0.0.1:3000';

async function getRecipe() {
  try {
    const response = await fetch(`${path}/api/recipes/1`, {
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const recipe: Recipe = await response.json();
    return recipe;
  } catch (error: unknown) {
    console.log('There has been a problem with your fetch operation: ', error);
  }
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
              <p>Recipe Id: {recipe?.id}</p>
              <p>Recipe name: {recipe?.name}</p>
              <p>Recipe description: {recipe?.description}</p>
            </h1>
          </div>
          <Button colorScheme="blue">Button coming from Chakra UI</Button>
        </div>
      </div>
    </div>
  );
}
