import { getPersonById, GetPersonByIdResponse } from './../features/people';
import { useEffect, useState } from "react";
import { upsertPerson } from "../features/people";

export default function usePerson(id?: string) {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [person, setPerson] = useState<GetPersonByIdResponse>();

  useEffect(() => {
    if (!id)
      return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setPerson(await getPersonById(id));
      } catch (error) {
        setError(error as Error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  const upsert = (person: {
    id: string;
    name: string;
  }) => {
    upsertPerson(person).catch((error) => {
      setError(error);
    });
  };

  return {
    data: person,
    upsert,
    isLoading,
    error,
  };
}