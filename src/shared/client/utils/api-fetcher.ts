export async function ApiFetcher<ResponseData>(url: string) {
  const response = await fetch(
    new URL(`/v4/${url}`, "https://api.football-data.org"),
    {
      method: "GET",
      headers: {
        "X-Auth-Token": process.env["FOOTBALL_API_KEY"] ?? "",
      },
      next: {
        revalidate: false,
      },
    },
  );

  return (await response.json()) as ResponseData;
}
