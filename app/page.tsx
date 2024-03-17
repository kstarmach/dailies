import { SunIcon, BoltIcon, BeakerIcon, CakeIcon, Battery50Icon } from "@heroicons/react/16/solid";

interface TaskProps {
  icon: JSX.Element;
  number: string;
  title: string;
  description: string;
  key: string; // Add key prop to TaskProps
}

const TaskItem = ({ icon, number, title, description, key }: TaskProps) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between" key={key}>
      <div className="flex items-center gap-6 mb-4 lg:mb-0">
        <div className="bg-stone-800 rounded-full p-4">{icon}</div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="text-5xl w-4 mr-8">{number}</span>
            <h2 className="text-3xl uppercase">{title}</h2>
          </div>
          <p className="text-lg max-w-[800px]">{description}</p>
        </div>
      </div>
      <input type="checkbox" className="cursor-pointer w-10 border-4 border-stone-800 rounded-sm bg-inherit align-self-end" />
    </div>
  );
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 lg:p-24">
      <div className="text-5xl font-medium text-center">
        <h1>DO YOUR</h1>
        <h1 className="text-white bg-stone-800 text-7xl p-4 m-3">DAILIES.</h1>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <TaskItem key="1" icon={<SunIcon className="w-10 text-white" />} number="1." title="Sunlight" description="At least 20 minutes direct sunlight." />
        <TaskItem key="2" icon={<BoltIcon className="w-10 text-white" />} number="2." title="Movement" description="45+ minutes movement of choice (basketball, walk, swim, run, weight train, etc.)" />
        <TaskItem key="3" icon={<BeakerIcon className="w-10 text-white" />} number="3." title="Water" description="Don't forget to stay hydrated! Plain, good ol' H2O" />
        <TaskItem key="4" icon={<CakeIcon className="w-10 text-white" />} number="4." title="Eat" description="Consume protein and a variety of fruits & veggies with each meal (to fuel your body with the nutrients it needs to keep you strong & healthy)." />
        <TaskItem key="5" icon={<Battery50Icon className="w-10 text-white" />} number="5." title="Sleep" description="8+ hours per night!" />
      </div>
    </main>
  );
};
