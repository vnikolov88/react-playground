
export const useProject = (id?: string) => {
  return {
    data: {
      id: "1",
      name: 'Project 1',
    },
    isLoading: false,
    error: null as Error | null,
  }
}