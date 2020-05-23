const isUniqueName = (state, contact) => {
  return !state.some((el) => el.name === contact.name);
};

const sortContactsAlphabetically = (contacts) => {
  const sortedArr = [...contacts];

  return sortedArr.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name < b.name) return 1;
    return 0;
  });
};

const filterContactsByName = (contacts, filter) => {
  const filtred = contacts.filter((el) =>
    el.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return sortContactsAlphabetically(filtred);
};

export { isUniqueName, filterContactsByName, sortContactsAlphabetically };
