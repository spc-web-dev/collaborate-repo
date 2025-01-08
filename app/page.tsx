import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid place-items-center h-screen w-full">
      <div className="w-96 space-y-4">
        <h1>Homepage</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae,
          voluptatum, nesciunt officiis a in optio reiciendis tempore itaque
          iusto corrupti voluptas odio aperiam, consectetur natus recusandae
          voluptate aspernatur dolorem necessitatibus?
        </p>
        <Button variant={"outline"}>Home page button</Button>
      </div>
    </div>
  );
}
