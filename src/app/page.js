import { QuotesCard } from "@/components/quotes/quotes.card";
import { QuotesCreate } from "@/components/quotes/quotes.create";

async function getQuotes() {
  try {
    const res = await fetch("https://v1.appbackend.io/v1/rows/dOrJwP4RwXk8", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Page() {
  const { data } = await getQuotes();

  return (
    <body>
      <div className="m-20">
        <QuotesCreate />
        <div className="grid grid-cols-3 gap-5">
          {data.map((db) => {
            return (
              <QuotesCard
                key={db._id}
                id={db._id}
                name={db.name}
                quotes={db.quotes}
              />
            );
          })}
        </div>
      </div>
    </body>
  );
}
