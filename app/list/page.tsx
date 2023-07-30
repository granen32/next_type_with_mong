import { connectDB } from "@/util/database";
import tw from "twin.macro";
export default async function List() {
  const db = (await connectDB).db("forum");
  const result = await db.collection("post").find().toArray();
  console.log(result);
  return (
    <div tw="">
      {result.map((el, index) => (
        <>
          <div className="list-item" key={index}>
            <h4>{el.title}</h4>
            <p>{el.content}</p>
          </div>
        </>
      ))}
    </div>
  );
}
