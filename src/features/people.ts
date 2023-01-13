
export const getPersonById = async (id: string): Promise<GetPersonByIdResponse> => {
  return {
    id: "1",
    name: "Person 1",
  };
}

export type GetPersonByIdResponse = {
  id: string;
  name: string;
};

export const upsertPerson = async (person: PersonUpsertRequest) => {
  // ...
  return Promise.resolve();
};

export type PersonUpsertRequest = {
  id: string;
  name: string;
};