const getIDs = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
  });

const print_ids = async () => {
  const result = await getIDs();
  console.log(result);
};

print_ids();

/*2 */

const getRecipe = (recipeID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: "Fresh tomato pasta",
          publisher: "Pinchas Hodadad",
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recipeID
    );
  });
};

getRecipe(4).then((data) => console.log(data));

async function func2() {
  const result = await getRecipe(4);
  console.log(result);
}

func2();

//3

getIDs()
  .then((IDs) => {
    console.log(IDs);
    return getRecipe(IDs[2]);
  })
  .then((recipe) => {
    console.log(recipe);
  })
  .catch((error) => {
    console.log("It is an error!");
  });


async function func3() {
  try {
    const result = await getIDs();
    console.log(res);
    const res2 = await getRecipe(result[2]);
    console.log(res2);
  } 
  catch (error) {
    console.log("Error!");
  }
}

func3();