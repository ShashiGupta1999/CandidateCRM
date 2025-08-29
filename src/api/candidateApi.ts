import type { Candidate } from "../stores/candidate.ts";
export async function fetchCandidateApi() {
  // Simulate network delay and return mock data
  return await new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          id: 1,
          name: "William Sample",
          title: "Senior Product Manager",
          country: "United States",
          city: "Dallas",
          // ...other fields
        }),
      500
    )
  );
}

export async function updateCandidateApi(updated: Partial<Candidate>) {
  // Simulate network delay and return updated data
  return await new Promise((resolve) =>
    setTimeout(() => resolve(updated), 300)
  );
}
