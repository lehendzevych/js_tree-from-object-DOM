'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const dataKeys = Object.keys(data);

  if (!dataKeys.length) {
    return;
  }

  const list = document.createElement('ul');

  dataKeys.forEach(key => {
    const listItem = document.createElement('li');
    listItem.textContent = key;

    if (Object.keys(data[key]).length) {
      createTree(listItem, data[key]);
    }

    list.append(listItem);
  });

  element.append(list);
}

createTree(tree, food);
